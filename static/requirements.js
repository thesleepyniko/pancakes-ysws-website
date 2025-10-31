const body = document.body;

function removeModals() {
    clubModal.classList.remove('active');
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
}

function isButtonCheck(event) {
    return event.target.nodeName === "BUTTON"
}

addModalOnClick("submit-1")

window.onclick = function(event) {
  if ((event.target == clubModal)) {
    removeModals();
  }
} 

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