
puts 'digite um numero'
n = gets.chomp.strip.to_i

num = 1
for i in 1..n
  num *= i
end

puts "Fatorial de #{n}: #{num}"
