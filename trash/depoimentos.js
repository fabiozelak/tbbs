document.getElementById("depoimentos").innerHTML = `
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
`;