// Selection Sort Implementation
// Mr. Scott
// Nov 3, 2023
// Writing our own sorting method

let values = [];
const ARRAY_SIZE = 20;

function setup() {
  noCanvas();  populateArray();
  print(values)
}

function populateArray(){
  //using a loop, fill our array with many random numbers
  for(let i = 0; i < ARRAY_SIZE; i++){
    values.push(floor(random(1000)));
  }
}

