const buttons = document.querySelectorAll(".btn, .main-button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);
    });
});

function showDownload(event) {
    event.preventDefault();

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

