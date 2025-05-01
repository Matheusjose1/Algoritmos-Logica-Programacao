#Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre a média

def adicionar_nota(nota):
    nota = int(input('Digite sua nota'))
    notas.append(nota)
    return

def ver_notas(notas):
    for nota in  notas:
        print('Nota: ',nota, '\n')
        
        
def calcular_media(nota):
    tamanho_lista = len(notas)
    totalNotas = sum(notas)
    media = int(totalNotas/tamanho_lista)
    remover_notas()
    print('Média', media)   

def remover_notas():
    for nota in notas:
        notas.remove(nota)         

notas = []

while True:
    print(notas)
    
    print('1. Adicionar nota ')
    print('2. Ver notas')
    print('3. Calcular media')
    print('4. Sair')
    
    escolha = input("Escolha uma opcao \n")
    if (escolha == "4"):
        break
    elif(escolha == "1"):
        adicionar_nota(notas)
    elif(escolha == "2"):
        print('\n Lista de notas \n')
        ver_notas(notas)
    elif(escolha =="3"):
         calcular_media(notas) 
         
         
  