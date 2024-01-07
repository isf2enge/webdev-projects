document.querySelectorAll("h1").forEach(impri)

function impri(a){

    a.addEventListener("click",imprim)
    
    function imprim(){
        var b = this.innerHTML;
        switch(b){

            case "ssss":
                alert("bostaaaa")
                break;
            case "sss":
                alert("kdkdkdkdkd")
                break;

           default:
                alert("chipacpi")

        }

    }
}