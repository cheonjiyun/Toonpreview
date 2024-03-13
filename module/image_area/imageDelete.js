// 삭제버튼
import { updatePhoneImage } from "../phone_area/imageViewPhone.js";

export function imageDelete(event) {
    updatePhoneImage("delete", event.target.previousElementSibling.id);
    event.target.parentElement.remove();
}
