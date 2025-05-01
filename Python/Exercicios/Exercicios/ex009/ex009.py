#Faça um programa que leia um número inteiro qualquer e mostre na tela a tabuada

numero = int(input('Digite um numero \n'))

resultado = 0
multiplicador = 0
while multiplicador< 10:
    multiplicador += 1 
    resultado = numero * multiplicador
    print( numero, ' x ', multiplicador, ' = ', resultado)