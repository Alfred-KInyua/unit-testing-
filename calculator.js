class Calculator{
 constructor(num1, num2){
   this.num1=num1;
   this.num2=num2
 }

 static add(num1,num2){
    if(typeof num1==="string" || typeof num2==="string")
    {
        throw new Error('please type a string');
    }
 return(num1+num2)
 }
 sub(num1,num2){
    if(typeof num1==="string" || typeof num2==="string")
    {
        throw new Error('please type a string');
    }
    return(num1-num2)
 }
 multiply(num1,num2){
    return(num1*num2)
 }
 divide(num1,num2){
    if(num2===0){
        throw new Error('YOu cannot divide by zero');
    }
    return(num1/num2)
 }


}
module.exports =Calculator;