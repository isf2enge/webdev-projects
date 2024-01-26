document.querySelectorAll("li").forEach(imprimi)
function imprimi(b){
    b.addEventListener("click",function(){

        var x = this.innerHTML
        switch(x){

            case "p":
                alert("Clicou no P")
                break;
            
        }
    })
}

document.addEventListener("keypress",function(dcr){
    
        if(dcr.key==="p"){

            alert("entrou")

            imprima(dcr.key)
        }
})

function imprima(a){

    document.querySelectorAll("li").forEach(ida)
    function ida(h){

        if(h.innerHTML === a){

            h.classList.toggle("irineuu")
        }
    }
}