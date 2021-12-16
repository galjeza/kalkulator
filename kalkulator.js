var spodnja_vrstica = "";
var zgornja_vrstica = "";
$(".col-3").on("click",".gumb",function(e){
    var znak = e.target.textContent;
    dodajZnak(znak);
})

$(".col-6").on("click",".equals",function(){
    izracunaj(spodnja_vrstica);
});

$(".col-3").on("click","#ocisti",function(){
    ocisti();
});

function dodajZnak(znak){
    if(!isNumber(znak)){
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
    var rezultat = eval(racun);
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
function randomStevilo(){
    var stevilo = Math.floor(Math.random() * 101);
    dodajZnak(stevilo);
}
//Pomožna funkcija za zamenjavo na podlagi indexa
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

 
