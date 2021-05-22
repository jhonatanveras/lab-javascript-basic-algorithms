// Iteration 1: Names and Input
let hacker1 = `jhonatan`;
console.log(`The Driver´s name is ${hacker1}`);
let hacker2 = `victor`;
console.log(`The Navigator's name is ${hacker2}`);


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`);
}// se a quantidade de caracteres do primeiro nome for maior que o segundo

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}//se a quantidade de caracteres do segundo nome  for maior que a do primeiro 

else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}//se a quantidade de caracteres dos dois nomes for igual


// Iteration 3: Loops


let hacker1Incaps = '';

for (let index = 0; index < hacker1.length; index++) {
    hacker1Incaps += hacker1[index].toUpperCase() + ` `;
    if (index !== hacker1.length - 1) hacker1Incaps += ''
}

console.log(`capsLK Driver name: ${hacker1Incaps}`);

let hacker2Reversed = '';
for (let index = hacker2.length - 1; index >= 0; index--) {
    if (hacker2Reversed.length !== hacker2.length - 1) hacker2Reversed += hacker2[index];
    else hacker2Reversed += hacker2[index].toUpperCase();
}

console.log(`reversed Navigator name: ${hacker2Reversed}`);


// localecompare para verificar a ordem lexicografica dos nomes 

let locale = hacker1.localeCompare(hacker2);


if (locale == 1) {// se o resultado do localecompare for 1 = driver depois do navigator
    console.log(`Yo, the navigator goes first definitely.`);
}
else if (locale == 0) {// se o resultado do lecalecompare for 0 = mesmo nome
    console.log(`What?! You both have the same name?`);

}
else {// se o resultado for diferente de 0 e 1, ou seja, -1 o driver antes do navigator
    console.log(`The driver's name goes first`);

}

    // bonus 2
console.log(`...bonus 2...`);

let phraseToCheck = `amor,roma`;
let phraseToCheckReversed = ``;
for (let index = phraseToCheck.length - 1; index >= 0; index--) {
    if (phraseToCheckReversed.length !== phraseToCheck.length - 1) phraseToCheckReversed += phraseToCheck[index];
    else phraseToCheckReversed += phraseToCheck[index];
}

let bonus2 = phraseToCheck.localeCompare(phraseToCheckReversed);


if (bonus2 == 1|| bonus2 == -1) {// se o resultado do localecompare for 1 ou menos -1 não é palindromo
    console.log(`the text is not a Palindrome`);
}
else if (bonus2 == 0) {// se o resultado do lecalecompare for 0 é palindromo
    console.log(`the text is a Palindrome`);
    console.log(phraseToCheck)

}
//bonus 1

console.log(`...bonusb 1...`);

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, neque non finibus fringilla, eros eros varius odio, ut faucibus sapien enim ut neque. Nam ac pretium urna. Sed semper augue ipsum, sit amet efficitur diam aliquam id. Praesent sed tortor id ex malesuada dignissim id eget metus. Nunc eros est, semper eu tellus vulputate, pretium molestie felis. Nam et sem sit amet dolor ullamcorper eleifend. Nunc dictum venenatis lorem, ac semper augue dapibus in. Nulla risus mi, dignissim nec condimentum id, ultrices non nisi. Cras tempus rutrum libero. Fusce pulvinar odio id ullamcorper egestas. In a pulvinar velit, sed mollis ligula. Nam sollicitudin vestibulum condimentum.\nSed nunc sem, gravida eget libero non, blandit mattis urna. Maecenas volutpat sed felis sit amet finibus. Morbi pretium, magna eget porttitor efficitur, sem sem elementum nibh, id elementum massa ex eu erat. Etiam rutrum eget arcu non viverra. Fusce vehicula justo ac neque cursus, ac porta dolor posuere. Donec vitae mollis diam, id faucibus massa. Nam molestie lacus sed vestibulum convallis. Sed vehicula at tortor aliquet consectetur. Aliquam sit amet erat et nibh pellentesque luctus. In vestibulum, libero vel ultricies faucibus, dui nunc sagittis velit, vitae dignissim purus enim eu orci. Sed a magna vel nulla ornare gravida. Maecenas placerat lectus quis elementum condimentum. Donec vel pretium velit. Donec ut arcu id orci sollicitudin varius. Donec pellentesque metus scelerisque lectus aliquet, ac tristique nunc eleifend.\nCurabitur eleifend metus eu vestibulum ornare. Ut non gravida risus. Cras eu leo iaculis, dictum tortor ut, convallis quam. Sed molestie ac diam in aliquam. Phasellus a risus nec augue convallis pellentesque a a felis. Morbi vulputate dui at aliquam bibendum. Donec sollicitudin, arcu ut egestas vestibulum, leo nulla posuere nisi, aliquam vestibulum sapien risus ac dui. Pellentesque placerat, justo et hendrerit rhoncus, lectus lorem tincidunt mauris, sed fermentum odio libero at leo. Cras purus nulla, tristique at commodo in, porta ut lorem. Etiam sed posuere libero.`
let words = 1;
for (let bonus1 = 0; bonus1 < lorem.length; bonus1++ ) {
    if (lorem[bonus1] === ` `){
        words++;
    }
}
