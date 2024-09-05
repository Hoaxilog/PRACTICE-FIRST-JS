const shareBtn = document.querySelector(".share-btn")
const shareMenu = document.querySelector(".share-menu")

shareBtn.addEventListener("click", () => {
    let a = shareMenu.style.display 
    if (a === 'flex') {
        shareMenu.style.display = 'none';
    } else {
        shareMenu.style.display = 'flex';
    }

})


