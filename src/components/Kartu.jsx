export default function Kartu ({judul, children}) {
    return (
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm shadow-blue-300">
            <h2 className="mb-3 text-2xl font-bold text-utama">{judul}</h2>
            {children}
        </div>
    )
}