// most of the stuff below will be fore the modal stuff
// const clubModal = document.getElementById("clubmodal");
// const stackModal = document.getElementById("stackmodal");
const guideModal = document.getElementById("guidemodal");
const btnArr = ["guides-1", "guides-2"]
const body = document.body;

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    
  });
} 

function addModalOnClick(btnId) {
    let btn = document.getElementById(btnId)
    btn.addEventListener("click", function(event) {
        guideModal.classList.add("active")
        body.style.overflow = "hidden";
    })
}

function isButtonCheck(event) {
    return event.target.nodeName === "BUTTON"
}

btnArr.forEach(addModalOnClick)

window.onclick = function(event) {
  if (event.target == guideModal) {
    guideModal.classList.remove('active');
    body.style.overflow = 'auto';
  }
} 

guideModal.onclick = function(event) {
    if (event.target.nodeName === "BUTTON") {
        const buttonId = event.target.id;
        switch (buttonId) {
            case "stack-1-guide-btn":
                window.location.href = "https://www.canva.com/design/DAG0leinU1A/xrEiGeyWpVukTDJy4m_YzQ/view?utm_content=DAG0leinU1A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfa17544148";
                stackModal.classList.remove('active')
                break;

            case "stack-2-guide-btn":
                window.location.href = "https://www.canva.com/design/DAG0v0R9xvE/ZytI9E0sEn2r8kw8dveu6g/view?utm_content=DAG0v0R9xvE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7f7692e4f0";
                stackModal.classList.remove('active')
                break;
            
            case "stack-3-guide-btn":
                window.location.href = "https://www.canva.com/design/DAG1GiW2Nzw/w--8q2uyVdWyOj9tOUaqqg/view?utm_content=DAG1GiW2Nzw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe3f4b99e5";
                stackModal.classList.remove('active')
                break;
        }
    }
}