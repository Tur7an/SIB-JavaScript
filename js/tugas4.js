let frm = document.getElementById('pegawai');
let jabatanPilihan = ["Manager", "Asisten", "Staff"];
let pilihJabatan = `<option value=""> Pilih Jabatan -----</option>`
for (let j in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]} </option>`;
}
frm.jabatan.innerHTML = pilihJabatan;

let frm = document.getElementById('pegawai');
let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value=""> Pilih Status -----</option>`
for (let s in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]} </option>`;
}
frm.status.innerHTML = pilihStatus;

function cekData(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gaji;

    switch(jabatan){
        case 'Manager' : gaji = 15000000; break;
        case 'Asisten' : gaji = 10000000; break;
        case 'Staff' : gaji = 5000000;break;
        default : gaji = 0;
    }
    let tjabatan = 0.15 * gaji;
    let bpjs = 0.1 * gaji;
    let tn;
    switch(status){
        case 'menikah' : tn = 0.2 * gaji; break;
        case 'belum' : tn = 0; break
    }
    let total = gaji + tjabatan + bpjs + tn; 

swal(`
Nama : ${nama}
Jabatan : ${jabatan}
Gaji : ${gaji}
Tunjagan Jabatan: ${tjabatan}
BPJS : ${bpjs}
Tunajngan Nikah : ${tn}
Total Gaji : ${total}
`);
}
