const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8')
input = input.split('\r\n')

const dive = () => {
  let hpos = 0, depth = 0

  for (el of input) {
    let temp = el.split(' ')

    if (temp[0] == 'forward')
      hpos += parseInt(temp[1])
    else {
      if (temp[0] == 'down')
        depth += parseInt(temp[1])
      else 
        depth -= temp[1]
    }
  }

  return hpos * depth
}

console.log(dive())