const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8')
input = input.split('\r\n')

const binaryReport = () => {
  let gamma = "", epsilon = ""
  let ones = 0, zeroes = 0
  let answer

  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] == '1')
        ones++
      else
        zeroes++
    }
    if (ones > zeroes)
      gamma += '1'
    else 
      gamma += '0'

    ones = 0
    zeroes = 0
  }
  
  for (let i = 0; i < gamma.length; i++) {
    if (gamma[i] == '1')
      epsilon += '0'
    else 
      epsilon += '1'
  }

  answer = parseInt(gamma, 2) * parseInt(epsilon, 2)
  console.log(answer)
}

binaryReport()