

import FormKontak from "@/components/FormKontak";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "Kontak",
    description: "daftar proyek HTML, CSS dan JavaScript karya Azqal Andhika"
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-5 py-10">

            <h1 className="text-3xl font-bold text-primary dark:textsky-200 md:text-4xl">Kontak Saya</h1>
            <p className="mt-3 text-lg text-muted-foreground dark:textgray-300">Halaman ini akan berisi form Kontak saya</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardContent>
                        <FormKontak/>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary" >Temukan Saya di</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/AZQAL" target="_blank" className="text-aksen hover:underline">GitHub</a>
                            </li>
                            <li>
                                <a href="mailto:azqalrpl@gmail.com" className="text-aksen hover:underline">azqalrpl@gmail.com</a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
            
        </main>
    );
};