movies = { jaws: 1975,
  anchorman: 2004,
  man_of_steel: 2013,
  a_beautiful_mind: 2001,
  the_evil_dead: 1981 }

movies_array = movies.to_a

for i in 0...movies_array.length
  puts movies_array[i][1]
end
