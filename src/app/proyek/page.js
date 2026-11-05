
import { proyek } from "@/data/proyek";
import FilterProyek from "@/components/FilterProyek";

export const metadata = {
    title:"Proyek",
    description:"Hubungi Azqal Andhika melalui form kontak, email, atau GitHub"
};

export default function DaftarProyek () {
    return (
        <main className="mx-auto max-w-5xl px-5 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 dark:textsky-200 md:text-4xl">Proyek Saya</h1>
            <p className="mt-3 text-lg text-gray-700 dark:textgray-300">Kumpulan hasil belajar saya di kelas industri UBIG. Klik kartu untuk melihat detailnya</p>

            <FilterProyek proyek={proyek} />
        </main>
    );
};