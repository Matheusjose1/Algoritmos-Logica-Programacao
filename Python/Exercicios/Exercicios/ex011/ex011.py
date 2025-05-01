#Faça um programa que leia a largura e a altura de uma parede em metros, calcule sua área e quantidade de tinta necessária para pinta-la, 'cada litro pinta 2m

#verificar se o cálculo tá certo dps
largura = int(input('Digite a largura  '))

altura = int(input('Digite a altura '))

area = largura * altura


print(area)
 
 #              100m
 #1 litro = 2m
qtdTinta = area / 2

print(qtdTinta)

