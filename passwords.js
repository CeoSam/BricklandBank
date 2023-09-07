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
            window.open("https://ceosam.github.io/BricklandBank/error.html", "_self");
        }
        else{
            window.open ("file://C:/Users/kicmo/BricklandBankApp/invalid.html","_self");
        }
   }
   else if(p=="WaterStory002"){
        if(u=="Jkizm4321"){
            window.open("file://C:/Users/kicmo/BricklandBankApp/JordyAccount.html","_self");
        }
        else{
            window.open ("file://C:/Users/kicmo/BricklandBankApp/invalid.html","_self");
        }
   }
   else{
       window.open ("file://C:/Users/kicmo/BricklandBankApp/invalid.html","_self");
   }
}
