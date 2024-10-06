print("calculadora de dos numeros")
n1 = input("ingrese primer numero :")
n2 = input("ingrese segundo numero :")

res = int(n1) + int(n2)
print(f"el resultado de la suma es : {res}")
res = int(n1) - int(n2)
print(f"el resultado de la resta es : {res}")
res = int(n1) * int(n2)
print(f"el resultado de la multiplicacion es : {res}")
res = int(n1) / int(n2)
print(f"el resultado de la multiplicacion es : {res}")

 
def suma(n1,n2):
    return n1+n2
resultado = suma(int(n1), int(n2))
print(f"Resultado suma: {resultado}")

def resta(n1, n2):
    return n1-n2
resultado = resta(int(n1), int(n2))
print(f"Resultado resta: {resultado}")

def multiplicacion(n1, n2):
    return n1*n2
resultado = multiplicacion(int(n1), int(n2))
print(f"Resultado multiplicacion: {resultado}")

def division(n1, n2):
    return n1/n2
resultado = division(int(n1), int(n2))
print(f"Resultado divicion: {resultado}")

def calculadora(n1, n2):
    suma = n1+n2
    resta = n1-n2
    multiplicacion = n1*n2
    division = n1/n2
    return suma, resta, multiplicacion, division
resultado = calculadora(int(n1), int(n2))
print(f"Resultado suma: {resultado[0]}")
print(f"Resultado resta: {resultado[1]}")
print(f"Resultado multiplicacion: {resultado[2]}")
print(f"Resultado division: {resultado[3]}")