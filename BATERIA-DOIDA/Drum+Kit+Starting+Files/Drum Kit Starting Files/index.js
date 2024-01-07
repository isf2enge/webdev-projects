
document.querySelectorAll(".drum").forEach(imprimi)


function imprimi(b){

    b.addEventListener('click', function (){
        var buttonn = this.innerHTML; 
        switch (buttonn){

            case ("w"):
                var audio = new Audio('audio.mp3');
                audio.play();
                anima(buttonn);
                

                break; 
            


        }
        
    })

    document.addEventListener("keydown",function(a){ /*Coloca o document pra funcionar*/ 

    
    switch (a.key){

        case ("w"):
            var audio = new Audio('audio.mp3');
            audio.play();
            anima(a.key);
            

            break; 
        


    }
        
       
    })

}
function anima(buttona){

   var x= document.querySelectorAll(".drum").forEach(imprimir);

   function imprimir(d){

    if(d.innerHTML==buttona){ /*Com o foreach, o resulta foi um botton,mas o que me esqueci foi transformar aquele object acessando o seu valor que foi com o innerHtml*/

        d.classList.toggle("irineu")
    }
   }
    
  

 
    

  

    

    
    

   
    
}




