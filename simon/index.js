function imprimi(a){

    var g = a;
    return g;
}
var y = [];
var u = [$("li")[0]];
u[0].classList.add("irineu")

$("li").each(function(){

    var x = $(this)

   
        
        
        
    

   
    
    

    

    x.on("click",function(){

        

        if(x.hasClass("a")){

            
            x.removeClass("irineu")
            y.push($("li")[0])
            var audio = new Audio('ta-pegando-fogo-bixo-made-with-Voicemod.mp3');
            audio.volume = 0.15;
            audio.play();
           
        }

        if(x.hasClass("b")){

            x.removeClass("irineu")
            y.push($("li")[1])
            var audio = new Audio('ZÉ DA MANGA ÁUDIO EDITADO (320 kbps) (1).mp3');
            audio.play();
        }

        if(x.hasClass("c")){
            x.removeClass("irineu")
            y.push($("li")[2])
            var audio = new Audio('irineu.mp3');
            audio.play();
        }

        if(x.hasClass("d")){
            x.removeClass("irineu")
            y.push($("li")[3])
            var audio = new Audio('ai-pai-para-hihi.mp3');
            audio.play();
        }

        console.log(y)

        
       

            

        if(JSON.stringify(u) === JSON.stringify(y)){
                    console.log(imprimi(f))
                    y=[]
                    console.log("deu certo")
                    
                    var f = Math.floor(Math.random()*4)
                    u.push($("li")[f])
                    
                    console.log(u)
                    $("li")[f].classList.add("irineu")
                    


                    
                    
            
                    
            }

        




            

        else{
              console.log(f)
              var i =0;
              while(i<y.length){

                
                if(u[i] === y[i]){

                    console.log("sinbora pagode")
                    
                }
                else{

                    y=[]
                    u = [$("li")[0]]
                    u[0].classList.add("irineu")
                    var audio = new Audio('faustao-errou.mp3');
                    audio.play();
                }
                i++;
               



              }

              
            }

       
        

        

        
    


      
      
      


        
    })
})