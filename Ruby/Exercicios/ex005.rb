filmes = Hash.new

puts "Quantos filmes voce quer inserir na lista?"
num_filmes = gets.chomp.strip.to_i

# to_i transforma algo que nao e numero em 0
if (num_filmes == 0)
    puts 'Valor invalido. Digite um valor valido ou 0 para sair do programa.'
    num_filmes = gets.chomp.stri.to_i
end

for i in 1..num_filmes
  puts 'Nome do filme:'
  filme = gets.chomp.strip.to_sym

  puts 'Ano de lancamento:'
  ano = gets.chomp.strip

  filmes[filme] = ano
end

puts filmes
puts filmes.values
