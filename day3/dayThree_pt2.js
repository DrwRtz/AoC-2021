const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8')
input = input.split('\r\n')

const getO2 = (oxygen) => {
  for (let i = 0; i < input[0].length; i++) {
    let ones = 0, zeroes = 0

    for (let j = 0; j < oxygen.length; j++) {
      if (oxygen[j][i] == '1')
        ones++
      else 
        zeroes++
    }

    if (zeroes > ones) 
      oxygen = oxygen.filter(el => el[i] === '0')
    else 
      oxygen = oxygen.filter(el => el[i] === '1')
    
    if (oxygen.length === 1) {
      oxygen = oxygen[0]
      return parseInt(oxygen, 2)
    }
  }
}

const getCarbonO2 = (c02) => {
  for (let i = 0; i < input[0].length; i++) {
    let ones = 0, zeroes = 0

    for (let j = 0; j < c02.length; j++) {
      if (c02[j][i] == '1')
        ones++
      else 
        zeroes++
    }

    if (zeroes > ones) 
      c02 = c02.filter(el => el[i] !== '0')
    else 
      c02 = c02.filter(el => el[i] !== '1')
    
    if (c02.length === 1) {
      c02 = c02[0]
      return parseInt(c02, 2)
    }
  }
}

const lifeSupport = () => {
  let oxygen = input.slice()
  let c02 = input.slice()

  const answer = getO2(oxygen) * getCarbonO2(c02)
  
  console.log(answer)
}

lifeSupport()