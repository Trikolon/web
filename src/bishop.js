class DrunkenBishop {
  constructor(X = 17, Y = 9) {
    if (X % 2 !== 1 || Y % 2 !== 1) {
      throw new Error('Invalid map bounds, must be odd numbers');
    }
    this.LIMIT = { X, Y };

    this.symbols = [
      'S', 'E', ' ', '.', 'o', '+',
      '=', '*', 'B', 'O',
      'X', '@', '%', '&',
      '#', '/', '^',
    ];
  }

  walk(hexStr) {
    if (typeof hexStr !== 'string') {
      throw new Error('Expected str to be a string');
    }

    // Convert hex string to binary string
    const str = DrunkenBishop.hexToBinary(hexStr);

    this.map = new Array(this.LIMIT.X * this.LIMIT.Y).fill(2);


    // Set initial position to middle of map
    const startPos = ((this.LIMIT.X * this.LIMIT.Y) - 1) / 2;
    let pos = startPos;

    // Iterate binary string
    for (let i = 0; i < str.length - 1; i += 2) {
      // Get next two digits which form instruction
      const instruction = str[i] + str[i + 1];

      // Variable for position incrementation
      let upd = pos;

      // Get next position
      pos = this.nextPos(pos, instruction);

      // Only increment if position has changed
      upd = pos === upd ? 0 : 1;
      this.map[pos] += upd;
    }

    // Set start and end pos (doing this at the end so it's not overwritten)
    this.map[startPos] = 0;
    this.map[pos] = 1;
  }

  getMapString() {
    let result = '';
    for (let i = 0; i < this.LIMIT.X * this.LIMIT.Y; i += 1) {
      if (i !== 0 && i % this.LIMIT.X === 0) result += '\n';
      result += this.symbols[this.map[i]];
    }
    return result;
  }

  static hexToBinary(str) {
    if (typeof str !== 'string') throw new Error('str must be a String');

    let result = '';
    // TODO: Check if its a hex string, regex? performance impact?
    for (let i = 0; i < str.length - 1; i += 2) {
      const no = str[i] + str[i + 1];
      const noBin = Number.parseInt(no, 16).toString(2);
      result += noBin;
    }
    return result;
  }

  nextPos(pos, instruction) {
    let x = pos % this.LIMIT.X;
    let y = Math.floor(pos / this.LIMIT.X);

    // Calculate new position coordinates
    switch (instruction) {
      // NW
      case '00':
        x -= 1;
        y -= 1;
        break;
      // NE
      case '01':
        x += 1;
        y -= 1;
        break;
      // SW
      case '10':
        x -= 1;
        y += 1;
        break;
      // SE
      case '11':
        x += 1;
        y += 1;
        break;
      default:
        throw new Error(`Invalid instruction ${instruction}`);
    }
    // Limit to boundaries
    if (x < 0) {
      x = 0;
    } else if (x >= this.LIMIT.X) {
      x = this.LIMIT.X - 1;
    }

    if (y < 0) {
      y = 0;
    } else if (y >= this.LIMIT.Y) {
      y = this.LIMIT.Y - 1;
    }

    // Convert position coordinates to position in 1d array and return
    return (y * this.LIMIT.X) + x;
  }
}

export default (str) => {
  const bishop = new DrunkenBishop();
  bishop.walk(str);
  return bishop.getMapString();
};
