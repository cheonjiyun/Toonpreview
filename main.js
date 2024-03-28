import { imageMove } from "/module/image_area/imageMove.js";
import { addImageDiv } from "/module/image_area/imageAdd.js";
import { updatePhoneImage } from "/module/phone_area/imageViewPhone.js";

// 미리보기 유무
export let previewFlag = "zero";

// --- 이미지 ---
// 파일이동
const imageFileAreaDOM = document.querySelector(".image-file-area");
imageFileAreaDOM.addEventListener("dragover", imageMove);
// 파일이동

// 파일추가
const btnUploadInputDOM = document.querySelector("#btn-upload");
const fileAreaDOM = document.querySelector(".file-area");

// 1. 클릭했을 때
btnUploadInputDOM.addEventListener("change", (event) => {
    const draggingDOM = document.querySelector(".image-file-container.dragging");
    if (draggingDOM) return; // 처음 파일을 드래그해서 올릴 때는 대비한 예외처리

    previewFlag = previewFlag == "zero" ? "frist" : "afterSecond";
    addImageDiv(event.target.files);
});

// 2. 드래그 앤 드롭
function stopandprevent(event) {
    event.stopPropagation();
    event.preventDefault();
}
fileAreaDOM.addEventListener(
    "dragenter",
    (event) => {
        stopandprevent(event);
    },
    false
);

fileAreaDOM.addEventListener("dragover", stopandprevent, false);
fileAreaDOM.addEventListener(
    "drop",
    (event) => {
        const draggingDOM = document.querySelector(".image-file-container.dragging");
        if (draggingDOM) return; // 처음 파일을 드래그해서 올릴 때는 대비한 예외처리

        previewFlag = previewFlag == "zero" ? "frist" : "afterSecond";
        stopandprevent(event);
        addImageDiv(event.dataTransfer.files);
    },
    false
);

fileAreaDOM.addEventListener(
    "dragleave",
    (event) => {
        stopandprevent(event);
    },
    false
);
// --- //이미지 ---
// --- 폰 화면 ---

imageFileAreaDOM.addEventListener("dragend", () => {
    updatePhoneImage("move");
});

// --- //폰 화면 ---

// --- 폰 종류 ---
let phonetypesDOMs = document.querySelectorAll("input[name='phonetype']");
let phoneContainerDOM = document.querySelector(".phone-container");

function changePhone() {
    const phonetype = document.querySelector("input[name='phonetype']:checked");
    phoneContainerDOM.className = `phone-container ${phonetype.id}`;
}

for (const phonetype of phonetypesDOMs) {
    phonetype.addEventListener("click", changePhone);
}

// --- //폰 종류 ---

// 미리보기 웹툰
async function setPreview() {
    for (let i = 1; i <= 3; i++) {
        fetch(`/assets/img/preview/미리보기_00${i}.png`)
            .then((response) => {
                return response.blob();
            })
            .then((blob) => {
                console.log(blob);
                const file = new File([blob], `미리보기_00${i}.png`);
                addImageDiv([file]);
            });
    }
}

window.addEventListener("load", setPreview);
