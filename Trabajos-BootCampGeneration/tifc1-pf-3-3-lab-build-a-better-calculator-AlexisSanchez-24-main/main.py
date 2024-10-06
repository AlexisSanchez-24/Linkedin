def main():
  print("Hello learners!")

lista_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Suma de numeros en una lista
def addmultiplenumbers(numbers):
  return sum(numbers)
 
print(addmultiplenumbers(lista_num))
 
# multiplicaciones de numeros en una lista
def multiplymultiplenumbers(lista_num):
  resultado = 1
 
  for numbers1 in lista_num:
    resultado *= numbers1
  return resultado
 
print(multiplymultiplenumbers(lista_num))
 
# definir un numero
 
def isiteven(num):
  return num % 2 == 0
 
print(isiteven(4))
print(isiteven(5))
 
# si un numero es entero
 
def isitaninteger(num):
  return num.is_integer()
 
print(isitaninteger(4.3))
print(isitaninteger(2.0))
print(isitaninteger(4.1)) 
  
if __name__=="__main__":
  main()