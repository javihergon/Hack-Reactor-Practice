// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z;
z = x;
x = y;
z = x + y;
y = z - x;
z = y;
x = y * z;
z = y / z;
x = (z - x) / (y + z);

/////////////////

var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};