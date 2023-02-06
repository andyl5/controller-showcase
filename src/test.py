data1 = [
    {
        "id": 1,
        "brand": "Nintendo",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/900px-Nintendo.svg.png?20170720163516",
        "consoles": ["Gamecube", "Wii"],
    },
    {
        "id": 2,
        "brand": "Playstation",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/201px-Playstation_logo_colour.svg.png?20160703143304",
        "consoles": ["Playstation 1", "Playstation 2", "Playstation 3"],
    },
]

# This test code returns the consoles given a brand. *in python* --> convert to javascript
brand = input("Brand?\n")

for elem in data1:
    if brand == elem["brand"]:
        print(elem["consoles"])