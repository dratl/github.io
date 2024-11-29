const prompt = require('prompt-sync')({ sigint: true });

class Field {
  constructor(field) {
    this.field = field;
    this.playerPosition = { x: 0, y: 0 };
  }

  print() {
    this.field.forEach(row => {
      console.log(row.join(''));
    });
  }

  move(direction) {
    const { x, y } = this.playerPosition;
    let newX = x;
    let newY = y;

    switch (direction) {
      case 'w':
        newY -= 1;
        break;
      case 's':
        newY += 1;
        break;
      case 'a':
        newX -= 1;
        break;
      case 'd':
        newX += 1;
        break;
      default:
        console.log('Invalid move');
        return true;
    }

    if (this.isOutOfBounds(newX, newY)) {
      console.log('You moved out of bounds!');
      return false;
    }

    const newTile = this.field[newY][newX];
    if (newTile === 'O') {
      console.log('You fell into a hole!');
      return false;
    } else if (newTile === '^') {
      console.log('You found your hat!');
      return false;
    }

    this.field[y][x] = '░';
    this.field[newY][newX] = '*';
    this.playerPosition = { x: newX, y: newY };
    return true;
  }

  isOutOfBounds(x, y) {
    return x < 0 || y < 0 || x >= this.field[0].length || y >= this.field.length;
  }

  static generateField(height, width, holePercentage) {
    const field = new Array(height).fill(0).map(() => new Array(width).fill('░'));
    const totalHoles = Math.floor(height * width * holePercentage);
    
    // Place the hat
    const hatPosition = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    field[hatPosition.y][hatPosition.x] = '^';

    // Place holes
    let holesPlaced = 0;
    while (holesPlaced < totalHoles) {
      const holePosition = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
      };
      if (field[holePosition.y][holePosition.x] === '░') {
        field[holePosition.y][holePosition.x] = 'O';
        holesPlaced++;
      }
    }

    // Ensure the starting position is clear
    field[0][0] = '*';

    return field;
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

// const myField = new Field(Field.generateField(8, 10, 0.4));
let playing = true;

while (playing) {
  myField.print();
  const direction = prompt('Which way? w (up), s (down), a (left), d (right): ');
  playing = myField.move(direction);
}
