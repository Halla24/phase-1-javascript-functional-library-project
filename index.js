// Helper function to check if a variable is an array
function isArray(collection) {
    return Array.isArray(collection);
  }

  // Helper function to iterate over a collection and apply a callback
  function iterate(collection, callback) {
    if (isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
  }

  // myEach function
  function myEach(collection, callback) {
    iterate(collection, callback);
    return collection;
  }

  // myMap function
  const myMap = function(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);

    const newArr = [];

    for (let idx = 0; idx < newCollection.length; idx++) {
      if (Array.isArray(collection)) {
        newArr.push(callback(newCollection[idx], idx));
      } else {
        const key = Object.keys(collection)[idx];
        newArr.push(callback(newCollection[idx], key));
      }
    }

    return newArr;
  }


  // myReduce function
  const myReduce = function(collection, callback, acc) {
    const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);

    if (acc === undefined) {
      if (newCollection.length === 0) {
        throw new Error('Reduce of empty collection with no initial value');
      }
      acc = newCollection.shift();
    }

    for (let idx = 0; idx < newCollection.length; idx++) {
      acc = callback(acc, newCollection[idx], collection);
    }

    return acc;
  }


  // myFind function
  function myFind(collection, predicate) {
    let found;
    let isFound = false;

    iterate(collection, (item, key, collection) => {
      if (!isFound && predicate(item, key, collection)) {
        found = item;
        isFound = true;
      }
    });

    return found;
  }

  // myFilter function
  function myFilter(collection, predicate) {
    const result = [];
    iterate(collection, (item, key, collection) => {
      if (predicate(item, key, collection)) {
        result.push(item);
      }
    });
    return result;
  }

  // mySize function
  function mySize(collection) {
    let count = 0;
    iterate(collection, () => {
      count++;
    });
    return count;
  }

  // myFirst function
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  // myLast function
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  // myKeys function
  function myKeys(object) {
    return Object.keys(object);
  }

  // myValues function
  function myValues(object) {
    return Object.values(object);
  }
