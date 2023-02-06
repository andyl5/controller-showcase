const data1 = [
    {
        "id": 1,
        "brand": "Nintendo",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/900px-Nintendo.svg.png?20170720163516",
        // "consoles": ["Gamecube", "Wii"],
        "consoles": {
            "Gamecube": [
                {
                    "controller": "GameCube Controller",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/GC_Logo.svg/600px-GC_Logo.svg.png?20120419174704",
                    "description": "The standard GameCube controller is the best controller ever. So ergonomic in the hands.",
                },
                {
                    "controller": "Wavebird",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nintendo-GameCube-Wavebird-Silver.jpg/1071px-Nintendo-GameCube-Wavebird-Silver.jpg?20120303221849",
                    "description": "The wireless version of the standard GameCube controller.",
                },
            ],
            "Wii": [
                {
                    "controller": "Wii Remote",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Wii_Remote_Image.jpg/1182px-Wii_Remote_Image.jpg?20170303190125",
                    "description": "Wii Remote, revolutionary motion controls.",
                },
                {
                    "controller": "Nunchuck",
                    "img": "https://static.wikia.nocookie.net/w__/images/b/b9/Nunchuk.png/revision/latest/scale-to-width-down/1000?cb=20200801040250&path-prefix=wiisports",
                    "description": "Added a control stick that fits perfectly in the hand.",
                },
            ],
        }
    },
    {
        "id": 2,
        "brand": "Playstation",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/201px-Playstation_logo_colour.svg.png?20160703143304",
        "consoles": ["Playstation 1", "Playstation 2", "Playstation 3"],
    },
    {
        "id": 3,
        "brand": "Xbox",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/132px-Xbox_one_logo.svg.png?20170527203134",
        "consoles": ["Xbox", "Xbox 360", "Xbox One", "Xbox Series X"],
    },
    {
        "id": 4,
        "brand": "Sega",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/450px-SEGA_logo.svg.png?20101229160603",
        "consoles": ["Dreamcast"],
    },
];

export default data1