var datos1=null;
var datos2=null;
var pos=0;

$('#mainNav').affix({
  offset: {
    top: 100
  }
});





$(document).ready(function(){
	$.getJSON( "https://rawgit.com/JorGS93/NoticiasWeb/master/js/news.json", function( jsonObject ) {
     datos1=jsonObject;



	});

    $.getJSON( "https://rawgit.com/JorGS93/NoticiasWeb/master/js/news2.json", function( jsonObject ) {
     datos2=jsonObject;


    });


    $(window).scroll(function(){  
 if($(window).scrollTop()+$(window).height()>$(document).height()-1){ 

     pos++; 

       if(pos==1){   
        crearNoticia(datos1);    
        $('#cargarNoticias').show(500);
        $('#boton').fadeOut();      


    }  if(pos==2){
        crearNoticia(datos2);
        $('#cargarNoticias').show(500);
    }
        

     } 
 });



$('#boton2').hide();
$('#boton').click(function(event) {
    crearNoticia(datos1);  
$('#cargarNoticias').show(500);
$('#boton').hide();
$('#boton2').show();
});

$('#boton2').click(function(event) { 
    crearNoticia(datos2);  
$('#cargarnoticias').show(500);
$('#boton2').hide();
});

});





function crearNoticia(json) {

      var mas=document.getElementById("cargarNoticias");


    $.each(json, function (i, news) {


        var div = document.createElement("div");
        div.className = "container noticias";
        mas.appendChild(div);

        var col1 = document.createElement("div");
        col1.className = "col-md-9 noticiax";
        mas.appendChild(col1);
        div.appendChild(col1);

        var tumb = document.createElement("div");
        tumb.className = "thumbnail imgtxt";
        col1.appendChild(tumb);

        //pintar titulo
        var titulo = document.createElement("h3");
        titulo.className = "titulo";
        titulo.textContent = json[i].titulo;
        tumb.appendChild(titulo);

        //poner foto
        var img = document.createElement("img");
        img.className = "img-responsive fotos";
        img.src = json[i].img;
        img.alt = "Imagen cargada";
        tumb.appendChild(img);

        //poner descripcion
        var titdiv = document.createElement("p");
        titdiv.className = "descripcion";
        titdiv.textContent = json[i].descripcion;
        tumb.appendChild(titdiv);

        var fecha = document.createElement("p");
        fecha.className = "fecha";
        fecha.textContent = json[i].fecha;
        tumb.appendChild(fecha);

            
    
   

    })};


