import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto my-auto max-w-5xl px-4 py-10">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl text-red-800 font-bold">404</h1>
                <h2 className="text-utama dark:text-sky-200 dark:textsky-200 text-3xl font-bold mt-5">Halaman Tidak ditemukan</h2>
                <p className="text-utama dark:text-sky-200 dark:textsky-200 text-xl mt-3 mb-12">Alamat yang kamu buka tidak ada atau sudah kamu pindahkan</p>
                <Link href="/" className="text-white bg-utama px-5 py-2 rounded-md">Kembali ke Beranda</Link>
            </div>
        </main>
    )
}