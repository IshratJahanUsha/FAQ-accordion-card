
const accordion = document.querySelectorAll(".arrow")
console.log(accordion)

accordion.forEach((faq) =>{
    faq.addEventListener("click", () => {
        // faq.style.color = "blue"
        faq.style.transform = "rotate(180deg)"
        faq.nextElementSibling.style.display = 'block'
    })
})


