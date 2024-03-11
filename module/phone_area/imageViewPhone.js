const imageFileContainerDOM = document.getElementsByClassName("phone")[0];

function phoneImagechange(imgSrc) {
    const phoneImgDOM = document.createElement("img");
    phoneImgDOM.src = imgSrc;
    imageFileContainerDOM.appendChild(phoneImgDOM);
}

export function imageViewPhone() {
    const imagesDOM = document.querySelectorAll(".phone img");
    [...imagesDOM]?.forEach((imageDOM) => {
        imageDOM.remove();
    });

    [...document.getElementsByClassName("image-file")].forEach((imageFileDom) => {
        phoneImagechange(imageFileDom.src);
    });
}
