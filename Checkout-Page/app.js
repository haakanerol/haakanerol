// selectors
const deleteAll = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")


const FREE_SHIPPING_LIMIT = 2000
const SHIPPING_PRICE = 25.99
const TAX_RATE = 0.18

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
        if(e.target.nextElementSibling.textContent>1){
        e.target.nextElementSibling.textContent--}
        calcPrice(e.target)

    }else if (e.target.classList.contains("fa-trash-can")){
        e.target.closest(".product").remove()
       
    }


})

const calcPrice = (btn)=>{
    const discountPrice = btn.closest(".product-info")
                             .querySelector("#discounted-price");
    const productPrice = btn.closest(".button-div") 
                            .querySelector("#product-price");  
                           
    const quantity = btn.parentNode.querySelector("#quantity")                   
         console.log(discountPrice.textContent);  
         
         


    calcTotalPrice()
}


const calcTotalPrice = ()=>{
    const prices = document.querySelectorAll("#product-price")
    const total = [...prices].reduce((sum, price) => sum+Number(price.textContent),0)

}