#Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre a média

nota1 = int(input('Digite sua nota '))

nota2 = int(input('Digite a segunda nota '))

media = (nota1 + nota2)/2 
print('A media para as notas {} e {} é {} '.format(nota1, nota2, media))