 $(function () {
    var element = $(".element");
       var delement = $(".delement");
          var telement = $(".telement");
             var qelement = $(".qelement");
    $(window).scroll(function () {
      if($(window).scrollTop() > 50) {
        element.addClass("animateMe");
         delement.addClass("danimateMe");
           telement.addClass("tanimateMe");
               qelement.addClass("qanimateMe");
        
      }
      
    });
  });






var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}








	$(document).ready(function() {
  $('#inputOculto').hide();
  $('#sel1').change(function() {
    if ($('#sel').val() == 'DOAR') {
      $('#inputOculto').show();
    } else {
      $('#inputOculto').hide();
    }
  });
});



	$(function() {
  $(".btn-toggle").click(function(e) {
    e.preventDefault();
    el = $(this).data('element');
    $(el).toggle();
  });
});



   $(document).ready(function() {
	$('#inputOculto').hide();
	$('#inputOculto2').hide();
	$('#inputOculto3').hide();
	$('#inputOculto4').hide();
	$('#inputOculto5').hide();

	$('#mySelect').change(function() {
		if ($('#mySelect').val() == 'DOAR') {
			$('#inputOculto').show();
			$('#inputOculto2').hide();
			$('#inputOculto3').hide();
			$('#inputOculto4').hide();
			$('#inputOculto5').hide();
		} 
		else if ($('#mySelect').val() == 'REDUZIR') {
			$('#inputOculto2').show();
			$('#inputOculto').hide();
			$('#inputOculto3').hide();
			$('#inputOculto4').hide();
			$('#inputOculto5').hide();
		}

		else if ($('#mySelect').val() == 'TROCAR') {
			$('#inputOculto3').show();
			$('#inputOculto2').hide();
			$('#inputOculto').hide();
			$('#inputOculto4').hide();
			$('#inputOculto5').hide();
		}



		else if ($('#mySelect').val() == 'RECICLAR') {
			$('#inputOculto4').show();
			$('#inputOculto2').hide();
			$('#inputOculto').hide();
			$('#inputOculto3').hide();
			$('#inputOculto5').hide();
		}


		else if ($('#mySelect').val() == 'DESCARTAR') {
			$('#inputOculto5').show();
			$('#inputOculto2').hide();
			$('#inputOculto').hide();
			$('#inputOculto3').hide();
			$('#inputOculto4').hide();
		}



		else {
			$('#inputOculto').hide();
			$('#inputOculto2').hide();
			$('#inputOculto3').hide();
			$('#inputOculto4').hide();
			$('#inputOculto5').hide();
		}
	});
});


// ALIMENTOS
   	$(document).ready(function() {
  $('#resultado-doar-alimentos').hide();
  $('.btn-result').click(function() {
    if ($('#sel2').val() == 'ALIMENTOS') {
      $('#resultado-doar-alimentos').show();

    } else {
      $('#resultado-doar-alimentos').hide();
    }
  });
});

 
    $(document).ready(function() {
  $('#resultado-doar-roupas').hide();  
  $('.btn-result').click(function() {
    if ($('#sel2').val() == 'ROUPAS') {
      $('#resultado-doar-roupas').show();
        $('#trocar-roupas').hide();
           $('#descartar-roupas').hide();
             $('#reciclar-roupas').hide();
      
    } else {
      $('#resultado-doar-roupas').hide();
    }
  });
});



   $(document).ready(function() {
  $('#resultado-doar-calcados').hide();
  $('.btn-result').click(function() {
    if ($('#sel2').val() == 'CALÇADOS') {
      $('#resultado-doar-calcados').show();
       $('#trocar-calcados').hide();
    } else {
      $('#resultado-doar-calcados').hide();
    }
  });
});


   $(document).ready(function() {
  $('#resultado-doar-moveis').hide();
  $('.btn-result').click(function() {
    if ($('#sel2').val() == 'MÓVEIS') {
      $('#resultado-doar-moveis').show();
        $('#descartar-moveis').hide();
           $('#trocar-moveis').hide();

    } else {
      $('#resultado-doar-moveis').hide();
    }
  });
});


 $(document).ready(function() {
  $('#resultado-doar-objetos').hide();
  $('.btn-result').click(function() {
    if ($('#sel2').val() == 'OBJETOS') {
      $('#resultado-doar-objetos').show();
        $('#descartar-objetos').hide();
         $('#trocar-objetos').hide();
    } else {
      $('#resultado-doar-objetos').hide();
    }
  });
});




   $(document).ready(function() {
  $('#resultado-doar-eletros').hide();
  $('.btn-result').click(function() {
    if ($('#sel2').val() == 'ELETROS') {
      $('#resultado-doar-eletros').show();
       $('#trocar-eletros').hide();
          $('#reciclar-eletros').hide();
           $('#descartar-eletros').hide();
    } else {
      $('#resultado-doar-eletros').hide();
    }
  });
});






//TROCAR



   $(document).ready(function() {
  $('#trocar-moveis').hide();
  $('.btn-result2').click(function() {
    if ($('#sel4').val() == 'MÓVEIS') {
      $('#trocar-moveis').show();
        $('#descartar-moveis').hide();
          $('#resultado-doar-moveis').hide();
    } else {
      $('#trocar-moveis').hide();

    }
  });
});




 $(document).ready(function() {
  $('#trocar-alimentos').hide();
  $('.btn-result2').click(function() {
    if ($('#sel4').val() == 'ALIMENTOS') {
      $('#trocar-alimentos').show();
      $('#resultado-doar-alimentos').hide();
       $('#descartar-alimentos').hide();
         $('#reciclar-alimentos').hide();

      
       
    } else {
      $('#trocar-alimentos').hide();
      

    }
  });
});



  $(document).ready(function() {
  $('#trocar-roupas').hide();
  $('.btn-result2').click(function() {
    if ($('#sel4').val() == 'ROUPAS') {
      $('#trocar-roupas').show();
      $('#resultado-doar-roupas').hide();
       $('#descartar-roupas').hide();
      
       
    } else {
      $('#trocar-roupas').hide();
      

    }
  });
});



   $(document).ready(function() {
  $('#trocar-calcados').hide();
  $('.btn-result2').click(function() {
    if ($('#sel4').val() == 'CALÇADOS') {
      $('#trocar-calcados').show();
    } else {
      $('#trocar-calcados').hide();
         $('#resultado-doar-calcados').hide();
    }
  });
});



      $(document).ready(function() {
  $('#trocar-objetos').hide();
  $('.btn-result2').click(function() {
    if ($('#sel4').val() == 'OBJETOS') {
      $('#trocar-objetos').show();
        $('#descartar-objetos').hide();
           $('#resultado-doar-objetos').hide();
    } else {
      $('#trocar-objetos').hide();
    }
  });
});

 $(document).ready(function() {
  $('#trocar-eletros').hide();
  $('.btn-result2').click(function() {
    if ($('#sel4').val() == 'ELETROS') {
      $('#trocar-eletros').show();
        $('#resultado-doar-eletros').hide();
           $('#reciclar-eletros').hide();
            $('#descartar-eletros').hide();
    } else {
      $('#trocar-eletros').hide();
       
    }
  });
});







//RECICLAR



    $(document).ready(function() {
  $('#reciclar-alimentos').hide();
  $('.btn-result3').click(function() {
    if ($('#sel5').val() == 'ALIMENTOS') {
      $('#reciclar-alimentos').show();
       $('#descartar-alimentos').hide();
      $('#trocar-alimentos').hide();
      $('#resultado-doar-alimentos').hide();
      
    } else {
      $('#reciclar-alimentos').hide();
    }
  });
});





   $(document).ready(function() {
  $('#reciclar-eletros').hide();
  $('.btn-result3').click(function() {
    if ($('#sel5').val() == 'ELETROS') {
      $('#reciclar-eletros').show();
        $('#resultado-doar-eletros').hide();
         $('#trocar-eletros').hide();
          $('#descartar-eletros').hide();
    } else {
      $('#reciclar-eletros').hide();
    }
  });
});



   $(document).ready(function() {
  $('#reciclar-materiais').hide();
  $('.btn-result3').click(function() {
    if ($('#sel5').val() == 'MATERIAIS') {
      $('#reciclar-materiais').show();
        $('#descartar-materiais').hide();
    } else {
      $('#reciclar-materiais').hide();
    }
  });
});


 $(document).ready(function() {
  $('#reciclar-medicamentos').hide();
  $('.btn-result3').click(function() {
    if ($('#sel5').val() == 'MEDICAMENTOS') {
      $('#reciclar-medicamentos').show();
       
    } else {
      $('#reciclar-medicamentos').hide();
    }
  });
});


  $(document).ready(function() {
  $('#reciclar-oleo').hide();
  $('.btn-result3').click(function() {
    if ($('#sel5').val() == 'ÓLEO DE COZINHA') {
      $('#reciclar-oleo').show();
       
    } else {
      $('#reciclar-oleo').hide();
    }
  });
});







//DESCARTAR

  $(document).ready(function() {
  $('#descartar-materiais').hide();
  $('.btn-result4').click(function() {
    if ($('#sel6').val() == 'MATERIAIS') {
      $('#descartar-materiais').show();
          $('#reciclar-materiais').hide();
    } else {
      $('#descartar-materiais').hide();
    }
  });
});



   $(document).ready(function() {
  $('#descartar-eletros').hide();
  $('.btn-result4').click(function() {
    if ($('#sel6').val() == 'ELETROS') {
      $('#descartar-eletros').show();
        $('#resultado-doar-eletros').hide();
         $('#trocar-eletros').hide();
            $('#reciclar-eletros').hide();
    } else {
      $('#descartar-eletros').hide();
    }
  });
});




   $(document).ready(function() {
  $('#descartar-moveis').hide();
  $('.btn-result4').click(function() {
    if ($('#sel6').val() == 'MÓVEIS') {
      $('#descartar-moveis').show();
        $('#resultado-doar-moveis').hide();
           $('#trocar-moveis').hide();

    } else {
      $('#descartar-moveis').hide();
    }
  });
});


    $(document).ready(function() {
  $('#descartar-roupas').hide();
  $('.btn-result4').click(function() {
    if ($('#sel6').val() == 'ROUPAS') {
      $('#descartar-roupas').show();
       $('#resultado-doar-roupas').hide();
       $('#trocar-roupas').hide();
    } else {
      $('#descartar-roupas').hide();
    }
  });
});




    $(document).ready(function() {
  $('#descartar-alimentos').hide();
  $('.btn-result4').click(function() {
    if ($('#sel6').val() == 'ALIMENTOS') {
      $('#descartar-alimentos').show();
      $('#trocar-alimentos').hide();
      $('#resultado-doar-alimentos').hide();
         $('#reciclar-alimentos').hide();
    } else {
      $('#descartar-alimentos').hide();
    }
  });
});




    $(window).load(function(){
      
$(".bt-doar").on("click", function () {
    $("select.estados option").each(function (i) {
        $(this).removeAttr("selected");
        if (i == 1) this.selected = true; 
          $('#inputOculto').show(); 
             $('#inputOculto3').hide();
  $('#inputOculto5').hide();
  $('#inputOculto4').hide();// onde o "i" é o index desse select, começando em zero
    });
});

    });



    $(window).load(function(){
      
$(".bt-trocar").on("click", function () {
    $("select.estados option").each(function (i) {
        $(this).removeAttr("selected");
        if (i == 2) this.selected = true;
          $('#inputOculto3').show(); 
          $('#inputOculto').hide();
  $('#inputOculto5').hide();
  $('#inputOculto4').hide();
   // onde o "i" é o index desse select, começando em zero
    });
});

    });



        $(window).load(function(){
      
$(".bt-reciclar").on("click", function () {
    $("select.estados option").each(function (i) {
        $(this).removeAttr("selected");
        if (i == 3) this.selected = true;
          $('#inputOculto4').show();
               $('#inputOculto').hide();
  $('#inputOculto5').hide();
  $('#inputOculto3').hide();  // onde o "i" é o index desse select, começando em zero
    });
});

    });


    $(window).load(function(){
      
$(".bt-descartar").on("click", function () {
    $("select.estados option").each(function (i) {
        $(this).removeAttr("selected");
        if (i == 4) this.selected = true;
          $('#inputOculto5').show(); 
               $('#inputOculto').hide();
  $('#inputOculto4').hide();
  $('#inputOculto3').hide(); // onde o "i" é o index desse select, começando em zero
    });
});

    });





    $(window).load(function(){
      

var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

    });

