const portaCard = document.getElementsByClassName("menuCard_01")

function adicionarCards(idCard, tituloCard, img, ){

    portaCard.innerHTML+="<div id="+idCard+"><div class='card "+tituloCard+"'>"+img+"</div>"
}

adicionarCards("card01","produto","img" )