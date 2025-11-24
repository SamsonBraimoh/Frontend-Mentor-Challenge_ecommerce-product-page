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
const increase = document.getElementById("addItems");
const reduce = document.getElementById("subtractItems");
const quantityOfItems = document.getElementById("cartItemCount");
const discount = document.getElementById("discount");
const realPrice = document.getElementById("actualPrice");
const discountedPrice = document.getElementById("discountedPrice");
const cart = document.getElementById("itemsInCart");
const addButton = document.getElementById("addCart");
const pricePerItem = document.getElementById("pricePerItem");
const totalAmount = document.getElementById("totalAmount");
const itemsQuantity = document.getElementById("itemsQuantity");
const cartSummary = document.getElementById("cart");
const cartOverview = document.getElementById("cartOverview");
const cartOverviewMain1 = document.getElementById("cartOverviewMain1");
const cartOverviewMain2 = document. getElementById("cartOverviewMain2");
let currentIndex = 0;
let count = 0;




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
                
                activePopUpSelector(img, index);
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

        for (let i = 0; i < productViews.length; i++) {
            if (show.src.includes(`image-product-${productViews[i]}.jpg`)) {
              activePopUpSelector(popUpSelectedImage[i], i);
              break; 
            }
          }
       
       
        console.log(popUp)
    });
      

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

   const  updateItemsQuantity = () => {
        increase.addEventListener("click", () => {
             count++
             console.log(count);
             updateItems()
        });
        reduce.addEventListener("click", () => {
             if(count > 0){count--}
             updateItems()
             console.log(count);
            });  
        }
        updateItemsQuantity();
        
    const updateItems = () =>{
        quantityOfItems.innerHTML = count;
        
        addButton.addEventListener("click", ()=>{
            if (count > 0){
                cart.classList.remove("hidden")
                cart.innerHTML = count;
    
                cartSummary.addEventListener("click", (e)=>{
                        e.stopPropagation();
                        cartOverview.classList.remove("hidden");
                        cartOverviewMain2.classList.remove("hidden"); 
                        cartOverviewMain1.classList.add("hidden")                  
                });
            };
        });

        cartSummary.addEventListener("click", (e)=>{
            e.stopPropagation();
            cartOverview.classList.remove("hidden")
            cartOverviewMain1.classList.remove("hidden");
        })

        const sellingPrice  = () =>{
            const price = Number(realPrice.textContent.replace(/[^\d.]/g, ''));
            const discountPercentage = Number(discount.textContent.replace(/[^\d.]/g, ''));
            
            const discountAmount = (discountPercentage / 100) * price;
            const actualAmount = `$${price - discountAmount}.00`;
           
            discountedPrice.innerHTML = actualAmount;
            pricePerItem.innerHTML = actualAmount;
            itemsQuantity.innerHTML = count;
            totalAmount.innerHTML = `$${Number(actualAmount.replace(/[^\d.]/g, '')) * count}.00`
        };
        sellingPrice();   
    
    };   
    updateItems();
   
    document.addEventListener("click", ()=>{
            cartOverview.classList.add("hidden");
    });
  
  

   

    
 



