newHeader = document.querySelector(".header")
newHeader.style.backgroundColor = "red"
newHeader.style.opacity = "0.8"
newHeader.style.color = "white"
newHeader.style.textAlign = "center"
newHeader.style.padding = "2rem"

newTitle = document.getElementById("title")
newTitle.textContent = "Javascript Dom Assigment 1"
newTitle.style.marginBottom = "1rem"

newNavItem = document.querySelector(".nav-item")
newNavItem.style.display = "flex"
newNavItem.style.justifyContent = "center"
newNavItem.style.gap = "1.5rem"
newNavItem.style.listStyle = "none"

newUsername = document.querySelector("#username")
newPassword = document.querySelector("#password")
newUsername.value = "Anthony"
newPassword.value = "123456"
newPassword.type = "number"
// newUsername.disabled = "true"
newPassword.disabled = "true"
newUsername.padding = "1.5rem"