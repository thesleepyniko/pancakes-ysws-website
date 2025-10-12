var clubModal = document.getElementById("clubmodal");
var stackModal = document.getElementById("stackmodal");
var modalOpenBtn = document.getElementById("submit");
var clubSubmission = false

modalOpenBtn.onclick = function(event) {
    clubModal.classList.add("active");
}

window.onclick = function(event) {
  if ((event.target == clubModal) || (event.target == stackModal)) {
    clubModal.classList.remove('active');
    stackModal.classList.remove('active');
  }
} 

clubModal.onclick = function(event) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return
    }
    else {
        const buttonId = event.target.id;
        switch (event.target.id) {
            case "yes-club-btn" : {
                clubSubmission = true;
                clubModal.classList.remove('active');
                stackModal.classList.add('active');
            };
            case "no-club-btn" : {
                clubSubmission = false;
                clubModal.classList.remove('active');
                stackModal.classList.add('active')
            }
        }
    }
}



