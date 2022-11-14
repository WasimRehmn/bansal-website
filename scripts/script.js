
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function activeTab() {
    let loaderComponent = document.querySelector(".loader_wrapper")
    loaderComponent.style.display = "none"

    let mainNabTab = document.querySelectorAll(".menu li > a")
    let tabs = document.querySelectorAll(".sidenav > a")
    let sideNabTab = [];
    for (let i = 0; i < tabs.length; i++) {
        if (i === 0 || i === 1) {
            continue
        }
        sideNabTab.push(tabs[i])
    }

    for (let i = 0; i < 5; i++) {
        if (window.location.href === mainNabTab[i].href) {
            mainNabTab[i].classList.add("activeTab")
            sideNabTab[i].classList.add("activeTab")
        } else {

            mainNabTab[i].classList.remove("activeTab")
            sideNabTab[i].classList.remove("activeTab")

        }
    }
}
