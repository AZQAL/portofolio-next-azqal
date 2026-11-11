"use client"

import { useState } from "react";
import ProyekCard from "./ProyekCard";
import { Button } from "./ui/button";

const daftarKategori = ["semua", "Next.js", "UI/UX", "TypeScript", "cihuy"];


export default function FilterProyek ({proyek}) {
    const [kategori, setKategori] = useState("semua");
    const [kata, setKata] = useState("");
    const kataKecil = kata.toLowerCase();

    
    const hasil = proyek.filter ((p) => {
        const cocokKategori = kategori === "semua" || p.kategori === kategori;
        const cocokJudul = p.judul.toLowerCase().includes(kataKecil);
        const cocokDeskripsi = p.deskripsi.toLowerCase().includes(kataKecil);
        const cocokKata = cocokJudul || cocokDeskripsi;
        return cocokKategori && cocokKata;
    })

    console.log("filterproyek digambar, kategori=", kategori)

    return (
        <div className="mt-8">
            <div className="felx flex-wrap gap-2">
                {daftarKategori.map ((k) => (
                    <Button key={k} type="button" variant={kategori === k ? "default" : "outline"} onClick={() => setKategori(k) }>{k}</Button>
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
                        className="mt-1 w-full rounded-lg border border-input dark:border-gray-600 bg-card p-2 md:w-80"
                    />
                    {kata !== "" && (
                        <Button
                            variant="link"
                            onClick={() => setKata("")}
                            className="mt-2 text-sm font-semibold text-aksen hover:underline"
                        >Hapus Pencarian</Button>
                    )};
                    <p className="mt-4 text-sm text-muted-foreground dark:text-gray-400">menampilkan {hasil.length} dari {proyek.length}</p>
            </div>
            <p className="mt-4 text-muted-foreground dark:textgray-300">kategori terpilih: {kategori}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
            {hasil.map((item) => (
                <ProyekCard key={item.slug} proyek={item}/>
            ))}
        </div>
        {hasil.length === 0 && (
            <p className="mt-6 rounded-xl border border-dashed border-input dark:border-gray-600 p-6 text-center text-muted-foreground dark:textgray-400">belum ada proyek yang cocok nyet.</p>
        )}
        </div>
    )
} 