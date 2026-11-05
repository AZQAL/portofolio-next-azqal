

import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "daftar proyek HTML, CSS dan JavaScript karya Azqal Andhika"
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-5 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 dark:textsky-200 md:text-4xl">Kontak Saya</h1>
            <p className="mt-3 text-lg text-gray-700 dark:textgray-300">Halaman ini akan berisi form Kontak saya</p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
                    <FormKontak/>
                </section>

                <div className=" bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-utama dark:text-sky-200 dark:textsky-200 font-bold text-2xl">Temukan Saya di</h2>
                    <p>GitHub</p>
                    <a href="https://github.com/AZQAL">azqalrpl@gmail.com</a>
                </div>
            </div>

        </main>
    );
};