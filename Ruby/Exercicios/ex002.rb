
puts 'Digite um número: '
num_1 = gets.chomp.strip
while true
    if num_1.match? /[^0-9.]/
        puts 'Entre com um numero valido'
        num_1 = gets.chomp.strip
    else
        break
    end
end

puts 'Digite outro número: '
num_2 = gets.chomp.strip
while true
    if num_2.match? /[^0-9.]/
        puts 'Entre com um numero valido'
        num_2 = gets.chomp.strip
    else
        break
    end
end

puts "A soma entre #{num_1} e #{num_2} é #{num_1.to_f+num_2.to_f}"