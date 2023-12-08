let myObject = {
    item1: 'cake',
    item2: 'chocolates',
    item3: 'shakes'
  };
  
  console.log("Object properties and values:");
  for (let property in myObject) {
    console.log(`${property}: ${myObject[property]}`);
  }
  

  let mArray = ['cake', 'chocolates', 'shakes'];
  console.log("Array values:");
  for (let value of mArray) {
    console.log(value);
  }