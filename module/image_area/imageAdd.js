import { creatImageContainerDOM } from "../dom/creatImageContainer.js";
import { updatePhoneImage } from "../phone_area/imageViewPhone.js";

const imageFileAreaDOM = document.querySelector(".image-file-area");

// 이미지 컨테이너 추가
export function addImageDiv(files) {
    [...files].forEach((el, i) => {
        let reader = new FileReader();
        reader.readAsDataURL(el);

        reader.addEventListener("load", () => {
            const imageFileDOM = creatImageContainerDOM(el.name, reader.result);
            imageFileAreaDOM.appendChild(imageFileDOM);
            updatePhoneImage("add", imageFileDOM.firstElementChild.id);
        });
    });
}
