/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (hash = '#'; hash.length<8 ; hash += '#')
  console.log(hash + '\n');