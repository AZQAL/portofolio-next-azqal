import Link from "next/link"
import Hero from "@/components/Hero"
import SkillCard from "@/components/SkillCard"
import ProyekCard from "@/components/ProyekCard"
import { buttonVariants } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

export const revalidate= 60;

export default async function Home () {
  const {data: proyekTerbaru} = await supabase
  .from("projects")
  .select("*")
  .order("created_at", {ascending: false})
  .limit(3);

  const {data: skills} = await supabase
  .from("skills")
  .select("*")
  .order("id");

  const Nama = "Azqal Andhika F"
  const TahunLahir = 2009

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
      nama="Azqal Andhika F"
      tagline="saya siswa SMKN1 PASURUAN jurusan REKAYASA PERANGKAT LUNAK"
      />

      <section className="mt-10">
        <h2 className="font-bold text-2xl text-primary dark:textsky-200 mb-4">Keahlian</h2>
        <div className="grid grid-cols-3 gap-4">
        {skills && skills.map ((item) => (
          <SkillCard
            key={item.nama}
            nama={item.nama}
            level={item.level}
          />
        ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-bold text-2xl text-primary dark:textsky-200 mb-4">Proyek Terbaru</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {proyekTerbaru.map ((proyek) => (
            <ProyekCard
              key={proyek.slug}
              proyek={proyek}
            />
          ))}
        </div>
        <Link href="/proyek"  className={buttonVariants({size: "lg", className:"mt-6"})}>
            Lihat Semua Proyek
        </Link>
      </section>
    
    </main>
  )
}