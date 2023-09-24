function cond(){
    var p=document.getElementById("nn").value;
    var u=document.getElementById("mm").value;

   if(p==" "){
        if(u==" "){
            return;
        }
   }
   else if(p=="987654321"){
        if(u=="test"){
            window.open("http://bricklandbank.com/error.html", "_self"); 
        }
        else{
            window.open ("http://bricklandbank.com/invalid.html","_self");
        }
   }
   else if(p=="WaterStory002"){
        if(u=="Jkizm4321"){
            window.open("http://bricklandbank.com/12oi3jd4oc1c23eqcm23orp3m4rpco3m4oromoq3p4rmcq3p4mocrqp34morcqm.html","_self");
        }
        else{
            window.open ("http://bricklandbank.com/error.html","_self");
        }
   }
   else if(p=="RoundLovobutt"){
        if(u=="lovolato"){
            window.open("http://bricklandbank.com/Iebtnfivnwbskficfnebskck.html","_self");
        }
        else{
            window.open ("http://bricklandbank.com/error.html","_self");
        }
   }
   else{
       window.open ("http://bricklandbank.com/error.html","_self");
   }
}
