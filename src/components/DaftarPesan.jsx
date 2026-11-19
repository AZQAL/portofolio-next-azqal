"use client"
import { sematkanPesan, hapusPesan } from "@/app/actions"
import { Button } from "@/components/ui/button"
import KonfirmasiHapus from "./KonfirmasiHapus"


export default function DaftarPesan({ pesanList }) {
  return (

    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Kelola Buku Tamu</h1>
      {pesanList.map((item) => (
        <div key={item.id} className="p-4 border rounded flex justify-between items-start">
          <div>
            <p className="font-bold">{item.nama}</p>
            <p>{item.pesan}</p>
          </div>
            <div className="flex gap-2">
                    <Button 
                    variant="outline" 
                    onClick={() => sematkanPesan(item.id, item.disematkan)}
                    >
                    {item.disematkan ? "Lepas" : "Sematkan"}
                    </Button>
                    <KonfirmasiHapus id={item.id} onHapus={hapusPesan} />
            </div>
        </div>
      ))}
    </div>
  )
}