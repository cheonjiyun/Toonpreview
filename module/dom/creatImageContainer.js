import { deleteImage } from "../image_area/deleteImage.js";

let imageId = 1;

// DOM
export function creatImageContainerDOM(title, image) {
    const imageFileContainerDOM = document.createElement("div");
    imageFileContainerDOM.className = "image-file-container";
    imageFileContainerDOM.draggable = "true";
    imageFileContainerDOM.addEventListener("dragstart", (event) => {
        event.target.classList.add("dragging");
    });
    imageFileContainerDOM.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
    });

    const imageFileDOM = document.createElement("img");
    imageFileDOM.className = "image-file";
    imageFileDOM.src = image;
    imageFileDOM.dataset.id = imageId++;

    const btnImageDeleteDOM = document.createElement("div");
    btnImageDeleteDOM.className = "image-delete";
    btnImageDeleteDOM.addEventListener("click", deleteImage);

    const imageTitleDOM = document.createElement("div");
    imageTitleDOM.className = "image-title";
    imageTitleDOM.innerHTML = `${title}`;

    imageFileContainerDOM.appendChild(imageFileDOM);
    imageFileContainerDOM.appendChild(btnImageDeleteDOM);
    imageFileContainerDOM.appendChild(imageTitleDOM);

    return imageFileContainerDOM;
}
