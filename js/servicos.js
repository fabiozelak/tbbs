const serviço = {
  nome:[
    "Microagulhamento",
    "Limpeza de Pele",
    "Alta Frequência",
    "Drenagem Detox",
  ], 
  descriscao:[
    "Revitalize sua pele com nosso tratamento de microagulhamento, estimulando a produção de colágeno e melhorando a textura e o tom.",
    "Renove sua pele com nossa limpeza de pele profunda, removendo impurezas e deixando seu rosto mais fresco e radiante.",
    "Melhore a circulação e promova a renovação celular com nosso tratamento, ideal para uma pele mais saudável e vibrante.",
    "Desintoxique seu corpo e reduza o inchaço com nossa drenagem linfática detox, promovendo bem-estar e leveza."
  ],
  imagem:[
    "https://static.wixstatic.com/media/4f65be_5c5e313ea19f4140978d1b589fc8c5e8~mv2.jpg/v1/fill/w_555,h_372,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/4f65be_5c5e313ea19f4140978d1b589fc8c5e8~mv2.jpg",
    "https://static.wixstatic.com/media/4f65be_993ddd7013dd45c5a475cedd410546b8~mv2.jpg/v1/fill/w_555,h_372,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/4f65be_993ddd7013dd45c5a475cedd410546b8~mv2.jpg",
    "https://static.wixstatic.com/media/4f65be_9e8d71a7c4ab459f9602c69f08b6f177~mv2.jpg/v1/fill/w_555,h_372,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/4f65be_9e8d71a7c4ab459f9602c69f08b6f177~mv2.jpg",
    "https://static.wixstatic.com/media/4f65be_9e8d71a7c4ab459f9602c69f08b6f177~mv2.jpg/v1/fill/w_555,h_372,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/4f65be_9e8d71a7c4ab459f9602c69f08b6f177~mv2.jpg"
  ],
  nomeModal:[
    "modalMicro",
    "modalLimpeza",
    "modalAlta",
    "modalDrenagemDetox",
  ],
  tituloModal:[
    "Micro Agulhamento",
    "Limpeza de Pele",
    "Alta frequência",
    "Drenagem Detox",
  ],
  detalhesModal:[
    ``,
    ``,
    ``,
    `A drenagem linfática detox ajuda a eliminar toxinas, reduzir o inchaço e melhorar a circulação. Ideal para quem busca uma sensação de leveza e desintoxicação corporal.`,
  ],
  beneficiosModal:[
    "",
    "",
    "",
    "Reduz inchaço e retenção de líquidos <br>Melhora a circulação sanguínea <br>Elimina toxinas do corpo <br>Sensação de bem-estar e leveza <br>Garantias ou Certificações: <br><br>Técnicas de massagem comprovadas <br>Profissionais certificados e atenciosos</p>",
  ]
  };
  
// console.log(serviço.nome.length / 3);
let texto ='';
let modais='';
texto+=` <div class="row container mx-auto"><h2 class="text-center fw-bold">Serviços</h2>`;
serviço.nome.forEach(minhafuncao);
function minhafuncao (valor1,valor2) {
  texto+=`
            <div class="col-lg-4">
                <div class="container mt-3">
                    <div class="card shadow" style="width:300px">
                        <img class="card-img-top" src="`+ serviço.imagem[valor2] +
                        `" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">`+serviço.nome[valor2]+`</h4>
                            <p class="card-text">`+serviço.descriscao[valor2]+`</p>
                            <div class="row">
                                <div class="col"><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#`+serviço.nomeModal[valor2]+`">
    Saiba Mais
  </button></div>
                                <div class="col"><a href="#" class="btn btn-dark">Agende aqui!</a></div>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
                            `;
modais += `<div class="modal fade" id="`+ serviço.nomeModal[valor2] +`">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">`+ serviço.tituloModal[valor2]+`</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <h4>Detalhes Adicionais:</h4>
        <p>
        `+serviço.detalhesModal[valor2]+`
        </p>
        <h4>Benefícios/Características Principais:</h4>
        <p class="text-justify">
        `+serviço.beneficiosModal[valor2]+`
      </div>
    </div>
  </div>
</div>`;

}
texto+= "</div>";
document.getElementById("demo").innerHTML = modais;
document.getElementById("servicos").innerHTML = texto;