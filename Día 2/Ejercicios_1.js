const { log } = require("har-validator");

//1. ------------------------------------------------------------------
let challenge = '30 Days Of JavaScript';

//2. ------------------------------------------------------------------
console.log(challenge);

//3. ------------------------------------------------------------------
console.log(challenge.length)

//4. ------------------------------------------------------------------
console.log(challenge.toUpperCase());

//5. ------------------------------------------------------------------
console.log(challenge.toLowerCase());

//6. ------------------------------------------------------------------
console.log(challenge.substring(3,7));

//7. ------------------------------------------------------------------
challenge = '30 Days Of JavaScript'
console.log(challenge.substring(3,challenge.length));

//8. ------------------------------------------------------------------
challenge = '30 Days Of JavaScript'
console.log(challenge.includes("Script"));

//9. ------------------------------------------------------------------
console.log(challenge.split(''));

//10. -----------------------------------------------------------------
console.log(challenge.split(' '));

//11. -----------------------------------------------------------------
companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon',
console.log(companies.split(','));

//12. -----------------------------------------------------------------
challengePy = challenge.replace("JavaScript", "Python");
console.log(challengePy);

//13. -----------------------------------------------------------------
console.log(challenge.charAt(15));

//14. -----------------------------------------------------------------
console.log(challenge.charCodeAt(11));
 
//15. -----------------------------------------------------------------
console.log(challenge.indexOf("a"));

//16. -----------------------------------------------------------------
console.log(challenge.lastIndexOf("a"));

//17. -----------------------------------------------------------------
findPorque = 'No puede terminar una oración con porque porque porque es una conjunción';
console.log(findPorque.indexOf("porque"));

//18. -----------------------------------------------------------------
console.log(findPorque.lastIndexOf("porque"));

//19. -----------------------------------------------------------------
console.log(findPorque.search('porque'));

//20. -----------------------------------------------------------------
challenge = ' 30 Days of JavaScript '
console.log(challenge.trim());

//21. -----------------------------------------------------------------
challenge = '30 Days Of JavaScript';
console.log(challenge.startsWith("30"));

//22. -----------------------------------------------------------------
console.log(challenge.endsWith("Script"));

//23. -----------------------------------------------------------------
let regEx = /a/gi
console.log(challenge.match(regEx));

//24. -----------------------------------------------------------------
let result = "30 días de ";
console.log(result.concat("JavaScript"));

//25. -----------------------------------------------------------------
console.log(challenge.repeat(2));