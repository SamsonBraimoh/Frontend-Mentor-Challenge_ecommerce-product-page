// alert("Hello, I'm here.");

const show = document.getElementById("productImage");
const popUpDisplayed = document.getElementById("productPopUpImage");
const productViews = ["1", "2", "3", "4"];
const view = document.querySelectorAll(".view");
const popUpSelectedImage = document.querySelectorAll(".popUpView");
const viewSelected = document.querySelectorAll(".view-container");
const viewSelectedPopUp = document.querySelectorAll(".popUpSelection");
const modal = document.getElementById("popUp");
const closePopUp = document.getElementById("close");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let currentIndex = 0;



    view.forEach((img, index) =>{
            img.addEventListener("click",  ()=>{
                show.setAttribute("src", `images/image-product-${productViews[index]}.jpg`);
               
                activeSelector(img, index);
               

            });
    });

    const activeSelector = (img, index) => {
        view.forEach((el) => el.classList.remove("selected"));
        viewSelected.forEach((box) => box.classList.remove("boxSelected"));
       
        img.classList.add("selected")
        viewSelected[index].classList.add("boxSelected")
    }

    popUpSelectedImage.forEach((img, index) =>{
            img.addEventListener("click", ()=>{
            
                popUpDisplayed.setAttribute("src", `images/image-product-${productViews[index]}.jpg`);

                activePopUpSelected(img, index);
            })
    });

    const activePopUpSelector = (img, index)=>{
        popUpSelectedImage.forEach((el) => el.classList.remove("selected"));
        viewSelectedPopUp.forEach((box) => box.classList.remove("boxSelected"));
       
        img.classList.add("selected")
        viewSelectedPopUp[index].classList.add("boxSelected")
    }


    show.addEventListener("click", () => {
        popUpDisplayed.src = show.src
        modal.classList.remove("hidden");

        const index = Array.from(popUpSelectedImage).findIndex( );
        console.log(index)
       
       
            activePopUpSelector(popUpSelectedImage[index], index);
       
        console.log(popUp)
    })

    closePopUp.addEventListener("click", () => {modal.classList.add("hidden")});

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % (productViews.length);
        popUpDisplayed.src = `images/image-product-${productViews[currentIndex]}.jpg`;
        activePopUpSelector(popUpSelectedImage[currentIndex], currentIndex);
    });

    previous.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + productViews.length) % (productViews.length);
        popUpDisplayed.src = `images/image-product-${productViews[currentIndex]}.jpg`;
        activePopUpSelector(popUpSelectedImage[currentIndex], currentIndex);
    });





