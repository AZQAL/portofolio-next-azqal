"use client"

import { useState } from "react";
import ProyekCard from "./ProyekCard";

const daftarKategori = ["semua", "Next.js", "UI/UX", "TypeScript", "cihuy"];
const tombolBiasa = "rounded-full border border-utama dark:bordersky-200 px-4 py-1 text-sm font-semibold text-utama dark:text-sky-200 dark:textsky-200";
const tombolAktif = "rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white"

export default function FilterProyek ({proyek}) {
    const [kategori, setKategori] = useState("semua");
    const [kata, setKata] = useState("");
    const kataKecil = kata.toLowerCase();

    
    const hasil = proyek.filter ((p) => {
        const cocokKategori = kategori === "semua" || p.kategori === kategori;
        const cocokKata = p.judul.toLowerCase().includes(kataKecil);
        return cocokKategori && cocokKata;
    })

    console.log("filterproyek digambar, kategori=", kategori)

    return (
        <div className="mt-8">
            <div className="felx flex-wrap gap-2">
                {daftarKategori.map ((k) => (
                    <button key={k} type="button" onClick={() => setKategori(k) } className={kategori === k ? tombolAktif : tombolBiasa}>{k}</button>
                ))}
            </div>
            <div className="mt-6">
                    <label htmlFor="cari" className="block font-semibold">Cari Proyek</label>
                    <input
                        type="text"
                        id="cari"
                        value={kata}
                        onChange = {(e) => setKata(e.target.value)}
                        placeholder="Contoh: Portofolio"
                        className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 md:w-80"
                    />
            </div>
            <p className="mt-4 text-gray-700 dark:textgray-300">kategori terpilih: {kategori}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
            {hasil.map((item) => (
                <ProyekCard key={item.slug} proyek={item}/>
            ))}
        </div>
        {hasil.length === 0 && (
            <p className="mt-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-6 text-center text-gray-600 dark:textgray-400">belum ada proyek yang cocok nyet.</p>
        )}
        </div>
    )
} 