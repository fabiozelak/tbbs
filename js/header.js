// import { dados } from './hidden';
// import {dados} from './hidden'
// console.log(listaFiltrada);
menu_corporal = "";
menu_facial = "";
for(i=0;i<listaFiltrada.length;i++){
    // console.log(listaFiltrada[i].nome);
    if(listaFiltrada[i].facial == "y"){
    menu_facial +=`<li><a class="dropdown-item" onClick="location.href='pages/`+listaFiltrada[i].link+`.html';">`+listaFiltrada[i].nome+`</a></li>`
    }else if(listaFiltrada[i].facial == "n"){
        menu_corporal +=`<li><a class="dropdown-item" onClick="location.href='pages/`+listaFiltrada[i].link+`.html';">`+listaFiltrada[i].nome+`</a></li>`
    }else{
        menu_facial +=`<li><a class="dropdown-item" onClick="location.href='pages/`+listaFiltrada[i].link+`.html';">`+listaFiltrada[i].nome+`</a></li>`
        menu_corporal +=`<li><a class="dropdown-item" onClick="location.href='pages/`+listaFiltrada[i].link+`.html';">`+listaFiltrada[i].nome+`</a></li>`
    }
    
  };


const header = document.getElementsByTagName("header");
header[0].innerHTML =


`

<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-brand" href="#">
        <img src="images/logo-removebg-preview.png" alt="Taciany Barth Beauty & Skin" width="120"
            class="my-0 py-0">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
        aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-grow-0 " id="menu">
        <ul class=" navbar-nav me-auto mb-2 mb-lg-0 flex-shrink-1">
            <li class="nav-item">
                <a class="nav-link" href="#home">INÍCIO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#quemSomos">QUEM SOMOS</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#servicos">SERVIÇOS</a>
            </li> -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">ESTÉTICA FACIAL</a>
                          <a><ul class="dropdown-menu" aria-labelledby="navbarDropdown" role="button">`+ menu_facial + `</a>
          </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">ESTÉTICA CORPORAL</a>
                          <a><ul class="dropdown-menu" aria-labelledby="navbarDropdown" role="button">`+ menu_corporal + `</a>
          </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contato">CONTATO</a>
            </li>
        </ul>
    </div>
</div>
</nav>
`;