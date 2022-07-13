

const convert = require ('./capString');
test('shiuld return the first letter as uppercase',()=>{
//Arrange 
const message ="alfred"
//Assert 
  const response =convert(message);
//Act
expect(response).toBe(message[0].toUpperCase()+message.slice(1));
})