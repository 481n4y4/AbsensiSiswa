const siswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Ani", nilai: 90 },
  { nama: "Tono", nilai: 75 },
];

let output = document.getElementById("output");

const tambahSiswa = () => {
  let nama = document.getElementById("nama").value.trim();
  let nilai = document.getElementById("nilai").value.trim();

  if (nama === "" || nilai === "") {
    alert("Nama dan nilai tidak boleh kosong!");
    return;
  }

  siswa.push({
    nama: nama,
    nilai: parseInt(nilai), // ubah nilai jadi angka
  });

  // Kosongkan input setelah ditambahkan
  document.getElementById("nama").value = "";
  document.getElementById("nilai").value = "";

  // Bisa langsung tampilkan ulang daftar siswa
  tampilkanSiswa();
};

const tampilkanSiswa = () => {
  console.log("tampilkanSiswa");
  const tampilanSiswa = siswa.map((item, index) => {
    return `<div class="item-siswa">${index + 1}. ${item.nama} - Nilai: ${
      item.nilai
    }</div>`;
  });
  output.innerHTML = tampilanSiswa.join("");
};

const cariSiswa = () => {
  console.log("cariSiswa");
  const inputNama = document.getElementById("nama").value.trim();

  const mencariSiswa = siswa.find((item) => {
    return item.nama.toLowerCase() === inputNama.toLowerCase();
  });

  if (mencariSiswa) {
    output.innerHTML = `<div>${mencariSiswa.nama} - Nilai: ${mencariSiswa.nilai}</div>`;
  } else {
    output.innerHTML = `<div>Siswa tidak ditemukan.</div>`;
  }
};

const lihatEntries = () => {
  console.log("lihatEntries");

  const tampilan = [];
  for (const [index, item] of siswa.entries()) {
    tampilan.push(
      `<div>${index + 1}. ${item.nama} - Nilai: ${item.nilai}</div>`
    );
  }
  output.innerHTML = tampilan.join("");
};

const lihatKeys = () => {
  console.log("lihatKeys");
  const display = [];
  for (const index of siswa.keys()) {
    const item = siswa[index];
    display.push(
      `<div>${index + 1}. ${item.nama} - Nilai: ${item.nilai}</div>`
    );
  }
  output.innerHTML = display.join("");
};
