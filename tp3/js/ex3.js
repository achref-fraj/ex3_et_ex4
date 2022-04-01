const body = document.querySelector("body");
const txt = document.querySelector("#txt");
console.log(txt)
const changeColor = (that) => {
  body.style.backgroundColor = that.value;
};

const select = document.querySelector("select");

select.onchange = () => {
  txt.style.color = select.value;
  txt.innerText = "Vous avez choisi une couleur du texte.";
};

select.onmouseover = () => {
  txt.innerText = "Vous êtes en train de choisir la couleur du texte.";
};



