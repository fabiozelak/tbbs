constroiServicos = "";
for(i=0;i<listaFiltrada.length;i++){
    constroiServicos += `<div class="col-lg-4">
                <div class="container mt-3">
                    <div class="card" style="width:300px">
                        <img class="card-img-top" src="`+listaFiltrada[i].thumb+`" alt="Card image"
                            style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">`+listaFiltrada[i].nome+`</h4>
                            <div class="divisor2"></div>
                            <p class="card-text">`+listaFiltrada[i].descricao+`</p>
                            <div class="row">
                                <button type="button" class="btn btn-success mt-auto" data-bs-toggle="modal"
                                    data-bs-target="#modalMicro">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>`
}
console.log(constroiServicos);
conteudo = document.getElementsByTagName("conteudo");
conteudo[0].innerHTML = `
         <section id="destaque" class="container-fluid">
             <h4>Bem vinda a Taciany Barth Beauty & Skin</h4>
<h1>Cuide-se, mime-se</h1>
<a href="https://wa.me/5541996186186?text=Olá,%20gostaria%20de%20marcar%20uma%20avaliação."
    class="btn btn-secondary mt-2">Agende uma avaliação.</a>
         </section>
         <section id="quemSomos" class="row container-fluid mx-auto py-5">
             <div class="col-lg-6 p-5">
            <h3 class="fw-bold">QUEM SOMOS</h3>
            <h4 class="" style="text-align:justify; font-size:17px;">Bem-Vinda à Taciany Barth Beauty &amp; Skin – Seu
                Refúgio de Bem-Estar Feminino</h4>
        </div>
        <div class="col-lg-6 p-5">
            <p class="" style="text-align:justify; font-size:17px;">Na Taciany Barth Beauty &amp; Skin, mergulhe em uma
                experiência única dedicada à beleza, saúde e bem-estar da mulher. Acreditamos que a verdadeira beleza
                reside na harmonia entre o corpo, mente e alma, e é isso que me motiva a oferecer tratamentos
                personalizados para realçar a sua beleza natural e promover o seu equilíbrio interior.</p>
        </div>
         </section>
         <div class="container-fluid divisor">
         </div>
         <section id="servicos" class="container-fluid">
           <div class="row container mx-auto">
            <h2 class="text-center fw-bold">SERVIÇOS</h2>
            `+constroiServicos+`
        </div>
         </section>
         <section id="depoimentos">
             <div class=" container-fluid divisor"></div>
        <h2 class="text-center fw-bold">DEPOIMENTOS</h2>
        <div id="carouselExampleDark" class="carousel carousel-dark slide mx-auto" style="width: 400px">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active text-center" data-bs-interval="10000">
                <div class="card mx-auto py-4 bg-light" style="width: 400px">
                  <img
                    class="card-img-top rounded-circle mx-auto"
                    style="width: 150px"
                    src="https://www.w3schools.com/bootstrap5/img_avatar1.png"
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">John Doe 1</h4>
                    <p class="card-text text-warning">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i
                      ><i class="bi bi-star"></i>
                    </p>
                  </div>
                  <div>
                    <p class="text-center px-5">
                      Estou muito satisfeio pelo ótimo atendimento e resultados
                      maravilhosos!<br />
                      Super recomento!
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item text-center" data-bs-interval="2000">
              <div class="card mx-auto py-4 bg-light" style="width: 400px">
              <img
                class="card-img-top rounded-circle mx-auto"
                style="width: 150px"
                src="https://www.w3schools.com/bootstrap5/img_avatar1.png"
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe 2</h4>
                <p class="card-text text-warning">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star"></i>
                </p>
              </div>
              <div>
                <p class="text-center px-5">
                  Estou muito satisfeio pelo ótimo atendimento e resultados
                  maravilhosos!<br />
                  Super recomento!
                </p>
              </div>
            </div>
              </div>
              <div class="carousel-item text-center">
              <div class="card mx-auto py-4 bg-light" style="width: 400px">
              <img
                class="card-img-top rounded-circle mx-auto"
                style="width: 150px"
                src="https://www.w3schools.com/bootstrap5/img_avatar1.png"
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe 3</h4>
                <p class="card-text text-warning">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star"></i>
                </p>
              </div>
              <div>
                <p class="text-center px-5">
                  Estou muito satisfeio pelo ótimo atendimento e resultados
                  maravilhosos!<br />
                  Super recomento!
                </p>
              </div>
            </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
         </section>
`;
// conteudo[0].innerHTML = destaque;