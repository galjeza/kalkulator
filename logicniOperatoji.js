function dodajZnak(znak) {
    let spodnja_vrstica = znak;
    $(".spodnja-vrstica").text(spodnja_vrstica);
}

function dodajZnak1(znak) {
    let vnos = znak;
    $("#formcontrolarea1").val(vnos);
    pretvorba();
}

let iz;
let a;

function pretvorba() {
    a = $(".vnos").val();
    $('#meni option').each(function() {
        if ($(this).is(':selected')) {
            iz = $('#meni').val();
        }
    });
    console.log(iz);
    console.log(a);
    iz = parseInt(iz, 10);
    a = a.replaceAll("(", " ( ");
    a = a.replaceAll(")", " ) ");
    tabela = a.split(" ");
    a = "";
    tabela.forEach(element => {
        if (isNumber(element)) {
            switch (iz) {
                case 1:
                    element = parseInt(element, 2).toString(10);
                    break
                case 2:
                    break;
                case 3:
                    element = parseInt(element, 8).toString(10);
                    break;
                case 4:
                    element = parseInt(element, 16).toString(10);
                    break;
            }
        }
        a += element.toString();

    });
    a = zracunajVrednost(a);
    switch (iz) {
        case 1:
            a = parseInt(a, 10).toString(2);
            break;
        case 2:
            break;
        case 3:
            a = parseInt(a, 10).toString(8);
            break;
        case 4:
            a = parseInt(a, 10).toString(16).toUpperCase();
            break;
    };
    dodajZnak(a);
}

function zracunajVrednost(a) {
    racun = a;
    racun = racun.replaceAll("AND", "&");
    racun = racun.replaceAll("OR", "|");
    racun = racun.replaceAll("XOR", "^");
    racun = racun.replaceAll("NOT", "~");

    $('input[type="file"]').val('');
    return eval(racun);
}

function isNumber(string) {
    var isNum = /^[a-fA-F0-9]+$/.test(string);
    return isNum
}
$('#OpenImgUpload').click(function() { $('#imgupload').trigger('click'); });
$('#imgupload').change(function() {
    console.log("fr");
    var fr = new FileReader();
    fr.readAsText(this.files[0]);
    console.log(fr);
    fr.onload = function(evt) {
        console.log("fr");
        console.log(evt.target.result);
        dodajZnak1(evt.target.result);
    }
});