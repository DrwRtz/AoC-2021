const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8')
input = input.split('\r\n')

const depthCounter = () => {
  let counter = 0
  let previousWindow = parseInt(input[0]) + parseInt(input[1]) + parseInt(input[2])
  let currentWindow = 0
  console.log(input)

  for (let i = 1; i < input.length; i++) {
    // less than 3 instead of two for a reason i didnt get but it works anyways
    if ((input.length - i) < 3)
      break

    for (let j = 0; j < 3; j++) {
      currentWindow += parseInt(input[i + j])
    }

    console.log(currentWindow)

    if (currentWindow > previousWindow)
      counter++
    
    // This unnecessary logic produced an infinite loop, i didnt get the reason
    /*if (i % 5 == 0)
      i -= 2
    */
    previousWindow = currentWindow
    currentWindow = 0
  }
  return counter
}

console.log(depthCounter())