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
function imageFileHtml(title, image) {
    return `<div class="image-files" style="background-image : url('${image}')" draggable="true">
    <div role="button" class="image-delete">
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_14_147" fill="white">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.1224 0.87746C27.9525 -0.292489 26.0556 -0.292486 24.8857 0.877463L15 10.7632L5.1143 0.877464C3.94435 -0.292485 2.04749 -0.292484 0.877548 0.877465C-0.292398 2.04741 -0.292395 3.94428 0.877551 5.11423L10.7632 15L0.877459 24.8858C-0.292487 26.0557 -0.292486 27.9526 0.877459 29.1225C2.0474 30.2925 3.94427 30.2925 5.11421 29.1225L15 19.2367L24.8858 29.1225C26.0557 30.2925 27.9526 30.2925 29.1225 29.1225C30.2925 27.9526 30.2925 26.0557 29.1225 24.8858L19.2367 15L29.1224 5.11422C30.2924 3.94427 30.2924 2.04741 29.1224 0.87746Z"
                />
            </mask>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.1224 0.87746C27.9525 -0.292489 26.0556 -0.292486 24.8857 0.877463L15 10.7632L5.1143 0.877464C3.94435 -0.292485 2.04749 -0.292484 0.877548 0.877465C-0.292398 2.04741 -0.292395 3.94428 0.877551 5.11423L10.7632 15L0.877459 24.8858C-0.292487 26.0557 -0.292486 27.9526 0.877459 29.1225C2.0474 30.2925 3.94427 30.2925 5.11421 29.1225L15 19.2367L24.8858 29.1225C26.0557 30.2925 27.9526 30.2925 29.1225 29.1225C30.2925 27.9526 30.2925 26.0557 29.1225 24.8858L19.2367 15L29.1224 5.11422C30.2924 3.94427 30.2924 2.04741 29.1224 0.87746Z"
                fill="black"
            />
            <path
                d="M24.8857 0.877463L23.825 -0.183196V-0.183196L24.8857 0.877463ZM29.1224 0.87746L30.1831 -0.183198V-0.183198L29.1224 0.87746ZM15 10.7632L13.9393 11.8239L15 12.8845L16.0607 11.8239L15 10.7632ZM5.1143 0.877464L6.17496 -0.183195V-0.183195L5.1143 0.877464ZM0.877548 0.877465L-0.183114 -0.183194L0.877548 0.877465ZM0.877551 5.11423L-0.183111 6.17489L0.877551 5.11423ZM10.7632 15L11.8239 16.0606L12.8846 15L11.8239 13.9393L10.7632 15ZM0.877459 24.8858L1.93812 25.9464L0.877459 24.8858ZM0.877459 29.1225L1.93812 28.0619L0.877459 29.1225ZM5.11421 29.1225L4.05355 28.0619L5.11421 29.1225ZM15 19.2367L16.0607 18.1761L15 17.1154L13.9393 18.1761L15 19.2367ZM24.8858 29.1225L25.9465 28.0619L24.8858 29.1225ZM29.1225 29.1225L28.0619 28.0619L28.0619 28.0619L29.1225 29.1225ZM29.1225 24.8858L30.1832 23.8251L29.1225 24.8858ZM19.2367 15L18.1761 13.9393L17.1154 15L18.1761 16.0606L19.2367 15ZM29.1224 5.11422L30.1831 6.17488L29.1224 5.11422ZM25.9464 1.93812C26.5305 1.35396 27.4776 1.35396 28.0618 1.93812L30.1831 -0.183198C28.4274 -1.93894 25.5808 -1.93893 23.825 -0.183196L25.9464 1.93812ZM16.0607 11.8239L25.9464 1.93812L23.825 -0.183196L13.9393 9.70253L16.0607 11.8239ZM4.05363 1.93812L13.9393 11.8239L16.0607 9.70253L6.17496 -0.183195L4.05363 1.93812ZM1.93821 1.93812C2.52237 1.35396 3.46948 1.35396 4.05363 1.93812L6.17496 -0.183195C4.41922 -1.93893 1.57262 -1.93893 -0.183114 -0.183194L1.93821 1.93812ZM1.93821 4.05357C1.35405 3.46941 1.35405 2.52228 1.93821 1.93812L-0.183114 -0.183194C-1.93885 1.57254 -1.93884 4.41915 -0.183111 6.17489L1.93821 4.05357ZM11.8239 13.9393L1.93821 4.05357L-0.183111 6.17489L9.70259 16.0606L11.8239 13.9393ZM1.93812 25.9464L11.8239 16.0606L9.70259 13.9393L-0.183203 23.8251L1.93812 25.9464ZM1.93812 28.0619C1.35396 27.4777 1.35396 26.5306 1.93812 25.9464L-0.183203 23.8251C-1.93893 25.5808 -1.93893 28.4275 -0.183202 30.1832L1.93812 28.0619ZM4.05355 28.0619C3.46939 28.646 2.52228 28.646 1.93812 28.0619L-0.183202 30.1832C1.57253 31.9389 4.41914 31.9389 6.17487 30.1832L4.05355 28.0619ZM13.9393 18.1761L4.05355 28.0619L6.17487 30.1832L16.0607 20.2974L13.9393 18.1761ZM25.9465 28.0619L16.0607 18.1761L13.9393 20.2974L23.8251 30.1832L25.9465 28.0619ZM28.0619 28.0619C27.4777 28.646 26.5306 28.646 25.9465 28.0619L23.8251 30.1832C25.5809 31.9389 28.4275 31.9389 30.1832 30.1832L28.0619 28.0619ZM28.0619 25.9464C28.646 26.5306 28.646 27.4777 28.0619 28.0619L30.1832 30.1832C31.9389 28.4275 31.9389 25.5808 30.1832 23.8251L28.0619 25.9464ZM18.1761 16.0606L28.0619 25.9464L30.1832 23.8251L20.2974 13.9393L18.1761 16.0606ZM28.0618 4.05356L18.1761 13.9393L20.2974 16.0606L30.1831 6.17488L28.0618 4.05356ZM28.0618 1.93812C28.6459 2.52228 28.6459 3.4694 28.0618 4.05356L30.1831 6.17488C31.9388 4.41914 31.9388 1.57254 30.1831 -0.183198L28.0618 1.93812Z"
                fill="white"
                mask="url(#path-1-inside-1_14_147)"
            />
        </svg>
    </div>
    <div class="image-title">
        ${title}
    </div>
    </div>`;
}

// const dataTransfer = new DataTransfer();

// 왼쪽 썸네일
const btnUploadInput = document.querySelector("#btn-upload");

// 원고 박스 추가
function addImageDiv(files) {
    [...files].forEach((el, i) => {
        let reader = new FileReader();
        reader.readAsDataURL(el);

        reader.addEventListener("load", () => {
            btnUploadInput.insertAdjacentHTML(
                "beforebegin",
                imageFileHtml(el.name, reader.result)
            );
        });
    });
}

// 클릭했을 때
btnUploadInput.addEventListener("change", (event) => {
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
