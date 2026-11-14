"use client"

import { useState } from "react"
import { Button } from "./ui/button";

export default function () {
    const [gelap, setGelap] = useState(false);

    function gantiTema () {
        document.documentElement.classList.toggle("dark");
        setGelap(!gelap);
    }

    return (
        <Button
            variant="outline"
            onClick={gantiTema}
            className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
        >
            {gelap ? "mode terang" : "mode gelap"}
        </Button>
    )
}