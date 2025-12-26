const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const materialSelect = document.getElementById("material");
const priceDisplay = document.getElementById("price");
const fileUpload = document.getElementById("fileUpload");
const previewImage = document.getElementById("previewImage");

function calculatePrice() {
  const width = parseFloat(widthInput.value);
  const height = parseFloat(heightInput.value);
  const rate = parseFloat(materialSelect.value);
  if (!isNaN(width) && !isNaN(height)) {
    const sqft = (width * height) / 144;
    const price = (sqft * rate).toFixed(2);
    priceDisplay.textContent = `Estimated Price: $${price}`;
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImage.src = e.target.result;

      const width = parseFloat(widthInput.value);
      const height = parseFloat(heightInput.value);
      if (!isNaN(width) && !isNaN(height)) {
        previewImage.style.width = (width * 2) + "px";
        previewImage.style.height = "auto";
      }
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.src = "";
    previewImage.alt = "Preview not supported for this file type.";
  }
}

// Add explicit click handler for the upload button as a Chrome compatibility fix
const uploadBtn = document.querySelector(".upload-btn");
if (uploadBtn) {
  uploadBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    fileUpload.click();
  });
}

widthInput.addEventListener("input", calculatePrice);
heightInput.addEventListener("input", calculatePrice);
materialSelect.addEventListener("change", calculatePrice);
fileUpload.addEventListener("change", handleFileUpload);

calculatePrice();
