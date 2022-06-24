//Collection Functions (Arrays or Objects)

function myEach(collection, callback){
    if(typeof collection === 'object') collection = Object.values(collection)

    collection.forEach(e => callback(e))

    return collection;
}
