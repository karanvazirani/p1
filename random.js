function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min);
    }
    var length=getRandomInteger(5,26);
    string = "";
    for(var i=0;i<length;i++){
  
    let num = getRandomInteger(97,123);
  
    string+=String.fromCharCode(num);
    }
    
    console.log(string)
