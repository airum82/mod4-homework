let authUser = 'jim';

const checkUser = () => {
  const emptyPromise = new Promise((resolve, reject) => {
    if(authUser) {
      return resolve(authUser)
    } else {
      return reject(Error('not a user'))
    }
  });
  return emptyPromise.then(response => response.json());
}

