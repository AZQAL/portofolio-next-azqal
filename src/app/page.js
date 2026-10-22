import Hero from "@/components/Hero"
import SkillCard from "@/components/SkillCard"

const skills = [
  {nama: "HTML", level:"Menengah"},
  {nama: "CSS", level:"Menengah"},
  {nama: "Git dan GitHub", level:"Dasar"},
  {nama: "Desain poster dengan canva", level:"Mahir"},
  {nama: "JavaScript", level:"Dasar"},
]

export default function Home () {
  const Nama = "Azqal Andhika F"
  const TahunLahir = 2009

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      Nama="Azqal Andhika F"
      tagline="saya siswa SMKN1 PASURUAN jurusan REKAYASA PERANGKAT LUNAK"
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
        {skills.map ((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
        ))}
        </div>
      </section>
    
    </main>
  )
}