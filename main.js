var members = ["My Father", "My Mother ", "Me"];
var albums = ["https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png",
    "https://thumbs.dreamstime.com/b/angry-mother-design-style-character-vector-illustration-89494535.jpg",
    "https://img.favpng.com/18/18/12/the-boss-baby-brother-dreamworks-animation-film-png-favpng-zaRYKfpFLXkrYXpEWA020irjh.jpg"
];

var i = 0;

function update() {
    document.getElementById("member").innerHTML = members[i];
    document.getElementById("album").src = albums[i];
    i++;
    if (i == 5) {
        i = 0;
    }
};