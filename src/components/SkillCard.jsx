export default function SkillCard ({nama, level}) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm shadow-blue-300">
            <h3 className="text-lg font-semibold text-utama dark:text-sky-200 dark:textsky-200">{nama}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:textgray-400">Level: {level}</p>
        </div>
    );
}