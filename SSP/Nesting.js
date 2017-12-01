// /*Retrieve the value "comeGetMe!" in each of the following data structures. Store them in variable(s)/data structure(s) of your choice
// */

var arrayA = ["hello", "world", "hack", "reactor", "comeGetMe!", "is", "awesome"];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin",];
var objA = {
    name : "Joker",
    favoriteColor : "Purple",
    catchPhrase : "comeGetMe!"
};
var objB = {
    yogurtFlavor : "Vanilla Tart",
    serialNumber : "64928599301ADDG",
    companyName : "comeGetMe!",
    shippingAddress : "1600 Pennsylvania Ave NW, Washington, D.C."
};


console.log(arrayA[4]);
console.log(arrayB[4]);
console.log(objA.catchPhrase);
console.log(objB['companyName']);

// // How would you access the the value of pets?
// //Exercise 1:

var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : "dogs"
};

console.log(myStore.pets);

// How would you access and store the value of the property pets?

var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
    }
};

var pets = myStore.pets;
console.log(pets.dogs);
console.log(myStore.pets);

/*Now try this :

Retrieve the number of each pet the pets object. Store each of them in variables for easy reference later.
*/

var dogsNumber = pets.dogs;
var catsNumber = pets.cats;
var birdsNymber = pets.birds;
var fishesNumber = pets.fishes;

// /*
// Exercise 2:

// Retrieve the specific property of each small box inside the bigBox and store it in the variables provided (replace null);
// */

var bigBox = {
    smallBoxA : {weight : 12, volume : 15, full : true},
    smallBoxB : {weight : 22, volume : 12, full : false},
    smallBoxC : {weight : 19, volume : 19, full : false}
};

var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var weightOfSmallBoxB = bigBox.smallBoxB.volume;
var isSmallBoxCFull = bigBox.smallBoxC.volume;

var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var weightOfSmallBoxB = bigBox.smallBoxB.weight;
var isSmallBoxCFull = bigBox.smallBoxC.full;


//More Practice

function BoxMaker() {
  var newBox = {
    length: randomInt(5),
    width: randomInt(10),
    height: randomInt(10),
    contents: ['photos', 'letters', 'documents']
  };
  return newBox;
}

function randomInt(num) {
  return Math.ceil(Math.random() * (num));
}

var box1 = BoxMaker();
var box2 = BoxMaker();
var box3 = BoxMaker();
typeof boxOne;

var warehouse = [box1, box2, box3];

function orderBoxes(num) {
  for (var i = 0; i <= num; i++) {
    warehouse.push(BoxMaker());
  }
  return warehouse;
}

orderBoxes(6);

function getVolume(box) {
  var volume = box.length * box.width * box.height;
  return volume;
}

console.log(warehouse[0]);
console.log(getVolume(warehouse[0]));

for (var i = 0; i < warehouse.length; i++) {
  warehouse[i].contents.push("safety manual", "mothballs");
}

warehouse;


//Advanced

var youDontNeedToWorryAboutAnythingInHere = function() {
    var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
    var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
    var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
    var emptyNetwork = [];

    function createNetwork(collection){

        for (var i = 0; i < NameArray.length; i++) {
            var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
            var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

            collection.push(createNewUser(NameArray[i], randomJob, randomCity));
        }

        return collection;
    }

    return createNetwork(emptyNetwork);

};

function createNewUser(username, job, city){
    var newUser = {
        username: username,
        job: job,
        city: city,
        friends: [],
        family: [],
        coworkers: [],
    };

    return newUser;

}
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like

//console.dir(ourUser);
//console.dir(userNetwork);

// YOUR CODE HERE

// console.dir(joeyProfile);
// console.dir(allUsers);

for (var i = 0; i < allUsers.length; i++) {
  if (allUsers[i].city === joeyProfile.city) {
    joeyProfile.friends.push(allUsers[i].username);
  }
}

for (var i = 0; i < allUsers.length; i++) {
  if (allUsers[i].job === joeyProfile.job) {
    joeyProfile.coworkers.push(allUsers[i].username);
  }
}

for (var i = 0; i < allUsers.length; i ++) {
  var usernameLastName = allUsers[i].username.split(' ')[allUsers[i].username.split(' ').length - 1];
  if (usernameLastName === 'Plain') {
    joeyProfile.family.push(allUsers[i].username);
    
  }
}

var joeyFamily = joeyProfile.family;
var joeyFriends = joeyProfile.friends;
var joeyCoworkers = joeyProfile.coworkers;

for (var i = 0; i < joeyFamily.length; i++) {
  for (var j = 0; j < joeyFriends.length; j++){
    if (joeyFamily[i] === joeyFriends[j]) {
      joeyFriends.splice(j, 1);
    }
  }
}

for (var i = 0; i< joeyFriends.length; i++) {
  for (var j = 0; j < joeyCoworkers.length; j++) {
    if (joeyFriends[i] === joeyCoworkers[j]) {
      joeyCoworkers.splice(j);
    }
  }
}

joeyProfile;






















































