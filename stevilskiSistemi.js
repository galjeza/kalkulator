function dodajZnak(znak) {
    let spodnja_vrstica = znak;
    $(".spodnja-vrstica").text(spodnja_vrstica);
}

function dodajZnak1(znak) {
    let vnos = znak;
    $("#formcontrolarea1").val(vnos);
    pretvori();
}

let iz;
let v;
let a;

function pretvori() {
    a = $("#formcontrolarea1").val();
    $('#mySelectBox1 option').each(function() {
        if ($(this).is(':selected')) {
            iz = $('#mySelectBox1').val();
        }
    });
    $('#mySelectBox2 option').each(function() {
        if ($(this).is(':selected')) {
            v = $('#mySelectBox2').val();
        }
    });
    iz = parseInt(iz, 10);
    v = parseInt(v, 10);
    switch (iz) {
        case 1:
            switch (v) {
                case 1:
                    break;
                case 2:
                    a = parseInt(a, 2).toString(10);
                    break;
                case 3:
                    a = parseInt(a, 2).toString(8);
                    break;
                case 4:
                    a = parseInt(a, 2).toString(16).toUpperCase();
                    break;
            };
            dodajZnak(a);
            break;

        case 2:
            switch (v) {
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
            break;
        case 3:
            switch (v) {
                case 1:
                    a = parseInt(a, 8).toString(2);
                    break;
                case 2:
                    a = parseInt(a, 8).toString(10);
                    break;
                case 3:
                    break;
                case 4:
                    a = parseInt(a, 8).toString(16).toUpperCase();
                    break;
            };
            dodajZnak(a);
            break;
        case 4:
            switch (v) {
                case 1:
                    a = parseInt(a, 16).toString(2);
                    break;
                case 2:
                    a = parseInt(a, 16).toString(10);
                    break;
                case 3:
                    a = parseInt(a, 16).toString(8);
                    break;
                case 4:
                    a = a.toUpperCase();
                    break;
            };
            dodajZnak(a);
            break;

    }
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