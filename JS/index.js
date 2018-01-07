var politician = {
    name_pol: "Maew",
    age_pol: "50",
    skill_pol: ["Manage", "Law"],
    show_pol: function() {
        return "He is " + this.name_pol + " " + this.age_pol + " years old";
    }
}
document.write(politician.show_pol());
for (var prop in politician) {
    console.log(politician[prop]);
}