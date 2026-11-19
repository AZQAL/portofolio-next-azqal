"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import TombolKirim from "@/components/TombolKirim"

export default function FormProyek({ aksi, proyek, teksTombol }) {
  const [state, formAction] = useActionState(aksi, { proyek: proyek || {} })

  return (
    <form action={formAction} className="space-y-4">
      {state?.error && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}

      <input type="hidden" name="id" value={state.proyek?.id || ""} />

      <div>
        <Label htmlFor="judul">Judul</Label>
        <Input
          id="judul"
          name="judul"
          defaultValue={state.proyek?.judul || ""}
          placeholder="Contoh: Buku Tamu"
        />
      </div>

      <div>
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          defaultValue={state.proyek?.slug || ""}
          placeholder="Contoh: buku-tamu"
        />
      </div>

      <div>
        <Label htmlFor="kategori">Kategori</Label>
        <select
          id="kategori"
          name="kategori"
          defaultValue={state.proyek?.kategori || ""}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>Pilih Kategori</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Next.js">Next.js</option>
        </select>
      </div>


      <div>
        <Label htmlFor="deskripsi">Deskripsi</Label>
        <Textarea
          id="deskripsi"
          name="deskripsi"
          defaultValue={state.proyek?.deskripsi || ""}
          placeholder="Tulis deskripsi proyek..."
        />
      </div>

      <div>
        <Label htmlFor="fitur">Fitur (satu per baris)</Label>
        <Textarea
          id="fitur"
          name="fitur"
          defaultValue={(state.proyek?.fitur || []).join("\n")}
          placeholder="Fitur 1&#10;Fitur 2&#10;Fitur 3"
        />
      </div>

      <div>
        <Label htmlFor="gambar_url">Alamat Gambar</Label>
        <Input
          id="gambar_url"
          name="gambar_url"
          defaultValue={state.proyek?.gambar_url || ""}
          placeholder="Contoh: /proyek/proyek-buku-tamu.png"
        />
      </div>

      <TombolKirim teks={teksTombol} />
    </form>
  )
}