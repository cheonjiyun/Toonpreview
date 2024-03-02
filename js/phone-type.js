// let phonetype = document.querySelector("input[name='phonetype'][checked]");/
let phonetypes = document.querySelectorAll("input[name='phonetype']");
let phone = document.querySelector(".phone");

function changePhone() {
    const phonetype = document.querySelector("input[name='phonetype']:checked");
    phone.className = `phone ${phonetype.id}`;
    console.log(phonetype);
}

for (const phonetype of phonetypes) {
    phonetype.addEventListener("click", changePhone);
}
// phone.classList.add(phonetype.id);
// console.log(phonetype.id);
// console.log(phonetypes);

console.log(phonetypes);
console.log("흠냐");
