newBg = document.querySelector(".bgDiv")
newBtnClick = document.querySelector(".btn-click")
newBtnOver = document.querySelector(".btn-over")
newColorInput = document.querySelector("#colorInput")
newColorText = document.querySelector("#colorText")


function bgColor(){
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
newBg.style.backgroundColor = randomColor;
newColorInput.value = randomColor;
newColorText.textContent = randomColor;
}

newBtnClick.addEventListener("click",bgColor)
newBtnClick.addEventListener("reload",bgColor)
newBtnOver.addEventListener("mouseover",bgColor)
newBtnClick.addEventListener('keydown', (e) => {
if (e.code === "Enter") {
      bgColor();
    }
});
window.onload = ()=> bgColor();
// window.addEventListener('load', bgColor());
