/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

result = ''
for (hash = 1; hash <= 8; hash ++){
  if (hash % 2 != 0){
    result += ' # # # # \n';
  }else{
    result += '# # # # \n';
  }
}
console.log(result);