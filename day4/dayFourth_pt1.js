const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8')
input = input.split('\r\n')

const getBoards = (boards) => {
  let temp = []

  for (let i = 2; i < input.length; i++) {
    if (input[i] != '')
      temp.push(input[i].trim().replace(/\s+/g, ' ').split(' '))
    else {
      boards.push(temp)
      temp = []
    }

    if (i == input.length - 1)
      boards.push(temp)
  }

  return boards
}

const sumOfUnmarked = (boards, j) => {
  let sum = 0

  for (let k = 0; k < boards[j].length; k++) {
    for (let l = 0; l < boards[j][k].length; l++) {
      if (boards[j][k][l] != 'X')
        sum += parseInt(boards[j][k][l])
    }
  }

  return sum
}

const bingo = () => {
  let order = input[0].split(',')
  let boards = []

  boards = getBoards(boards)

  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < boards.length; j++) {
      for (let k = 0; k < boards[j].length; k++) {
        for (let l = 0; l < boards[j][k].length; l++) {
          if (boards[j][k][l] == order[i])
            boards[j][k][l] = 'X'
        }
      }
    }

    if (i > 3) {
      for (let j = 0; j < boards.length; j++) {
        for (let k = 0; k < boards[j].length; k++) {
          if (boards[j][k].every(el => el == 'X'))
            return sumOfUnmarked(boards, j) * order[i]
        }
      }

      for (let j = 0; j < boards.length; j++) {
        for (let k = 0; k < boards[j].length; k++) {
          let checkX = 0
          for (let l = 0; l < boards[j][k].length; l++) {
            if (boards[j][l][k] == 'X')
              checkX++
          }
          if (checkX == 5)
            return sumOfUnmarked(boards, j) * order[i]
        }
      }
    }
  }
}

console.log(bingo())