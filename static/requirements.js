// most of the stuff below will be fore the modal stuff
const clubModal = document.getElementById("clubmodal");
const stackModal = document.getElementById("stackmodal");
// const guideModal = document.getElementById("guidemodal");
// const btnArr = ["submit-1"]
const body = document.body;
var clubSubmission = false;

function removeModals() {
    guideModal.classList.remove('active');
    clubModal.classList.remove('active');
    // stackModal.classList.remove('active');
    body.style.overflow = 'auto';
}

function addModalOnClick(btnId) {
    if (btnId.startsWith("submit")) {
        let btn = document.getElementById(btnId)
        btn.addEventListener("click", function(event) {
            clubModal.classList.add("active")
            body.style.overflow = "hidden";
        })
    }
    // else if (btnId.startsWith("guides")) {
    //     let btn = document.getElementById(btnId)
    //     btn.addEventListener("click", function(event) {
    //         guideModal.classList.add("active")
    //         body.style.overflow = "hidden";
    //     })
    // }
}

function isButtonCheck(event) {
    return event.target.nodeName === "BUTTON"
}

addModalOnClick("submit-1")
// btnArr.forEach(addModalOnClick)

window.onclick = function(event) {
  if ((event.target == clubModal) || (event.target == stackModal)) {
    removeModals();
  }
} 

// guideModal.onclick = function(event) {
//     if (!isButtonCheck(event)) {
//         return;
//     }
//     else {
//         const buttonId = event.target.id;
//         switch (buttonId) {
//             case "stack-1-guide-btn":
//                 window.location.href = "https://www.canva.com/design/DAG0leinU1A/xrEiGeyWpVukTDJy4m_YzQ/view?utm_content=DAG0leinU1A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfa17544148";
//                 stackModal.classList.remove('active')
//                 break;

//             case "stack-2-guide-btn":
//                 window.location.href = "https://www.canva.com/design/DAG0v0R9xvE/ZytI9E0sEn2r8kw8dveu6g/view?utm_content=DAG0v0R9xvE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7f7692e4f0";
//                 stackModal.classList.remove('active')
//                 break;
            
//             case "stack-3-guide-btn":
//                 window.location.href = "https://www.canva.com/design/DAG1GiW2Nzw/w--8q2uyVdWyOj9tOUaqqg/view?utm_content=DAG1GiW2Nzw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe3f4b99e5";
//                 stackModal.classList.remove('active')
//                 break;
//         }
//     }
// }

clubModal.onclick = function(event) {
    if (!isButtonCheck(event)) {
        return;
    }
    else {
        const buttonId = event.target.id;
        switch (buttonId) {
            case "yes-club-btn":
                clubSubmission = true;
                clubModal.classList.remove('active');
                stackModal.classList.add('active');
                break;
            
            case "no-club-btn": 
                clubSubmission = false;
                clubModal.classList.remove('active');
                stackModal.classList.add('active');
                break;
        }
    }
}

stackModal.onclick = function(event) {
    if (!isButtonCheck(event)) {
        return;
    }
    else {
        const buttonId = event.target.id
        switch (buttonId) {
            case "stack-1-btn":
                if (clubSubmission) {
                    // console.log("attempting to redirect to stack 1 club")
                    removeModals();
                    window.location.href = "https://fillout.com/stack1club"; // template, no link to redirect to yet :pf:
                }
                else {
                    // console.log("attempting to redirect to stack 1")
                    window.location.href = "https://fillout.com/stack1"; // this should redirect to something else, again no link yet :pf:
                    removeModals();
                }
                break;
            case "stack-2-btn":
                if (clubSubmission) {
                    // console.log("attempting to redirect to stack 2 club")
                    removeModals();
                    window.location.href = "https://fillout.com/stack2club";
                }
                else {
                    // console.log("attempting to redirect to stack 2")
                    removeModals();
                    window.location.href = "https://fillout.com/stack2";
                }
                break;
            case "stack-3-btn":
                if (clubSubmission) {
                    // console.log("attempting to redirect to stack 3 club")
                    removeModals();
                    window.location.href = "https://fillout.com/stack3club";
                }
                else {
                    // console.log("attempting to redirect to stack 3")
                    removeModals();
                    window.location.href = "https://fillout.com/stack3";
                }
                break;
        }
    }
}



