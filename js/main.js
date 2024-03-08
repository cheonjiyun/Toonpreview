// 폰 종류
let phonetypes = document.querySelectorAll("input[name='phonetype']");
let phone = document.querySelector(".phone");

function changePhone() {
    const phonetype = document.querySelector("input[name='phonetype']:checked");
    phone.className = `phone ${phonetype.id}`;
}

for (const phonetype of phonetypes) {
    phonetype.addEventListener("click", changePhone);
}

// 파일업로드

// 삭제버튼
function imageDelete(event) {
    event.target.parentElement.remove();
}

function imageFileDOM(title, image) {
    const imageFileContianerDOM = document.createElement("div");
    imageFileContianerDOM.className = "image-file-container";
    imageFileContianerDOM.style.backgroundImage = `url('${image}')`;
    imageFileContianerDOM.draggable = "true";

    const btnImageDeleteDOM = document.createElement("div");
    btnImageDeleteDOM.className = "image-delete";
    btnImageDeleteDOM.addEventListener("click", imageDelete);

    const imageTitleDOM = document.createElement("div");
    imageTitleDOM.className = "image-title";
    imageTitleDOM.innerHTML = `${title}`;

    imageFileContianerDOM.appendChild(btnImageDeleteDOM);
    imageFileContianerDOM.appendChild(imageTitleDOM);

    return imageFileContianerDOM;
}

// const dataTransfer = new DataTransfer();

/* 왼쪽 썸네일 */
const btnUploadInputDOM = document.querySelector("#btn-upload");

// 원고 박스 추가
function addImageDiv(files) {
    [...files].forEach((el, i) => {
        let reader = new FileReader();
        reader.readAsDataURL(el);

        reader.addEventListener("load", () => {
            btnUploadInputDOM.insertAdjacentElement(
                "beforebegin",
                imageFileDOM(el.name, reader.result)
            );
        });
    });
}

// 클릭했을 때
btnUploadInputDOM.addEventListener("change", (event) => {
    addImageDiv(event.target.files);
});

//드래그 앤 드롭
const btnUploadLabel = document.querySelector(".image-drag");
function stopandprevent(event) {
    event.stopPropagation();
    event.preventDefault();
}
btnUploadLabel.addEventListener(
    "dragenter",
    (event) => {
        stopandprevent(event);
        btnUploadLabel.style.backgroundColor = "#e9e9e9";
        console.log("dragenter");
    },
    false
);

btnUploadLabel.addEventListener("dragover", stopandprevent, false);
btnUploadLabel.addEventListener(
    "drop",
    (event) => {
        stopandprevent(event);
        addImageDiv(event.dataTransfer.files);
    },
    false
);

btnUploadLabel.addEventListener(
    "dragleave",
    (event) => {
        stopandprevent(event);
        btnUploadLabel.style.backgroundColor = "#f8f8f8";
        console.log("dragleave");
    },
    false
);
