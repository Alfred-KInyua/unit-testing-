const stringLength= require('./string_count');
test('Returns the length of a string', ()=>{
//Act
const stringCount ="njauKInyua"
//Assign
const storage = stringLength(stringCount);
//Assert
expect(storage).toBe(10);
});