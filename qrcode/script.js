const menuUrlInput = document.getElementById("menu-url");
const generateBtn = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {
    let menuUrl = menuUrlInput.value.trim();
    if (menuUrl === "") return alert("Please enter a menu URL!");

    let qr = new QRious({
        element: qrImage,
        value: menuUrl,
        size: 200
    });

    qrImage.style.display = "block";
    downloadBtn.href = qrImage.src;
    downloadBtn.classList.remove("hidden");
});
