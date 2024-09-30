// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humberger-menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar buat ngilangin nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form melakukan submit secara default

    // Ambil nilai dari input
    var nama = document.getElementById("nama").value;

    // Format pesan yang ingin dikirim ke WhatsApp
    var pesan =
      "Halo, saya " + nama + " ingin berkonsultasi mengenai rental baju adat.";

    // Nomor WhatsApp tujuan (misal, +62 812 3456 7890 diubah jadi 6281234567890)
    var nomorTujuan = "6285250809518";

    // Buat URL WhatsApp API
    var url =
      "https://wa.me/" + nomorTujuan + "?text=" + encodeURIComponent(pesan);

    // Arahkan pengguna ke WhatsApp Web dengan URL yang sudah dibentuk
    window.open(url, "_blank");
  });
