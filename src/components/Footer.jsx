export default function Footer() {
    const tahun = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
            <p className="text-sm text-gray-600 dark:textgray-400">
                &copy; {tahun} Azqal Andhika Fabiansyah. Dibuat Next.js di Kelas Industri UBIG
            </p>
        </footer>
    );
}