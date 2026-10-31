export const metadata = {
    title: "Kontak",
    description: "daftar proyek HTML, CSS dan JavaScript karya Azqal Andhika"
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-5 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Kontak Saya</h1>
            <p className="mt-3 text-lg text-gray-700">Halaman ini akan berisi form Kontak saya</p>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                    <form className="mx-auto  grid md:grid-cols-2 gap-6">
                        <div className="w-150 space-y-4 bg-white p-4 rounded-lg">
                            <div className="">
                                <label htmlFor="nama" className="block font-semibold">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    placeholder="Contoh: Azqal Andhika"
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="email" className="block font-semibold">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Contoh: user123@gmail.com"
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="phone" className="block font-semibold">Nomor HP</label>
                                <input
                                    type="tell"
                                    id="phone"
                                    name="phone"
                                    placeholder="08123456789"
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                                />
                            </div>

                            <div>
                                <label htmlFor="keperluan" className="block font-semibold">Keperluan</label>

                                <select
                                    id="keperluan"
                                    name="keperluan"
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 outline-none"
                                >
                                    <option value="">-- Pilih Keperluan --</option>
                                    <option value="pertanyaan">pertanyaan</option>
                                    <option value="kerja sama">Kerja Sama</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div className="">
                                <label htmlFor="pesan" className="block font-semibold">Pesan</label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    rows={3.5}
                                    placeholder="Pesan anda...."
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                                />
                            </div>

                            <div className="mt-2">
                                <button className="py-2 px-6 rounded-md bg-red-800 text-white font-semibold">Kirim Pesan</button>
                                <p className="mt-1 text-sm text-gray-500">Form ini belum mengirim pesan. Pengiriman pesan di aktifkan di minggu 15</p>
                            </div>
                        </div>


                    </form>
                </div>

                <div className=" bg-white p-4 rounded-lg">
                    <h2 className="text-utama font-bold text-2xl">Temukan Saya di</h2>
                    <p>GitHub</p>
                    <a href="https://github.com/AZQAL">azqalrpl@gmail.com</a>
                </div>
            </div>

        </main>
    );
};