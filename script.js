const buttons = document.querySelectorAll(".questions button")
const answers = document.querySelectorAll(".answer")

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const currentAnswer = button.previousElementSibling
        const wasOpen = currentAnswer.style.display === "block"

        answers.forEach(ans => {
            ans.style.display = 'none';
        })

        buttons.forEach(btn => {
            btn.textContent = "+"
            btn.classList.remove("active")  
        })

        if (!wasOpen) {
            currentAnswer.style.display = 'block'
            button.textContent = "-"
            button.classList.add("active") 
        }
    })
})
