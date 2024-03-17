const inputs = document.querySelectorAll(".container input");
const image = document.getElementById("imgInput");

function handleChange() {
    const suffix = this.dataset.sizing || "";
    console.log(this.name);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

function addImg() {

    const previewImg = document.querySelector(".image");
    const reader = new FileReader();
    reader.readAsDataURL(image.files[0]);

    reader.onload = function() {
        imageDataUrl = reader.result;
    
        previewImg.src = imageDataUrl;
        console.log(imageDataUrl);
    };
};

inputs.forEach(input => input.addEventListener("change", handleChange));
inputs.forEach(input => input.addEventListener("mousemove", handleChange));