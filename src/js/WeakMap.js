// udalenie karti ne ispolzuemogo ob'ekta, esli udalyaetsya oskomiu object
WeakMap();

//
let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }

  return cache.get(user);
}

let lena = { name: 'elena' };
let alex = { name: 'alex' };

cacheUser(lena);
cacheUser(alex);


