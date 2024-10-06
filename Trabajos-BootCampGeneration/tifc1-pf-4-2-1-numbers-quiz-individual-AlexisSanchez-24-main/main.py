import json 
import requests 

def trivia_fetch(numero):
  respuesta = requests.get(f"http://numbersapi.com/{numero}?json")
  return json.loads(respuesta.content)

def main():
 #numero = 1000 
 numero = int(input("Ingrese un numero: "))
 print(trivia_fetch(numero).get("text"))

if __name__=="__main__":
  main()
  


