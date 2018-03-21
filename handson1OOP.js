class Stadium {
  constructor(name, city, capacity) {
    this.name = name;
    this.city = city;
    this.capacity = capacity;
  }

describeStadium() {
    console.log("the" +" "+ this.name + " " + "is in" +" "+ this.city + " " +"and holds"+" "+ this.capacity +" "+ "fans");
  }
}
let Stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000);

Stadium1.describeStadium();

/*
•	Create Stadium class.
•	Add the constructor function.
•	The constructor should contain three properties: 
o	name - Name of the stadium
o	city - What city is the stadium located in?
o	capacity - How many fans can fit in the stadium?
•	Add describeStadium() method.
If the following instance is created and the describeStadium() method is called:
let stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000);

stadium1.describeStadium();
It should produce:
OUTPUT:
The Mercedes Benz Arena is in Atlanta and holds 70000 fans.
*/