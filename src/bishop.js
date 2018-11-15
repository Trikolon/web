class DrunkenBishop {
  constructor(X = 17, Y = 9) {
    this.LIMIT = { X, Y };
    this.map = null;
    this.minValue = null;
    this.maxValue = null;

    this.symbols = [
      'S', 'E', ' ', '.', 'o', '+',
      '=', '*', 'B', 'O',
      'X', '@', '%', '&',
      '#', '/', '^',
    ];
  }

  get mapSize() {
    return this.LIMIT;
  }

  get mapArray() {
    return this.map;
  }

  get mapString() {
    let result = '';
    if (this.map == null) {
      return result;
    }
    for (let i = 0; i < this.LIMIT.X * this.LIMIT.Y; i += 1) {
      if (i !== 0 && i % this.LIMIT.X === 0) result += '\n';
      result += this.symbols[this.map[i]] || this.symbols[this.symbols.length - 1];
    }
    return result;
  }

  walk(hexStr) {
    if (typeof hexStr !== 'string') {
      throw new Error('Expected str to be a string');
    }

    // Initialize variables to track value bounds
    this.minValue = 0;
    this.maxValue = this.minValue;

    // Convert hex string to binary string
    const str = DrunkenBishop.hexToBinary(hexStr);

    this.map = new Array(this.LIMIT.X * this.LIMIT.Y).fill(2);


    // Set initial position to middle of map
    const startPos = Math.round(((this.LIMIT.X * this.LIMIT.Y) - 1) / 2);
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

      // update max value
      if (this.map[pos] > this.maxValue) this.maxValue = this.map[pos];
    }

    // Set start and end pos (doing this at the end so it's not overwritten)
    this.map[startPos] = 0;
    this.map[pos] = 1;
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

export { DrunkenBishop };

export default (str, x, y) => {
  const bishop = new DrunkenBishop(x, y);
  bishop.walk(str);
  return bishop.mapString;
};
