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
let imageFile = document.querySelector("#btn-upload");
imageFile.addEventListener("change", (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.addEventListener("load", () => {
        document.querySelectorAll(
            ".image-files"
        )[0].style.background = `url(${reader.result})`;

        document.querySelectorAll(
            ".image-title"
        )[0].innerText = `${event.target.files[0].name}`;
    });
});
