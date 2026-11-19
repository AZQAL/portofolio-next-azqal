"use server"
import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabae-admin";
import { sudahMasuk } from "@/lib/pin";
import { revalidatePath } from "next/cache";


export async function kirimPesan(stateSebelum, formData) {
    const nama = formData.get("nama").trim();
    const pesan = formData.get("pesan").trim();

    if (nama === "" || pesan === "") {
        return {error: "nama dan pesan wajib di isi", nama, pesan};
    }

    const { error } = await supabase
    .from("buku_tamu")
    .insert({nama, pesan});

    if (error) {
        return { error: `pesan gagal disimpan: ${error.message}`, nama, pesan};
    }
    revalidatePath("/buku_tamu");
    return{ berhasil:`terima kasih, ${nama} pesan mu sudah tersimpan.`};
}

export async function sematkanPesan(id, currentStatus) {
  if (!(await cekLogin())) return { error: "Tidak diizinkan" }
  
  const adminSupabase = createAdminClient()
  await adminSupabase
    .from("buku_tamu")
    .update({ disematkan: !currentStatus })
    .eq("id", id)
    
  revalidatePath("/kelola")
  revalidatePath("/buku-tamu")
}