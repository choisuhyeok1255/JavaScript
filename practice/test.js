const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

console.log(obj);

const json = JSON.stringify(obj);
console.log(typeof json, json);

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);