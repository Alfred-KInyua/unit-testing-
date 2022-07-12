const { describe } = require('yargs');
const stringLength= require('./string_count');
test('Returns the length of a string', ()=>{
//Act
const stringCount ="njauKInyua"
//Assign
const storage = stringLength(stringCount);
//Assert
expect(storage).toBe(10);
});

test('Returns an error if the number <1 or >10', ()=>{
    //Act
    const stringCount ="njauKInyuaiwoeyriuwer"
    //Assign
    const checkNUm = ()=>{
        stringLength(stringCount);
    }
    //Assert
    expect(checkNUm).toThrowError();
    });
