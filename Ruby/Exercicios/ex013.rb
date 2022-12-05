


lista_limites = (30..100).step(10).to_a
velocidade_limite = lista_limites[rand(lista_limites.length)]
velocidade = 30 + rand(150)

if velocidade > velocidade_limite
  excesso = velocidade-velocidade_limite
  puts "Sua velocidade: #{velocidade} km/h\nLimite: #{velocidade_limite} km/h"
  puts "Você ultrapassou o limite em #{excesso} km/h, gerando uma multa de R$#{(excesso*8.67).round(2)} "
else
  puts "Sua velocidade: #{velocidade} km/h\nLimite: #{velocidade_limite} km/h"
  puts 'Limite respeitado. Nenhuma multa foi aplicada'
end
