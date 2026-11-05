import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";
import { notFound } from "next/navigation";

export async function generateMetadata ({params}) {
    const {slug} = await params;
    const item = proyek.find((p) => p.slug === slug );

    if (!item) {
        return { title:"proyek tidak ditemukan"};
    }
    return {title: item.judul, description:item.deskripsi}; 
}

export default async function DetailProyek ({params}) {
    const {slug} = await params;
    const item = proyek.find ((p) => p.slug === slug);

    if (!item) {
        notFound ();
    };

    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <nav aria-label="Breadcrumb">
                <Link href="/" className="text-utama dark:text-sky-200 dark:textsky-200 hover:underline">Beranda</Link>
                <span className="mx-2">/</span>
                <Link href="/proyek" className="text-utama dark:text-sky-200 dark:textsky-200 hover:underline">Proyek</Link>
                <span className="mx-2">/</span>
                <span className="text-utama dark:text-sky-200 dark:textsky-200 font-bold">{item.judul}</span>
            </nav>
            <h1 className="mt-4 text-3xl font-bold text-utama dark:text-sky-200 dark:textsky-200 md:text-4xl">{item.judul}</h1>
            <p className="mt-2 text-gray-600 dark:textgray-400">{item.kategori} &middot; dibuat di {item.minggu}</p>
            <Image
                src={item.gambar}
                alt={`tangkapan layar ${item.judul}`}
                width={640}
                height={420}
                loading="eager"
                className="mt-6 h-auto w-full rounded-xl border border-gray-200 dark:border-gray-700"
            />
            <p className="mt-6 text-lg">{item.deskripsi}</p>
            <h2 className="mt-8 text-2xl font-bold text-utama dark:text-sky-200 dark:textsky-200">yang saya pelajari</h2>
            <ul>
                {item.fitur.map((f) => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
        </main>
    )
};