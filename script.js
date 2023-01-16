
window.addEventListener("DOMContentLoaded", () => {
    removeKoreanVideoInTitle()

    setInterval(() => {
        removeKoreanVideoInTitle()
    }, 1000);
});


function getContents() {
    let contents = document.querySelectorAll("#video-title-link")
    return contents
}

function removeKoreanVideoInTitle() {
    let contents = getContents()
    let checkKoreanReg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    contents.forEach(element => {
        let targetTitle = element.querySelector("yt-formatted-string").innerText
        let target = element.parentElement.parentElement.parentElement.parentElement.parentElement
        if (checkKoreanReg.test(targetTitle)) {
            target.remove()
        }
    });
}