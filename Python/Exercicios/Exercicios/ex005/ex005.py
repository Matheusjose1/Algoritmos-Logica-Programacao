#Faça um programa que leia um número inteiro e mostre na tela seu sucessor e antecessor

numero = int(input('Digite um numero '))
antecessor = int(numero - 1)
sucessor = int(numero + 1)

print('O sucessor do número é {} e o antecessor é {}'.format(sucessor,antecessor))