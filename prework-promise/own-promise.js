let authUser = 'jim';

const emptyPromise = new Promise((resolve, reject) => {
  if(authUser) {
    return resolve(authUser)
  } else {
    return reject(Error('not a user'))
  }
});

