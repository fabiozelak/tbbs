listaFitrada= [];
const lista = [
    {nome:"Microagulhamento Facial", hidden:"n",link:"micro",descricao:"Revitalize sua pele com nosso tratamento de microagulhamento, estimulando a produção de colágeno e melhorando a textura e o tom.",thumb:"images/microagulhamento.webp", ordem:1},
    {nome:"Limpeza de Pele", hidden:"n",link:"",descricao:"Renove sua pele com nossa limpeza de pele profunda, removendo impurezas e deixando seu rosto mais fresco e radiante.",thumb:"images/limpeza.webp", ordem:2},
    {nome:"Alta Frequência",hidden:"n",link:"",descricao:"Melhore a circulação e promova a renovação celular com nosso tratamento, ideal para uma pele mais saudável e vibrante.",thumb:"images/altafrequencia.webp", ordem:3},
    {nome:"Drenagem Detox",hidden:"n",link:"",descricao:"Desintoxique seu corpo e reduza o inchaço com nossa drenagem linfática detox, promovendo bem-estar e leveza.",thumb:"images/drenagem.jpg", ordem:4},
    {nome:"Criolipólise",hidden:"n",link:"",descricao:"Texto crio.",thumb:"images/criolipolise.jpg", ordem:5},
    {nome:"Radiofrequência",hidden:"n",link:"",descricao:"",thumb:"images/radiofrequencia.jpg", ordem:6},
    {nome:"Ultrasson",hidden:"n",link:"",descricao:"",thumb:"images/ultrassom.jpg", ordem:7},
    {nome:"Depilação a Laser",hidden:"n",link:"",descricao:"",thumb:"images/depilacao.jpg", ordem:8},
    {nome:"Peeling",hidden:"n",link:"",descricao:"",thumb:"images/peeling.jpg", ordem:9},
    {nome:"Luz intensa Pulsada",hidden:"n",link:"",descricao:"",thumb:"images/ipl.jpg", ordem:10},
    {nome:"Carboxiterapia",hidden:"n",link:"",descricao:"",thumb:"images/carboxiterapia.jpg", ordem:11}
];
    // console.log("lista:")
    //   console.log(lista);

listaFiltrada = lista.filter(item => item.hidden == "n");
listaFiltrada.sort((a, b) => a.ordem - b.ordem);
pagina = 0;
// console.log("listas Filtrada:/n");
// console.log(listaFiltrada);
// export const dados[] = listaFiltrada;