
function imprimi(b){

    b.addEventListener("click", faz)

    function faz(){

       var x = this.innerHTML;
       if(x=="A"){
        var audio = new Audio('audio.mp3');
        audio.play();
        agente()
        function agente (){
            document.querySelectorAll("p").forEach(imprimi2)
            function imprimi2(as){
                if(as.innerHTML==x){

                    as.classList.toggle("irineu")
                }

            }

        }
        
       }

    }
       
        
   
}
document.querySelectorAll("p").forEach(imprimi)

