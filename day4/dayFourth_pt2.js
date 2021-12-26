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

const calculation = (lastOne, finalOrder) => {
  let sum = 0

  for (let i = 0; i < lastOne.length; i++) {
    for (let j = 0; j < lastOne[i].length; j++) {
      if (lastOne[i][j] != 'X')
        sum += parseInt(lastOne[i][j])
    }
  }
  return sum * finalOrder
}

const bingo = () => {
  let order = input[0].split(',')
  let boards = []
  let winnersClub = []
  let orderOfWinners = []

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
      top1:
      for (let j = 0; j < boards.length; j++) {
        for (let k = 0; k < boards[j].length; k++) {
          if (boards[j][k].every(el => el == 'X')) {
            winnersClub.push(boards[j])
            orderOfWinners.push(order[i])
            //boards = boards.filter(el => el != boards[j])
            break //top1
          }
        }
      }

      for (let j = 0; j < winnersClub.length; j++) {
        boards = boards.filter(el => el != winnersClub[j])
      }

      top2:
      for (let j = 0; j < boards.length; j++) {
        for (let k = 0; k < boards[j].length; k++) {
          let checkX = 0
          for (let l = 0; l < boards[j][k].length; l++) {
            if (boards[j][l][k] == 'X')
              checkX++
          }
          if (checkX == 5) {
            winnersClub.push(boards[j])
            orderOfWinners.push(order[i])
            //boards = boards.filter(el => el != boards[j])
            break //top2
          }
        }
      }
      
      for (let j = 0; j < winnersClub.length; j++) {
        boards = boards.filter(el => el != winnersClub[j])
      }

    }
    if (boards.length < 1)
      break

  }
  console.log(calculation(winnersClub[winnersClub.length - 1], 
    orderOfWinners[orderOfWinners.length - 1]))
}

bingo()