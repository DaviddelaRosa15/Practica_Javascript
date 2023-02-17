//1. ------------------------------------------------------------------
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

//2. ------------------------------------------------------------------
console.log("\n\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

//3. ------------------------------------------------------------------
console.log(typeof '10' == typeof 10);
console.log(typeof 10 == typeof 10);

//4. ------------------------------------------------------------------
num = parseFloat('9.8');
console.log(num == 10);
num = Math.ceil(num);
console.log(num == 10);

//5. ------------------------------------------------------------------
py = 'python';
jar = 'jargon';
if (py.includes('on') && jar.includes('on')){
    console.log("Se encuentra en ambos");
}

//6. ------------------------------------------------------------------
sent = 'I hope this course is not full of jargon';
sent.includes('jargon') ? console.log("\"jargon\" se encuentra en la oración") : console.log("\"jargon\" no se encuentra en la oración");

//7. ------------------------------------------------------------------
aleatorio = Math.floor(Math.random() * 101);

//8. ------------------------------------------------------------------
aleatorio = Math.floor((Math.random() * (100-50+1))+ 50);

//9. ------------------------------------------------------------------
aleatorio = Math.floor(Math.random() * 256);

//10. -----------------------------------------------------------------
js = 'JavaScript';
aleatorio = Math.floor(Math.random() * 10);
console.log(js.charAt(aleatorio));

//11. -----------------------------------------------------------------
const paragraph = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(paragraph);

//12. -----------------------------------------------------------------
sentence = 'No puede terminar una oración con porque porque porque es una conjunción';
sep = sentence.substring(sentence.search('porque porque porque'), sentence.lastIndexOf('porque')+6);
console.log(sep);