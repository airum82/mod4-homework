const testNum = num => {
  return new Promise((resolve, reject) => {
    if(num > 10) {
      return resolve(num + 'is greater than 10, sucess');
    } else {
      return reject(Error(num + 'is not greater than 10, error'))
    }
  })
}

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    return resolve(words.map(word => word.toUpperCase()))
  })
}

const sortWords = words => {
  return new Promise((resolve, reject) => {
    const checkedForString = words.filter(word => typeof (word) !== 'string')
    if(checkedForString.length) {
      return reject(Error('Array contains an element that is not a string'))
    }
    return resolve(words.sort())
  })
}


