const stringLength =(stringCount)=>{
    if(stringCount.length<1 || stringCount.length>10){
    throw new Error('characters should be between 1 and 10');
    }
   return (stringCount.length);


}

module.exports=stringLength;