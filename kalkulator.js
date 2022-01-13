var spodnja_vrstica = "";
var zgornja_vrstica = "";
$(".col-3").on("click",".gumb",function(e){
    var znak = e.target.textContent;
    dodajZnak(znak);
})

$(".col-3").on("click",".equals",function(){
    izracunaj(spodnja_vrstica);
});

$(".col-3").on("click","#ocisti",function(){
    ocisti();
});

function dodajZnak(znak){
    
    if(!isNumber(znak)&&(znak!=".")){
        spodnja_vrstica= spodnja_vrstica +" "+znak+ " ";
    }else{
        spodnja_vrstica= spodnja_vrstica +znak;
    }
    $(".spodnja-vrstica").text(spodnja_vrstica);
}

function izracunaj(racun){
    $(".zgornja-vrstica").text(spodnja_vrstica+" =");
    zgornja_vrstica = spodnja_vrstica;
    spodnja_vrstica = " ";
    var racun = zgornja_vrstica;
    racun =" "+ racun + " "; 
    
    for(var i =0;i<racun.length;i++){
        if((racun[i]==" ")&&(isNumber(racun[i+1]))){
            racun = racun.replaceAt(i,"(");
        }
        if((racun[i]==" ")&&(isNumber(racun[i-1]))){
            racun = racun.replaceAt(i,")");
        }
    }
    //Spremeni racun v obliko ki jo eval() lahko prebavi
    racun = racun.replace("x","*");
    racun = racun.replace("√","Math.sqrt");
    racun = racun.replace("^","**");
    racun = racun.replace("÷","/");
    var rezultat = eval(racun);
    spodnja_vrstica = rezultat+" ";
    $(".spodnja-vrstica").text(rezultat);
}
function ocisti(){
    spodnja_vrstica = "";
    zgornja_vrstica = "";
    $(".spodnja-vrstica").text("");
    $(".zgornja-vrstica").text("");
}
function isNumber(string){
    var isNum = /^\d+$/.test(string);
    return isNum
}
function back(){
    spodnja_vrstica = spodnja_vrstica.slice(0,-1)
    $(".spodnja-vrstica").text(spodnja_vrstica);
}
//Pomožna funkcija za zamenjavo na podlagi indexa
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

$('#calculatorUploadFile').click(function() { $('#upload').trigger('click'); });
$('#upload').change(function() {
    console.log("fr");
    var fr = new FileReader();
    fr.readAsText(this.files[0]);
    
    fr.onload = function(evt) {
       var tekst = evt.target.result;
       for(var i=0;i<tekst.length;i++){
           dodajZnak(tekst[i]);
       }

        
    }
});
