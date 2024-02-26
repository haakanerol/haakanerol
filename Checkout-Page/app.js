// selectors
const deleteAll = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")




// event handlers

deleteAll.addEventListener("click",()=>{
   products.textContent = "No Products"
   products.classList.add("no-product")
   document.querySelector(".delete-div").style.display = "none"
})

products.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.classList.contains("fa-plus")){
        e.target.previousElementSibling.textContent++
        calcPrice(e.target)

    }else if (e.target.classList.contains("fa-minus")){

    }else if (e.target.classList.contains("fa-trash-can")){
       
    }


})

const calcPrice = (btn)=>{
    const discountPrice = btn.closest(".product-info")
                             .querySelector("#discounted-price")
         console.log(discountPrice.textContent);                    

}