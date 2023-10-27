// This is a JavaScript program to generate 3 x 3 magic sqaure with a list of 1 to 9 numbers

/* A magic square is a n x n grid where all rows, all columns and 
each diagonal add up to the same number. Here let take n = 3 and perform the magic square
*/

  /** This is a function to generate the random array from number list
 * @param {Array} nums a 2-d array which represents the magic square
 */



  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  function GeneraterandomMatrix()
  {
     function Arr(nums) //nested function declared
       {
          for (let i = 8; i > 0; i--) 
             {
                  let j = Math.floor(Math.random() * (i + 1)); 
                  [nums[i],nums[j]] = [nums[j], nums[i]];      // swaping of the index i with j
             }
       }
  
  
  
      Arr(nums) //arr function (nested function) called 
  
      let matrix = []
      for (let i = 0; i < 3; i++) 
      {
        matrix[i] = []
        for (let j = 0; j < 3; j++) 
        {
         matrix[i][j] = nums[i * 3 + j]
        }
      }
  return matrix
  }
  
  
    /** This is a helper function to print the grid.
   * @param {Array} grid  checks the magic square
   */
    
  
  function printMagicSquare(grid) 
  {
    console.log("-------------")
    for (let i = 0; i < grid.length; i++) 
     {
       let row = grid[i]
      let rowString = ""
      for (let j = 0; j < row.length; j++) 
          {
        rowString += ("| " + row[j]	+ " ")
      }
      console.log(rowString + "|")
      if (i == (grid.length-1)) 
          {
        console.log("-------------")
      } 
          else 
          {
        console.log("-------------")
      }
    }
  }
  
  function check()
  {
    //To check the sum of rows,columns and diagonals of the grid 
    while(true)
      {
      let A= GeneraterandomMatrix()
      let row1=A[0][0] + A[0][1] + A[0][2]
      let row2=A[1][0] + A[1][1] + A[1][2]
      let row3=A[2][0] + A[2][1] + A[2][2]
      let col1=A[0][0] + A[1][0] + A[2][0]
      let col2=A[0][1] + A[1][1] + A[2][1]
      let col3=A[0][2] + A[1][2] + A[2][2] 
      let dia1=A[0][0] + A[1][1] + A[2][2]
      let dia2=A[0][2] + A[1][1] + A[2][0]
      if(col1==col2 && col2==col3 && row1==row2 && row2==row3 && dia1==dia2)
          {
            return A
            break
          }                      
     }
  }
  console.log("the magic box with n = 3 :")
  printMagicSquare(check())  // Magic Box is printed 
  