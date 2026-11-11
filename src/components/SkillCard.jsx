export default function SkillCard ({nama, level}) {
    return (
        <div className="rounded-xl border border-border dark:border-gray-700 bg-card p-5 shadow-sm shadow-blue-300">
            <h3 className="text-lg font-semibold text-primary dark:textsky-200">{nama}</h3>
            <p className="mt-1 text-sm text-muted-foreground dark:textgray-400">Level: {level}</p>
        </div>
    );
}