// empty object 
let obj = {};
console.log(obj);

// filling up the parameters
let objSaroj = {
    "Name": "Saroj",
    "Age": "24",
    "phone no": 8018910279,
    lastName: "Padhy"
};
console.log(objSaroj);
// creating a captain america object
let captinAmerica = {
        Name: "Steve Rogers",
        Age: "30",
        //creating array in this object
        Friends: ["HULK", "TONY", "BUCKY", "Wakanda", "Thor"],
        // creating object in captinAmerica object
        address: {
            city: "New York",
            state: "Chicago",
        },
        // creating a function in captinAmerica object
        sayHi: function() {
            console.log("I am Steve Rogers");
        }

    }
    // calling the captinAmerica object 
console.log(captinAmerica);
//print the name 
console.log(captinAmerica.Name);
//print the Age
console.log(captinAmerica.Age);
//print the array of friends
console.log(captinAmerica.Friends);
//print the object adress
console.log(captinAmerica.address);
// print the function of the captinAmerica object
console.log(captinAmerica.sayHi());
// printing the proper values in array from cap object
console.log(captinAmerica.Friends[4]);
// printing the value of object from cap object 
console.log(captinAmerica.address.city);
// printing the say hi function
console.log(captinAmerica.sayHi());
// to remove the undefine just remove console log and call the say hi function
captinAmerica.sayHi();

// addinhg the movie array
captinAmerica.movies = ["Avengers", "Age of ultron", "End Game"];
console.log(captinAmerica.movies);

// changing the state of the america
captinAmerica.address.state = "USA";
console.log(captinAmerica.address);
// assign the cap to avengers false
captinAmerica.isAvengers = false;
console.log(captinAmerica.isAvengers);
//changing false to true
captinAmerica.isAvengers = true;
console.log(captinAmerica.isAvengers);
//----------------------------//
console.log("----------------------------------------------------");
// bracket notation
console.log(captinAmerica['Name']);