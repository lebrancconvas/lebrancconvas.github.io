var friends = [{
        friendName: "Sora",
        friendAge: 17,
        friendMovie: "Star Wars"
    },
    {
        friendName: "Cherprang",
        friendAge: 20,
        friendMovie: "Kimi no nawa"
    },
    {
        friendName: "Joe",
        friendAge: 22,
        friendMovie: "Harry Potter"
    },
    {
        friendName: "Champ",
        friendAge: 18,
        friendMovie: "Mary is happy, Mary is happy"
    },
    {
        friendName: "Nok",
        friendAge: 25,
        friendMovie: "Hor Taew Tak"
    }
]

for (var i = 0; i < friends.length; i++) {
    console.log(i + 1 + ". " + friends[i].friendName);
    console.log(" " + " " + " " + friends[i].friendAge);
    console.log(" " + " " + " " + friends[i].friendMovie);
}