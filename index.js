// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      let message = `Thank you, ${name}, for the wonderful ${event} gift!`
      messages = [...messages, message];
    }
  
    return messages;
}

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}