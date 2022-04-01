const handleForm = (that) => {
  if (!Number(that.value)) {
    alert("age is not a valid input");
  }

  window.statusbar = "dzad";
};


const valider = ()=>{
    const name = document.getElementById("name");
    const lsname = document.getElementById("lsname");
    const textarea= document.getElementById("textarea")
    window.statusbar = textarea.value;
    const confirmer = confirm(`${name.value} ${lsname.value }`);


}