const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getMatrix(arr, n, m){
  let matrix=[]
  for(let i=0, k = 0; i<n; i++){
    matrix[i]=[];
    for(let j=0; j<m; j++){
      matrix[i][j]=arr[k++];
    }
  }
  return matrix;
}

function minesweeper(matrix){
  let count=0, arr=[];
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      count=0;
      if(j===0 && i===0){ //Верхний крайний слева
        if(matrix[i+1][j]) count++;
        if(matrix[i][j+1]) count++;
        if(matrix[i+1][j+1]) count++;
      }
      else if(j===matrix[i].length-1 && i===0){ //Верхний крайний справа
        if(matrix[i+1][j]) count++;
        if(matrix[i][j-1]) count++;  
        if(matrix[i+1][j-1]) count++;
      }
      else if(i===0){ //Верхнй центральный
        if(matrix[i+1][j]) count++;
        if(matrix[i][j-1]) count++;   
        if(matrix[i][j+1]) count++;
      }
      else if(j===0 && i===matrix.length-1){ //Нижний крайний левый
        if(matrix[i-1][j]) count++;
        if(matrix[i][j+1]) count++;
        if(matrix[i-1][j+1]) count++;
      }
      else if(j===matrix[i].length-1 && i===matrix.length-1){ //Нижний крайний правый
        if(matrix[i-1][j]) count++;
        if(matrix[i][j-1]) count++;  
        if(matrix[i-1][j-1]) count++;
      }
      else if(i===matrix.length-1){ //Нижний центральный
        if(matrix[i-1][j]) count++;
        if(matrix[i][j-1]) count++;   
        if(matrix[i][j+1]) count++;
      }
      else if(j===0){ //Левый центральный
        if(matrix[i-1][j]) count++;
        if(matrix[i][j+1]) count++;   
        if(matrix[i+1][j]) count++;
        if(matrix[i-1][j+1]) count++;
        if(matrix[i+1][j+1]) count++;
      }
      else if(j===matrix[i].length-1){ //Правый центральный
        if(matrix[i-1][j-1]) count++;
        if(matrix[i-1][j]) count++;   
        if(matrix[i][j-1]) count++;
        if(matrix[i+1][j-1]) count++;
        if(matrix[i+1][j]) count++;
        
      }
      else{
        if(matrix[i-1][j-1]) count++;
        if(matrix[i-1][j]) count++;
        if(matrix[i-1][j+1]) count++;
        if(matrix[i][j-1]) count++;
        if(matrix[i][j+1]) count++;
        if(matrix[i+1][j-1]) count++;
        if(matrix[i+1][j]) count++;
        if(matrix[i+1][j+1]) count++;
      }
      arr.push(count);
    }
  }
  return getMatrix(arr, matrix.length, matrix[0].length);
}

module.exports = {
  minesweeper
};
