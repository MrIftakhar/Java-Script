const Password = document.querySelector("#Password");
const togglePassword =document.querySelector("#togglePassword");

togglePassword.addEventListener("click", ()=> {
    const type = Password.getAttribute("type") === "password" ? "text": "password";
    Password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
})