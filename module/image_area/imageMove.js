// 이동 이벤트
const imageFileAreaDOM = document.querySelector(".image-file-area");

export function imageMove(event) {
    event.preventDefault();

    // DOM
    const draggingDOM = document.querySelector(".image-file-container.dragging");
    if (draggingDOM == null) return; // 처음 파일을 드래그해서 올릴 때는 대비한 예외처리

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
