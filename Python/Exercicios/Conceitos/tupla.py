#Criando a tupla

lanche = ('Hamburguer', 'Suco', 'Pizza', 'Pudim', 'Batata Frita')

#Percorrendo ela

#Sem precisar de posicao
for comida in lanche:
      print(f'Eu vou comer {comida}')

#Acessando as posicoes
for cont in range(0,len(lanche)):
    print(f'Eu vou comer {lanche[cont]} na posição {cont}')

for pos,comida in enumerate(lanche):
    print(f'Eu vou comer {comida} na posição {pos}')
print('Comi muito')          

#Por a tupla em ordem 

print(sorted(lanche))

#juntar tuplas

a = (1,2,3,4,5)
b = (5,6,4,2)
c = a + b

print(c)

#Contar elementos

print(c.count(5))

#Mostrar o índice do elemento

print(c.index(6))

#Ele pega a primeira ocorrencia

print(c.index(5,1))

#Procura por 5 na posição 1 pelo deslocamento

#del() so deleta uma tupla inteira