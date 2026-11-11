"use client";

import { useState } from "react";

const classInput = "mt-1 w-full rounded-lg border border-input dark:border-gray-600 bg-card p-2"
const classError = "mt-1 text-sm text-aksen dark:textred-300"

export default function FormKontak () {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});
    const [nomer, setNomer] = useState("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [berhasil, setBerhasil] = useState(false);

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};
        setBerhasil(false);

        if (nama.trim () === "") {
            errorBaru.nama = "Nama wajib di isi"
        }
        if (!email.includes("@")) {
            errorBaru.email = "email harus memuat tanda @, contoh: exampel@gmail.com";
        }
        if (nomer.length < 10) {
            errorBaru.nomer = "nomer minimal 10"
        }
        if (keperluan.trim () === "") {
            errorBaru.keperluan = "keperluan wajib di pilih"
        }
        if (pesan.trim().length < 10) {
            errorBaru.pesan = "pesan wajib di isi dan minimal 10"
        }
        setError(errorBaru);
        setBerhasil(Object.keys(errorBaru).length === 0);
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-4">
            <div>
                <label htmlFor="nama" className="block font-semibold">Nama Lengkap</label>
                <input
                 type="text" 
                 id="nama"
                 name="nama"
                 value={nama}
                 onChange={(e) => setNama (e.target.value)}
                 placeholder="contoh: Azqal Andhika"
                 className={classInput}
                />
                {error.nama && <p className={classError}>{error.nama}</p>}
            </div>
            <div>
                <label htmlFor="Email" className="block font-semibold">Email</label>
                <input
                 type="text" 
                 id="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail (e.target.value)}
                 placeholder="contoh: example@gmail.com"
                 className={classInput}
                />
                {error.email && <p className={classError}>{error.email}</p>}
            </div>
            <div>
                <label htmlFor="No" className="block font-semibold">No. HP</label>
                <input
                 type="text" 
                 id="No"
                 name="No"
                 value={nomer}
                 onChange={(e) => setNomer (e.target.value)}
                 placeholder="contoh: 08123456789"
                 className={classInput}
                />
                {error.nomer && <p className={classError}>{error.nomer}</p>}
            </div>
            <div>
                <label htmlFor="keperluan" className="block font-semibold">Keperluan</label>
                <select
                    id="keperluan"
                    name="keperluan"
                    value={keperluan}
                    onChange={(e) => setKeperluan (e.target.value)}
                    className={classInput}
                >
                    <option value="keperluan">--Pilih Keperluan--</option>
                    <option value="Kerja sama">Kerja Sama</option>
                    <option value="pertanyaan">Pertanyaan</option>
                    <option value="lainnya">Lainnya</option>
                </select>
                {error.keperluan && <p className={classError}>{error.keperluan}</p>}
            </div>
            <div>
                <label htmlFor="pesan" className="block font-semibold">Pesan</label>
                <textarea
                 id="pesan"
                 name="pesan"
                 value={pesan}
                 onChange={(e) => setPesan (e.target.value)}
                 placeholder="contoh: example@gmail.com"
                 className={classInput}
                />
                {error.pesan && <p className={classError}>{error.pesan}</p>}
            </div>
            <div className="mt-2">
                <button type="submit" className="py-2 px-6 rounded-md bg-aksen text-white font-semibold">Kirim Pesan</button>
                <p className="mt-2 text-sm text-gray-400">Form ini belum mengirim pesan. Pengiriman pesan di aktifkan di minggu 15.</p>
                {berhasil && (
                    <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">Terima kasih {nama}, pesan mu lolos pemeriksaan</p>
                )}
            </div>
        </form>
    )    
}