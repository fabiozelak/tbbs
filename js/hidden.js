listaFitrada= [];
const lista = [
    {nome:"Microagulhamento Facial",    facial:"y", hidden:"y",link:"micro",descricao:"Revitalize sua pele com nosso tratamento de microagulhamento, estimulando a produção de colágeno e melhorando a textura e o tom.",thumb:"images/microagulhamento.webp", ordem:1},
    {nome:"Limpeza de Pele",            facial:"y", hidden:"n",link:"limpeza",descricao:"Renove sua pele com nossa limpeza de pele profunda, removendo impurezas e deixando seu rosto mais fresco e radiante.",thumb:"images/limpeza.webp", ordem:2},
    {nome:"Alta Frequência",            facial:"y",hidden:"y",link:"alta_frequencia",descricao:"Melhore a circulação e promova a renovação celular com nosso tratamento, ideal para uma pele mais saudável e vibrante.",thumb:"images/altafrequencia.webp", ordem:3},
    {nome:"Drenagem Detox",             facial:"n",hidden:"y",link:"drenagem_detox",descricao:"Desintoxique seu corpo e reduza o inchaço com nossa drenagem linfática detox, promovendo bem-estar e leveza.",thumb:"images/drenagem.jpg", ordem:4},
    {nome:"Criolipólise",               facial:"n",hidden:"y",link:"criolipolise",descricao:"Texto crio.",thumb:"images/criolipolise.jpg", ordem:5},
    {nome:"Radiofrequência",            facial:"n",hidden:"y",link:"radiofrenquencia",descricao:"",thumb:"images/radiofrequencia.jpg", ordem:6},
    {nome:"Ultrasson",                  facial:"n",hidden:"y",link:"ultrasson",descricao:"",thumb:"images/ultrassom.jpg", ordem:7},
    {nome:"Depilação a Laser",          facial:"n",hidden:"y",link:"depilacao_laser",descricao:"",thumb:"images/depilacao.jpg", ordem:8},
    {nome:"Peeling",                    facial:"n",hidden:"y",link:"peeling",descricao:"",thumb:"images/peeling.jpg", ordem:9},
    {nome:"Luz intensa Pulsada",        facial:"n",hidden:"y",link:"lip",descricao:"",thumb:"images/ipl.jpg", ordem:10},
    {nome:"Carboxiterapia",             facial:"n",hidden:"y",link:"carboxiterapia",descricao:"",thumb:"images/carboxiterapia.jpg", ordem:11}
];
// FACILA----> "Y" para "SIM" E "N" para "NÃO" E "D" para "OS DOIS"

listaFiltrada = lista.filter(item => item.hidden == "n");
listaFiltrada.sort((a, b) => a.ordem - b.ordem);
pagina = 0;