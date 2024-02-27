function filterSelection(e) {
  let filter = document.getElementsByClassName("filter");
  if (e == "all") e = "";
  for (let i = 0; i < filter.length; i++) {
    let classes = filter[i].classList;
    if (e == "" || classes.contains(e)) {
      classes.add("show");
    } else {
      classes.remove("show");
    }
  }
}

// Add active class
let btnContainer = document.getElementById('btnContainer');
let btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener('click', function () {
       let active = document.getElementsByClassName('active');
       active[0].className = active[0].className.replace(" active", "");
       this.className += " active";
    })   
}


let activeBtn;

// есть ли класс "active"
for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains('active')) {
        activeBtn = btns[i]
    }
}

filterSelection(activeBtn.dataset.filter);