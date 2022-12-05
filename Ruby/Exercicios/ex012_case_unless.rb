while true
  puts 'Escolha a dificuldade do jogos: [f/m/d]: '
  dificuldade = gets.chomp.strip.downcase[0]

  unless ['f','m','d'].include? dificuldade
    next
  else
    break
  end
end

# definindo a variável limite superior dependendo da dificuldade escolhida
limite_superior = case dificuldade

when 'f'
  10
when 'm'
  20
else
  30
end

# sorteando o numero, sorteia um numero inteiro entre 0 e limite_superior
num_sorteado = rand(limite_superior)

while true
  print "Tente advinhar o número sorteado entre 0 e #{limite_superior}: "
  num_user = gets.chomp.strip.to_i

  unless num_sorteado==num_user
    puts "Número errado! tente novamente"
    next
  else
    puts "Número sorteado: #{num_sorteado}"
    puts "Parabéns você acertou!\nSeu número: #{num_user}"
    break
  end
end

