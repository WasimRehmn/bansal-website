
function toggleNav() {
    let isOpen = document.getElementById("mySidenav").style.width 

    if (isOpen == "" ||isOpen == "0px"){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById('toogleIcon').className =  "fa-solid fa-xmark";
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById('toogleIcon').className =  "fa-solid fa-bars";

    }
}

function activeTab() {
    let loaderComponent = document.querySelector(".loader_wrapper")
    loaderComponent.style.display = "none"

    let mainNabTab = document.querySelectorAll(".menu li > a")
    let tabs = document.querySelectorAll(".sidenav > a")
    let sideNabTab = [];
    for (let i = 0; i < tabs.length; i++) {
        if (i === 0 ) {
            continue
        }
        sideNabTab.push(tabs[i])
    }

   

    for (let i = 0; i < mainNabTab.length; i++) {
        let location = window.location.href === "http://127.0.0.1:5500/book-details.html" ? "http://127.0.0.1:5500/books.html" : window.location.href;
        
        if (location === mainNabTab[i].href) {
            mainNabTab[i].classList.add("activeTab")
            sideNabTab[i].classList.add("activeTab")
        } else {
            mainNabTab[i].classList.remove("activeTab")
            sideNabTab[i].classList.remove("activeTab")

        }
    }
}
