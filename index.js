    //arrConverter is a helper function to test whether collection is an array or object and converts either to a new array.
    const arrConverter = collection => {
        return typeof collection === 'object' ? Object.values(collection) : collection.slice()
    }


//Collection Functions (Arrays or Objects)
function myEach(collection, callback){
    const newCollection = arrConverter(collection)
    for(let num of newCollection){
        callback(num);
    }
    return collection;
}


function myMap(collection, callback){
    const newCollection = arrConverter(collection)
    let newArr = []
    for(let num of newCollection){
        newArr.push(callback(num))
    }
    return newArr;
}

function myReduce(collection, callback, acc = 0){
    let newCollection = arrConverter(collection)

    if(!acc){
       acc = newCollection[0]
       newCollection = newCollection.slice(1)
    }

    for(let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
    }

    return acc;
}

function myFind(collection, predicate){
  const newCollection = arrConverter(collection)
  
  for(let i = 0; i < newCollection.length; i++){
    if(predicate(newCollection[i])) {
        return newCollection[i];
    }
  }
}

function myFilter(collection, predicate){
    const newCollection = arrConverter(collection)
    let filteredArr = []
    for(let num of newCollection){
        if(predicate(num)) filteredArr.push(num)
    }
    return filteredArr;
}

function mySize(collection){
    const newCollection = arrConverter(collection)
    return newCollection.length;
}



//ARRAY FUNCTIONS
function myFirst(array, n = 1){
    return array.slice(0, n).length === 1 ? array[0] : array.slice(0, n);
}


function myLast(array, n = -1){
    return n === -1 ? array[array.length - 1] : array.slice(-n)
}

    //BONUS ARRAY FUNCTIONS
    // function mySortBy(array, callback){
    //     let newArr = []

    //     return newArr;
    // }



//OBJECT FUNCTIONS
function myKeys(obj){
    let keys = []
    for(let key in obj){
        keys.push(key)
    }
    return keys;
}

function myValues(obj){
    let values = []
    for(let key in obj){
        values.push(obj[key])
    }
    return values;
}