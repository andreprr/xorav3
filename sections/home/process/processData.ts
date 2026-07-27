import {
    Search,
    PenTool,
    Code2,
    Rocket,
} from "lucide-react";

export const processSteps = [
    {
        id: 1,
        icon: Search,

        number: "01",

        title: "Konsultasi",

        description:
            "Diskusikan kebutuhan bisnis dan tujuan website atau sistem yang ingin dibangun.",

        rotation: "-6deg",

        size: "large",

        position: {
            top: "170px",
            left: "60px",
        },
    },

    {
        id: 2,

        icon: PenTool,

        number: "02",

        title: "Perencanaan",

        description:
            "Kami menyusun struktur, desain, dan alur sistem sesuai kebutuhan bisnis Anda.",

        rotation: "5deg",

        size: "small",

        position: {
            top: "120px",
            right: "70px",
        },
    },

    {
        id: 3,

        icon: Code2,

        number: "03",

        title: "Development",

        description:
            "Proses pembuatan website atau sistem menggunakan teknologi modern.",

        rotation: "-4deg",

        size: "small",

        position: {
            top: "315px",
            right: "55px",
        },
    },

    {
        id: 4,

        icon: Rocket,

        number: "04",

        title: "Launch",

        description:
            "Website siap online dan kami tetap memberikan support setelah project selesai.",

        rotation: "7deg",

        size: "small",

        position: {
            top: "510px",
            right: "65px",
        },
    },
];