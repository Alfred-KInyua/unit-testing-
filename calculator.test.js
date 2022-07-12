const Calculator = require('./calculator')

describe('Add Method',()=>{
test('return the sum of two numbers',()=>{
//Arrange
const num1= 10;
const num2 = 20;

//act
 const answer =Calculator.add(num1,num2);

//Asser
expect(answer).toBe(30);
});


test('return error for string elements',()=>{
 //Arrange
 const a= "billy"
 const b="33"
 //Act
 const ans =()=>{
  Calculator.add(a,b);
 }
 //Assert
expect(ans).toThrowError();


});


});

describe('subtract method',()=>{
test('return the difference of two numbers',()=>{
    //Arrange
    const num1= 70
    const num2 = 60;
    
    //act
      const answers = new Calculator();
      const  remove =answers.sub(num1,num2);
    
    //Assert
    expect(remove).toBe(10);
    });

    test('should throw an error for non number arguments',()=>{
     //Arrange
     const num1= "we";
     const num2='30';

     //Act
      const be=()=>{
       const mysub = new Calculator();
       mysub.sub(num1,num2)

      }

     //Assert
     expect(be).toThrowError();
    });

    });



    describe('multiply method',()=>{
    test('return the product of two numbers',()=>{
        //Arrange
        const num1= 7
        const num2 = 6;
        
        //act
          const answers = new Calculator();
          const  remove =answers.multiply(num1,num2);
        
        //Assert
        expect(remove).toBe(42);
        });
    });




        describe('Devide method',()=>{
        test('return the quotient of two numbers',()=>{
            //Arrange
            const num1= 6
            const num2 = 2;
            
            //act
              const answers = new Calculator();
              const  remove =answers.divide(num1,num2);
            
            //Assert
            expect(remove).toBe(3);
            });

            test('should throw an error for a zero divisor',()=>{
                //Arrange
                const num1= 6
                const num2 = 0;
                
                //act
                 const ans1=()=>{
                 const mystuff = new Calculator();
                 mystuff.divide(num1,num2)
                 
                 }
                
                //Assert
                expect(ans1).toThrowError();
                });
        });


