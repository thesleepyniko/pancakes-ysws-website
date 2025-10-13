// most of the stuff below will be fore the modal stuff
var clubModal = document.getElementById("clubmodal");
var stackModal = document.getElementById("stackmodal");
var guideModal = document.getElementById("guidemodal");
var btnArr = ["submit-1", "submit-2", "guides-1", "guides-2"]
var body = document.body;
var clubSubmission = false;

function removeModals() {
    guideModal.classList.remove('active');
    clubModal.classList.remove('active');
    stackModal.classList.remove('active');
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
    else if (btnId.startsWith("guides")) {
        let btn = document.getElementById(btnId)
        btn.addEventListener("click", function(event) {
            guideModal.classList.add("active")
            body.style.overflow = "hidden";
        })
    }
}

btnArr.forEach(addModalOnClick)
//i feel like there has to be a better way to do this...
// modalOpenBtn1.onclick = function(event) {
//     clubModal.classList.add("active");
//     body.style.overflow = "hidden";
// }

// modalOpenBtn2.onclick = function(event) {
//     clubModal.classList.add("active");
//     body.style.overflow = "hidden";
// }

// guideOpenBtn1.onclick = function(event) {
//     guideModal.classList.add("active");
//     body.style.overflow = "hidden";
// }

// guideOpenBtn2.onclick = function(event) {
//     guideModal.classList.add("active");
//     body.style.overflow = "hidden"
// }

window.onclick = function(event) {
  if ((event.target == clubModal) || (event.target == stackModal) || (event.target == guideModal)) {
    removeModals();
  }
} 

guideModal.onclick = function(event) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    else {
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

clubModal.onclick = function(event) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
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
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    else {
        const buttonId = event.target.id
        switch (buttonId) {
            case "stack-1-btn":
                if (clubSubmission) {
                    // console.log("attempting to redirect to stack 1 club")
                    window.location.href = "https://fillout.com/stack1club"; // template, no link to redirect to yet :pf:
                    removeModals();
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
                    window.location.href = "https://fillout.com/stack2club";
                    removeModals();
                }
                else {
                    // console.log("attempting to redirect to stack 2")
                    window.location.href = "https://fillout.com/stack2";
                    removeModals();
                }
                break;
            case "stack-3-btn":
                if (clubSubmission) {
                    // console.log("attempting to redirect to stack 3 club")
                    window.location.href = "https://fillout.com/stack3club";
                    removeModals();
                }
                else {
                    // console.log("attempting to redirect to stack 3")
                    window.location.href = "https://fillout.com/stack3";
                    removeModals();
                }
                break;
        }
    }
}



