
window.addEventListener("DOMContentLoaded", () => {
    removeKoreanVideoInTitle()

    setInterval(() => {
        try {
            removeKoreanVideoInTitle()
        } catch (error) {
            console.log(error)
        }
    }, 1000);
});

window.addEventListener("scroll", (e) => {
    const scrollHeight = document.body.querySelector("ytd-app").scrollHeight
    const scrollTop = window.scrollY
    const toleranceRange = 1500
    if (scrollHeight - toleranceRange > scrollTop) {
        return 0
    }

    removeKoreanVideoInTitle()
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