print "Entre com um número entre 0 e 100: "
num = gets.chomp.to_i

unless num>100 or num<0
  if num>66
    p 'Entre 67 e 100'
  elsif num>33
    p 'Entre 34 e 66'
  else
    p 'Entre 0 e 33'
  end
else
  p 'Número fora do intervalo desejado [0-100]'
end
