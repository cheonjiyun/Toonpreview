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

const imageFileAreaDOM = document.querySelector(".image-file-area");
imageFileAreaDOM.addEventListener("dragover", imageMove);

// 이동 이벤트
function imageMove(event) {
    event.preventDefault();

    // DOM
    const draggingDOM = document.querySelector(".image-file-container.dragging");
    const notDraggingDOMs = [...document.querySelectorAll(".image-file-container:not(.dragging)")];

    // 가장가까운DOM
    let closeNumber = Number.MIN_SAFE_INTEGER;
    let closeDOM;
    notDraggingDOMs.forEach((notDraggingDOM) => {
        const rect = notDraggingDOM.getBoundingClientRect();
        const offset = event.clientY - rect.top - rect.height / 2;

        if (offset < 0 && offset > closeNumber) {
            closeNumber = offset;
            closeDOM = notDraggingDOM;
        }
    });

    if (closeDOM == undefined) {
        // 맨 마지막이라면
        imageFileAreaDOM.appendChild(draggingDOM);
    } else {
        imageFileAreaDOM.insertBefore(draggingDOM, closeDOM);
    }
}

// DOM
function imageFileDOM(title, image) {
    const imageFileContainerDOM = document.createElement("div");
    imageFileContainerDOM.className = "image-file-container";
    imageFileContainerDOM.draggable = "true";
    imageFileContainerDOM.addEventListener("dragstart", (event) => {
        event.target.classList.add("dragging");
    });
    // imageFileContainerDOM.addEventListener("dragover", imageMove);
    imageFileContainerDOM.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
    });

    const imageFileDOM = document.createElement("img");
    imageFileDOM.className = "image-file";
    imageFileDOM.src = image;

    const btnImageDeleteDOM = document.createElement("div");
    btnImageDeleteDOM.className = "image-delete";
    btnImageDeleteDOM.addEventListener("click", imageDelete);

    const imageTitleDOM = document.createElement("div");
    imageTitleDOM.className = "image-title";
    imageTitleDOM.innerHTML = `${title}`;

    imageFileContainerDOM.appendChild(imageFileDOM);
    imageFileContainerDOM.appendChild(btnImageDeleteDOM);
    imageFileContainerDOM.appendChild(imageTitleDOM);

    return imageFileContainerDOM;
}

// const dataTransfer = new DataTransfer();

/* 왼쪽 썸네일 */
const btnUploadInputDOM = document.querySelector("#btn-upload");
const btnUploadLabel = document.querySelector(".image-drag");
const fileAreaDOM = document.querySelector(".file-area");

// 원고 박스 추가
function addImageDiv(files) {
    [...files].forEach((el, i) => {
        let reader = new FileReader();
        reader.readAsDataURL(el);

        reader.addEventListener("load", () => {
            imageFileAreaDOM.appendChild(imageFileDOM(el.name, reader.result));
        });
    });
}

// 클릭했을 때
btnUploadInputDOM.addEventListener("change", (event) => {
    addImageDiv(event.target.files);
});

//드래그 앤 드롭

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
