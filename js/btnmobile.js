let btnMobile = document.getElementById("btnMobile")
let menu = document.querySelector(".cabecalhomenu ul")
let conteudopricipal = document.querySelector(".conteudoprincipal")
btnMobile.addEventListener("click", function(){
    menu.classList.toggle("eventMenu")
   if (menu.classList.contains("eventMenu")){
    btnMobile.classList.toggle("removeMenu")
     conteudopricipal.classList.toggle("alteraEstilo")
   }
   else{
    btnMobile.classList.toggle("removeMenu")
     conteudopricipal.classList.toggle("alteraEstilo")
   }
   
})