class Calendar {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.date = new Date(year, month);
    this.matrix = this.makeMatrix();
  }

  makeMatrix() {
    // let year = this.date.getYear();
    // let month = this.date.getMonth();
    // let firstDate = new Date(year, month);
    let dayOfStart = this.date.getDay();
    let dateOfEnd = new Date(this.year, this.month + 1, 0).getDate();
    let flatCal = [];

    for (let i = 0; i < dayOfStart; i++) {
      flatCal.push(null);
    }

    for (let i = 1; i <= dateOfEnd; i++) {
      flatCal.push(i);
    }

    let matrixize = function(flatArray, numOfCols) {
      return flatArray.reduce((acc, el, index) => {
        if (index % numOfCols === 0) {
          acc.push([el]);
        } else {
          acc[acc.length - 1].push(el);
        }
        return acc;
      }, []);
    };

    return matrixize(flatCal, 7);
  }
}