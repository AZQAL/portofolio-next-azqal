import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function ProyekCard ({proyek}) {
    return (
        <Link
            href={`/proyek/${proyek.slug}`}
            className="block overflow-hidden rounded-xl border border-border dark:border-gray-700 bg-card shadow-sm hover:shadow-md "
        >
            <Card className="h-full">
            <Image
                src={proyek.gambar_url}
                alt={`tangkapan layar ${proyek.judul}`}
                width={640}
                height={420}
                className="h-auto w-full"
            />

            <CardHeader>
                <Badge variant={proyek.kategori.toLowerCase()}>{proyek.kategori}</Badge>

                <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
                <CardDescription>{proyek.deskripsi}</CardDescription>
            </CardHeader>
            </Card>
        </Link>
    )
}