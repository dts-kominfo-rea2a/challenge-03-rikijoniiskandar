// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (params) => {
  let barangYangdibeli = []
  for (let data = 0; data < params.length; data++) {
      barangYangdibeli.push('- ' + params[data].nama + ' x ' + params[data].kuantitas)
    }
    return barangYangdibeli
  }

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal

const totalBelanjaan = (params) => {
  let totalHarga = 0
  for (let data = 0; data < params.length; data++) {
      totalHarga += params[data].harga * params[data].kuantitas
    }

  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
