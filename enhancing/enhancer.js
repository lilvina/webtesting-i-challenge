module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(typeof(item) !== 'object') {
    return 'error: must be an object'
  }
  let {name, durability, enhancement} = item
  if(!name || typeof(durability) !== 'number' || typeof(enhancement) !== 'number') {
    return 'error: must include name, enhancement, and durability properties'
  }

  if(enhancement < 20) {
    enhancement += 1
  }

  const success = {
    name: name,
    durability: durability,
    enhancement: enhancement
  }
  return { ...success };
}

function fail(item) {
  if(typeof(item) !== 'object') {
    return 'error: must be an object'
  }
  let {name, durability, enhancement} = item
  if(!name || typeof(durability) !== 'number' || typeof(enhancement) !== 'number') {
    return 'error: must include name, enhancement, and durability properties'
  }

  if(enhancement < 15) {
    durability -= 5
  }
  if(enhancement >= 15) {
    durability -= 10
  }
  if(enhancement > 16) {
    enhancement -= 1
  }

  const error = {
    name: name,
    durability: durability,
    enhancement: enhancement
  }
  return { ...error };
}

function repair(item) {
  if(typeof(item) !== 'object') {
    return 'error: must be an object'
  }
  let {name, enhancement} = item
  if(!name || typeof(enhancement) !== 'number') {
    return 'error: must include name and enhancement properties'
  }
  const fixed = {
    name: name,
    durability: 100,
    enhancement: enhancement
  }
  return { ...fixed };
}

function get(item) {
  return { ...item };
}
