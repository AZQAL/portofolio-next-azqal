export default function Kartu ({judul, children}) {
    return (
        <div className="mt-10 rounded-xl border border-border dark:border-gray-700 bg-card p-6 shadow-sm shadow-blue-300">
            <h2 className="mb-3 text-2xl font-bold text-primary dark:textsky-200">{judul}</h2>
            {children}
        </div>
    )
}