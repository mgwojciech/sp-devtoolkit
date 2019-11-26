

    chrome.devtools.panels.create("SP Dev Toolkit",
        "MyPanelIcon.png",
        "index.html",
        function (panel) {
            console.log("Test");
        }
    );