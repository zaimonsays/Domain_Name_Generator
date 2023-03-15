var pronoun = ['the','our', 'your', 'they', 'he', 'she', 'my'];
var adj = ['great', 'big', 'amazing', 'incredible', 'little', 'bigger', 'stronger' ];
var noun = ['jogger','racoon', 'wallet', 'house', 'ship', 'school', 'exited', 'happy', 'sadness'];

for(let i=0; i < pronoun.length; i++){
    for(let j=0; j < adj.length; j++){
        for (let k=0; k < noun.length; k++){
            console.log (`${pronoun[i]}${adj[j]}${noun[k]}.com`)
        }
    }
}