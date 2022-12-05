

# gera uma lista das dezenas entre 30 e 100
lista_limites = (30..100).step(10).to_a

# sorteia um dos limites da lista
velocidade_limite = lista_limites[rand(lista_limites.length)]

# menor velocidade possível: 30, maior velocidade:150
velocidade = 30 + rand(150)

# verifica se o veiculo respeitou o limite de velocidade e calcula a multa caso não tenha respeitado
if velocidade > velocidade_limite
  excesso = velocidade-velocidade_limite
  puts "Sua velocidade: #{velocidade} km/h\nLimite: #{velocidade_limite} km/h"
  puts "Você ultrapassou o limite em #{excesso} km/h, gerando uma multa de R$#{(excesso*8.67).round(2)} "
else
  puts "Sua velocidade: #{velocidade} km/h\nLimite: #{velocidade_limite} km/h"
  puts 'Limite respeitado. Nenhuma multa foi aplicada'
end
