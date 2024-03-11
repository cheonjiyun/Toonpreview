import { imageFileDOM } from "../dom/creatImageContainer.js";
import { imageViewPhone } from "../phone_area/imageViewPhone.js";

const imageFileAreaDOM = document.querySelector(".image-file-area");

// 이미지 컨테이너 추가
export function addImageDiv(files) {
    [...files].forEach((el, i) => {
        let reader = new FileReader();
        reader.readAsDataURL(el);

        reader.addEventListener("load", () => {
            imageFileAreaDOM.appendChild(imageFileDOM(el.name, reader.result));
            imageViewPhone();
        });
    });
}
