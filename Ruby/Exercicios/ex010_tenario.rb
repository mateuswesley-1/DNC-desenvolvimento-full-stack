

def caps_ten
  print "Escreva uma string: "
  string = gets.chomp

  string.length>10? string.upcase : string
end
