# Use the modulo operator, division, or a combination of both to take a 4 digit number and find the digit in the: 1) thousands place 2) hundreds place 3) tens place 4) ones place

while true
  puts 'Digite um numero de 4 digitos'
  num = gets.chomp.strip.to_i
  if (num.to_s.length != 4) || (num.to_s.match? /[^0-9]/)
    puts 'Digite com um numero de 4 digitos'
    num = gets.chomp.strip
  else
    break
  end
end

puts "Milhares: #{num/1000} \nCentenas: #{num%1000/100}\nDezenas: #{num%100/10} \nUnidades: #{num%10}"
