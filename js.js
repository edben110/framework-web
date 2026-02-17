const prompt = require('prompt-sync')({ sigint: true });
let word = prompt('ingrese la palabra o frase a contar vocales: ')
let letters=['A','E','I','O','U']
let vocals = 0
for (let i = 0;i < word.length;i++){
    for(let j =0;j < letters.length;j++){
        if (word[i]==letters[j]||word[i]==letters[j].toLowerCase()){
            vocals++
        }
    }
}

console.log('la frase o palabra (',word, ') tiene ', vocals,' vocales')