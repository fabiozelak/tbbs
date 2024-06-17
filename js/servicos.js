const serviço = {
  nome:[
    "Microagulhamento Facial",
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
    "images/microagulhamento.webp",
    "images/limpeza.webp",
    "images/altafrequencia.webp",
    "images/drenagem.jpg"
  ],
  nomeModal:[
    "modalMicro",
    "modalLimpeza",
    "modalAlta",
    "modalDrenagemDetox",
  ],
  // tituloModal:[
  //   "Microagulhamento Facial",
  //   "Limpeza de Pele",
  //   "Alta frequência",
  //   "Drenagem Detox",
  // ],
  detalhesModal:[
    `Nosso serviço de microagulhamento utiliza agulhas finas para criar microperfurações na pele, promovendo a regeneração celular. Ideal para tratar cicatrizes de acne, linhas finas e poros dilatados. Recomendamos um mínimo de 3 sessões para resultados ótimos.`,
    `Nosso tratamento de limpeza de pele inclui esfoliação, extração de cravos e aplicação de máscaras hidratantes e calmantes. Ideal para todos os tipos de pele, especialmente para quem busca uma pele mais limpa e saudável.`,
    `O tratamento de alta frequência utiliza correntes elétricas suaves para aumentar a circulação sanguínea, eliminar bactérias e estimular a produção de colágeno. Excelente para combater acne, manchas e sinais de envelhecimento.`,
    `A drenagem linfática detox ajuda a eliminar toxinas, reduzir o inchaço e melhorar a circulação. Ideal para quem busca uma sensação de leveza e desintoxicação corporal.`,
  ],
  beneficiosModal:[
    `<li>Estimula a produção de colágeno</li><li>Reduz cicatrizes e linhas finas</li><li>Melhora a textura e o tom da pele</li><li>Procedimento rápido e minimamente invasivo</li><li>Tempo de recuperação mínimo</li>`,
    `<li>Remove cravos e impurezas</li><li>Melhora a hidratação e a textura da pele</li><li>Previne o aparecimento de acne</li><li>Sensação de frescor e limpeza imediata</li>`,
    `<li>Melhora a circulação sanguínea</li><li>Reduz acne e inflamações</li><li>Estimula a produção de colágeno</li><li>Acelera a cicatrização da pele</li>`,
    "<li>Reduz inchaço e retenção de líquidos </li><li>Melhora a circulação sanguínea </li><li>Elimina toxinas do corpo </li><li>Sensação de bem-estar e leveza </li>Garantias ou Certificações: <br><li>Técnicas de massagem comprovadas </li><li>Profissionais certificados e atenciosos</li>",
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
        <h4 class="modal-title">`+ serviço.nome[valor2]+`</h4>
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