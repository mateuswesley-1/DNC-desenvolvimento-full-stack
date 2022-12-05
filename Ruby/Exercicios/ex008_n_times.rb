
puts "Quantos anos você tem?"
idade = gets.chomp.strip.to_i

i = 1
5.times do
  idade += 10
  puts "#{i*10} anos se passaram, agora você tem #{idade} anos"
  i += 1
end
