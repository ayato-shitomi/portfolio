const birthday = {
    year: 2004,
    month: 11,
    date: 24
};

function getAge(birthday){
    var today = new Date();
    var thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
    var age = today.getFullYear() - birthday.year;
    if(today < thisYearsBirthday){
        age--;
    }
    return age;
}
var elmAge = document.createElement("div");
var cntAge = document.createTextNode("(" + getAge(birthday) + ")");
elmAge.appendChild(cntAge);
elmAge.setAttribute("id","idMyAge");
var parentDiv = document.getElementById("idIconAndName");
parentDiv.appendChild(elmAge);