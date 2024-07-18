const header = document.getElementsByTagName("header");
console.log(header);
header[0].innerHTML =


`

<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-brand" href="#">
        <img src="images/logo-removebg-preview.png" alt="TAciany Barth Beauty & Skin" width="120"
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
            <li class="nav-item">
                <a class="nav-link" href="#servicos">SERVIÇOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#procedimentos">PROCEDIMENTOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contato">CONTATO</a>
            </li>
        </ul>
    </div>
</div>
</nav>
`;