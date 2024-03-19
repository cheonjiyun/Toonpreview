const imageFileContainerDOM = document.getElementsByClassName("phone")[0];
const imageFileDOMs = document.getElementsByClassName("image-file");

function createPhoneImageDOM(imgSrc, imgId) {
    const phoneImgDOM = document.createElement("img");
    phoneImgDOM.src = imgSrc;
    phoneImgDOM.dataset.id = imgId;
    return phoneImgDOM;
}

export function updatePhoneImage(type, id) {
    const imagesDOMs = document.querySelectorAll(".phone img");
    switch (type) {
        case "add":
            const lastImageFileDOM = imageFileDOMs[imageFileDOMs.length - 1];
            const newPhoneImageDOM = createPhoneImageDOM(
                lastImageFileDOM.src,
                lastImageFileDOM.dataset.id
            );
            imageFileContainerDOM.appendChild(newPhoneImageDOM);
            break;
        case "delete":
            [...imagesDOMs]?.find((imageDOM) => imageDOM.dataset.id == id).remove();
            break;
        case "move":
            // 어긋난 노드들
            const noMatchDOMS = [...imagesDOMs]?.filter((imagesDOM, i) => {
                return imagesDOM.dataset.id != imageFileDOMs[i].dataset.id;
            });

            // 어긋난 노드 중 마지막 이미지는 전체에서 몇번째였나?
            const noMacthLastImgIndex = [...imagesDOMs].indexOf(
                noMatchDOMS[noMatchDOMS.length - 1]
            );

            // 그러면 첫번째 이미지가 어느 위치로 갔는가?
            const whereFristImg = [...imageFileDOMs].findIndex(
                (imageFileDOM) => imageFileDOM.dataset.id == noMatchDOMS[0]?.dataset.id
            );

            // 첫번째 이미지가 어긋난 것 중 마지막에 있구나! 내려갔군!
            if (whereFristImg == noMacthLastImgIndex) {
                // 아래로 내려감
                imageFileContainerDOM.insertBefore(
                    noMatchDOMS[0],
                    imagesDOMs[noMacthLastImgIndex + 1]
                );
            } else {
                //위로 올라옴
                imageFileContainerDOM.insertBefore(
                    noMatchDOMS[noMatchDOMS.length - 1],
                    noMatchDOMS[0]
                );
            }
            break;
        default:
            console.log("타입을 지정해주지 않았음");
    }
}
