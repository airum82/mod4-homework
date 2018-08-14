let authUser = 'jim';

const checkUser = () => {
  return new Promise((resolve, reject) => {
    if(authUser) {
      return resolve(authUser)
    } else {
      return reject(Error('not a user'))
    }
  });
}

const checkPw = (pw) => {
  return new Promise((resolve, reject) => {
    if (pw === 'sesame') {
      return resolve('You may enter')
    } else {
      return reject(Error('Away with you'))
    }
  })
}

