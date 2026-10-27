import Hero from "@/components/Hero"
import SkillCard from "@/components/SkillCard"
import Kartu from "@/components/Kartu"

const skills = [
  {nama: "HTML", level:"Menengah"},
  {nama: "CSS", level:"Menengah"},
  {nama: "Git dan GitHub", level:"Dasar"},
  {nama: "Desain poster dengan canva", level:"Mahir"},
  {nama: "JavaScript", level:"Dasar"},
]

const hobi = [
  "Volly",
  "Badminton",
  "Coding",
]

const citaCita = [
  "menjadi pembisnis",
  "menjadi web developer",
  "sukses dalam segala hal"
]

const jadwals = [
  {hari:"Senin", waktu:"07.00-14.25", kegiatan:"sekolah"},
  {hari:"Selasa", waktu:"07.00-14.25", kegiatan:"sekolah"},
  {hari:"Rabu", waktu:"07.00-14.25", kegiatan:"sekolah"},
  {hari:"Kamis", waktu:"07.00-14.25", kegiatan:"sekolah"}
]



export default function Home () {
  const Nama = "Azqal Andhika F"
  const TahunLahir = 2009

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      nama="Azqal Andhika F"
      tagline="saya siswa SMKN1 PASURUAN jurusan REKAYASA PERANGKAT LUNAK"
      />

      <div className="">
        <Kartu judul="tentang saya">
          <p className="text-gray-900">Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. 
            Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.</p>
        </Kartu>
      </div>

      <div className=" grid grid-cols-2 gap-4">
        <Kartu judul="hobi">
          <ul className="list-disc pl-5">
          {hobi.map ((item) => (
            <li key={item}>{item}</li>
          ))}
          </ul>
        </Kartu>

        <Kartu judul="cita-cita">
          <ol>
            {citaCita.map ((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Keahlian">
      <div className="grid gap-4 md:grid-cols-2">
      {skills.map ((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
        ))}
      </div>
      </Kartu>

      <Kartu judul="Jadwal Belajar">
        <table className="border w-full">
          <thead className="bg-utama px-2">
            <tr className="border px-2 bg-blue-950 text-white">
              <th className="">Hari</th>
              <th className="">Waktu</th>
              <th className="">Kegiatan</th>
            </tr>
          </thead>
          <tbody className="border">
            {jadwals.map ((jadwal) => (
              <tr key={jadwal.hari}>
              <td className="border-b border-gray-500 py-3 mb-1">{jadwal.hari}</td>
              <td className="border-b border-gray-500 py-3 mb-1">{jadwal.waktu}</td>
              <td className="border-b border-gray-500 py-3 mb-1">{jadwal.kegiatan}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </Kartu>
    
    </main>
  )
}