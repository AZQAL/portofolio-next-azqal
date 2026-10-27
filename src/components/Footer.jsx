export default function () {

    const tahun = new Date().getFullYear();

    return (
        <section className="w-full flex items-center justify-center border py-2">
        <p className="flex items-center justify-center gap-4">&copy; {tahun} <span className="flex items-center justify-center font-semibold text-shadow-md text-shadow-blue-600 p-1 rounded-b-xl">M. Azqal Andhika F.</span></p>
        </section>
    )
}