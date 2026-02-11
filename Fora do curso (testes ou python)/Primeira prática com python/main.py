teste = 'teste'

print(teste)

list = [1, 2, 3 , 4, 5]
object = {
    'name': 'John Helldiver',
    'age': 30,
    'city': 'Super City'
}

def soma(firstNumber, secondNumber):
    return firstNumber + secondNumber

print(soma(1, 2))
print(object['name'])

while True: 
    
    option = int(input('Digite 1 para somar, 2 para sair: '))

    if option == 1:
        firstNumber = int(input('Digite o primeiro número: '))
        secondNumber = int(input('Digite o segundo número: '))

        print(soma(firstNumber, secondNumber))
    elif option == 2: 
        print('Saindo...')
        break