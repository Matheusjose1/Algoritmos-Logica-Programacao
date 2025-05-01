#Faca um algoritmo que leia o preço de um produto e mostre seu novo preco com 5% de desconto

preco = float(input('Digite um preco\n'))

novoPreco = preco - (preco*0.05)

print(f'O preço do produto era {preco} e o desconto de 5% é {novoPreco}')