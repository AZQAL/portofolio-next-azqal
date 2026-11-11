# Struktur Database Portofolio

database disimpan di supabase, project `portofolio-azqal` (region Southeast Asia, Singapore). Alamat projects dan publishable key disimpan di `.env.local`, yang tidak ikut di-commit karena tercantum di `gitgnore` (`.env*`).

## Tabel `projects`

Daftar proyek portofolio Azqal.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `slug` | `text` | Penanda unik di alamat, misalnya `halamanprofil` (unik) |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Kalimat singkat tentang proyek |
| `kategori` | `text` | Next.js, UI/UX, atau TypeScript |
| `fitur` | `text[]` | Daftar hal yang dipelajari (array teks) |
| `gambar_url` | `text` | Alamat gambar di folder `public`, misalnya `/proyek/proyek-profil.png` |

RLS aktif. Policy `pengunjung boleh membaca proyek` : peran `anon` boleh `select` semua baris.

## Tabel `messages`

Pesan dari FormKontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS aktif tanpa Policy, sehingga pengunjung tidak bisa membaca pesan. policy `insert` dibuat di minggu 15.

## Tabel `skills`

Daftar skill yang dipelajari.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, urut nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | nama skill yang dipelajari |
| `level` | `text` | tingkatan skill yang dipelajari dari dasar hingga mahir |

RLS aktif. Policy `pengunjung boleh membaca skill` : peran `anon` boleh `select` semua baris.