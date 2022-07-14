
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/
const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];


const diagonalDifference = sqrMatrix => {
    let sumLeft = 0, sumRight = 0;
    for (let i = 0; i < sqrMatrix.length; i++) {
        sumLeft += sqrMatrix[i][i];
    }
    for (let i = 0, j = sqrMatrix.length - 1; i < sqrMatrix.length; i++, j--) {
        sumRight += sqrMatrix[i][j];
    }
    return Math.abs(sumLeft - sumRight)
}


console.log(diagonalDifference(squareMatrix1))