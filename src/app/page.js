import Link from "next/link"
import Hero from "@/components/Hero"
import SkillCard from "@/components/SkillCard"
import ProyekCard from "@/components/ProyekCard"
import { proyek } from "@/data/proyek"

const skills = [
  {nama: "HTML", level:"Menengah"},
  {nama: "CSS", level:"Menengah"},
  {nama: "Git dan GitHub", level:"Dasar"},
  {nama: "Desain poster dengan canva", level:"Mahir"},
  {nama: "JavaScript", level:"Dasar"},
];

const proyekTerbaru = proyek.slice (-3);

export default function Home () {
  const Nama = "Azqal Andhika F"
  const TahunLahir = 2009

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      nama="Azqal Andhika F"
      tagline="saya siswa SMKN1 PASURUAN jurusan REKAYASA PERANGKAT LUNAK"
      />

      <section className="mt-10">
        <h2 className="font-bold text-2xl text-utama mb-4">Keahlian</h2>
        <div className="grid grid-cols-3 gap-4">
        {skills.map ((item) => (
          <SkillCard
            key={item.nama}
            nama={item.nama}
            level={item.level}
          />
        ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-bold text-2xl text-utama mb-4">Proyek Terbaru</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {proyekTerbaru.map ((proyek) => (
            <ProyekCard
              key={proyek.slug}
              proyek={proyek}
            />
          ))}
        </div>
        <Link href="/proyek" className="inline-block bg-utama rounded-lg px-5 py-2 font-semibold text-white">
            Lihat Semua Proyek
        </Link>
      </section>
    
    </main>
  )
}