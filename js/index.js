window.onscroll = () => {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;


    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


const navbar = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu')
navbar.addEventListener('click', () => {
    navbar.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Untuk Homepage feedback
const button = document.getElementById('button');
const nama = document.getElementById('namaAnda').value;
const email = document.getElementById('emailAnda').value;
const pesan = document.getElementById('pesanAnda').value;


button.addEventListener('click', () => {
    if (nama.value && email.value && pesan.value) {
        alert('Pesan terkirim');

        document.getElementById('namaAnda').value = '';
        document.getElementById('emailAnda').value = '';
        document.getElementById('pesanAnda').value = '';
    } else {
        alert('Tolong masukkan semua informasi: nama, email, dan pesan');

        document.getElementById('namaAnda').value = '';
        document.getElementById('emailAnda').value = '';
        document.getElementById('pesanAnda').value = '';
    }
});
// Akhir Untuk Homepage Pesan

// Hukum dan management

const hukum = document.getElementById('hukum');
hukum.addEventListener('click', () => {
    event.preventDefault();
    alert("Belum Tersedia Cooming Soonn !!!");
})


