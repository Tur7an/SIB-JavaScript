function dataPerson(){
    let forms = document.getElementById('frm').nama.value;
    let nama = document.getElementById('frm').hobby.value;
    let values = document.getElementById('frm').pekerjaan.value;
    let input = 'Nama : ' +forms + '<br> Hobby :' + nama + '<br>Pekerjaan :' + values;
    let not_input = 'Maaf, Masih ada kolom yang kosong';
    let hasil = (forms && nama && values !='') ? input : not_input;

    document.getElementById('hasil').innerHTML = hasil;
}