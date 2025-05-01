#Escreva um programa que leia um valor em metros e exiba convertido em centímetros e milimatros 

valorMetros = float(input('Digite um valor em metros  '))
valorCen = float(valorMetros*100)
valorMili = float(valorCen*10)

print(f'O valor em metros é {valorMetros} \n Valor em centímetros: {valorCen} \n Valor em milimetros {valorMili}')