    const tabsBtn = document.querySelectorAll(".accordion");
    const panel = document.querySelectorAll(".panel")

    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-t");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                });
                panel.forEach(function (item) {
                    item.classList.remove('active');
                });

                currentTab.classList.add('active')
                currentBtn.classList.add('active');
                // currentTab.classList.add('active');

            };
        });
};
   