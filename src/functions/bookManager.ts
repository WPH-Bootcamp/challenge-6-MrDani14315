// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { Book } from '../types';
import { books } from '../data/books';

// Menambahkan buku baru ke dalam array
export function addBook(book: Book): void {
  books.push(book);
  console.log(
    `Buku "${book.title}" karya ${book.author} berhasil ditambahkan.`
  );
}

// Menampilkan semua buku yang tersimpan
export function listBooks(): void {
  if (books.length === 0) {
    console.log('Belum ada buku yang tersimpan.');
    return;
  }

  console.log('=== Daftar Buku ===');
  books.forEach((book, index) => {
    console.log(
      `${index + 1}. "${book.title}" - ${book.author} (${book.publicationYear})`
    );
  });
  console.log(`Total: ${books.length} buku`);
}

// Mencari buku berdasarkan judul (opsional)
// Jika title tidak diberikan, tampilkan semua buku
export function searchBook(title?: string): void {
  if (!title) {
    listBooks();
    return;
  }

  const keyword = title.toLowerCase();
  const results = books.filter((book) =>
    book.title.toLowerCase().includes(keyword)
  );

  if (results.length === 0) {
    console.log(`Tidak ditemukan buku dengan judul mengandung "${title}".`);
    return;
  }

  console.log(`=== Hasil Pencarian: "${title}" ===`);
  results.forEach((book, index) => {
    console.log(
      `${index + 1}. "${book.title}" - ${book.author} (${book.publicationYear})`
    );
  });
  console.log(`Ditemukan: ${results.length} buku`);
}
