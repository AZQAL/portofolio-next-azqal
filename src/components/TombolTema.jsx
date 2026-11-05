"use client"

import { useState } from "react"

export default function () {
    const [gelap, setGelap] = useState(false);

    function gantiTema () {
        document.documentElement.classList.toggle("dark");
        setGelap(!gelap);
    }

    return (
        <button
            type="button"
            onClick={gantiTema}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "mode terang" : "mode gelap"}
        </button>
    )
}