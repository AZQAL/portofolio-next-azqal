import Image from "next/image"

export default function Hero({ nama, tagline }) {
    return (
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="relative w-50 h-50 group">
                <img
                    src="/foto-2.png"
                    alt="Foto 2"
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-10 transition-transform duration-400 ease-out group-hover:shadow-lg shadow-blue-600 group-hover:rotate-180 group-hover:-translate-x-30"
                />
                <img
                    src="/foto-2.png"
                    alt="Foto 2"
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-10 transition-transform duration-400 ease-out group-hover:shadow-lg shadow-blue-600 group-hover:rotate-180 group-hover:translate-x-30"
                />
                <img
                    src="/proofile.png"
                    alt="Foto 1"
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-20 ease-out group-hover:shadow-lg shadow-cyan-600"
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-utama md:text-5xl">Halo, saya {nama}</h1>
                <p className="mt-3 text-lg text-gray-700">{tagline}</p>
            </div>
        </section>
    )
}