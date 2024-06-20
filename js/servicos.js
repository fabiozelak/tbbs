const serviço = {
  nome:[
    "Microagulhamento Facial",
    "Limpeza de Pele",
    "Alta Frequência",
    "Drenagem Detox",
    "Criolipólise",
    "Radiofrequência",
    "Ultrasson",
    "Depilação a Laser",
    "Peeling",
    "Luz intensa Pulsada",
    "Carboxiterapia"
  ], 
  descriscao:[
    "Revitalize sua pele com nosso tratamento de microagulhamento, estimulando a produção de colágeno e melhorando a textura e o tom.",
    "Renove sua pele com nossa limpeza de pele profunda, removendo impurezas e deixando seu rosto mais fresco e radiante.",
    "Melhore a circulação e promova a renovação celular com nosso tratamento, ideal para uma pele mais saudável e vibrante.",
    "Desintoxique seu corpo e reduza o inchaço com nossa drenagem linfática detox, promovendo bem-estar e leveza.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  imagem:[
    "images/microagulhamento.webp",
    "images/limpeza.webp",
    "images/altafrequencia.webp",
    "images/drenagem.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  nomeModal:[
    "modalMicro",
    "modalLimpeza",
    "modalAlta",
    "modalDrenagemDetox",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
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
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  beneficiosModal:[
    `<li>Estimula a produção de colágeno</li><li>Reduz cicatrizes e linhas finas</li><li>Melhora a textura e o tom da pele</li><li>Procedimento rápido e minimamente invasivo</li><li>Tempo de recuperação mínimo</li>`,
    `<li>Remove cravos e impurezas</li><li>Melhora a hidratação e a textura da pele</li><li>Previne o aparecimento de acne</li><li>Sensação de frescor e limpeza imediata</li>`,
    `<li>Melhora a circulação sanguínea</li><li>Reduz acne e inflamações</li><li>Estimula a produção de colágeno</li><li>Acelera a cicatrização da pele</li>`,
    "<li>Reduz inchaço e retenção de líquidos </li><li>Melhora a circulação sanguínea </li><li>Elimina toxinas do corpo </li><li>Sensação de bem-estar e leveza </li>Garantias ou Certificações: <br><li>Técnicas de massagem comprovadas </li><li>Profissionais certificados e atenciosos</li>",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
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
                                <button type="button" class="btn btn-success mb-1" data-bs-toggle="modal" data-bs-target="#`+serviço.nomeModal[valor2]+`">
    Saiba Mais
  </button></div><div class="row">
                                <a href="https://wa.me/5541996186186?text=*Ol%C3%A1,%20pode%20me%20ajudar?%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.:*%20Laser%20Levieen%20-%20Obtenha%20o%20Efeito%20BB%20Glow%20https://www.alluremedicinaestetica.com.br/laser-levieen-obtenha-o-efeito-bb-glow-10-anos-menos-com-lasers-importados" class="btn btn-outline-success ">Acomprar pelo WhatsApp <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg></a>
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