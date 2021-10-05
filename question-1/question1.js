const lowerCaseWords = (array) =>
  new Promise((resolve, reject) => {
    if (array.length === 0 || !array || !Array.isArray(array)) 
    {
        reject("Invalid Array");
    }
    resolve(array.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

  
const mixedArray = ['PIZZA',10,true,25,false,'Wings'];
lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));