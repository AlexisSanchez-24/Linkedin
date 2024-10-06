import requests
import json

def send_cheep(mensaje):

    url = "https://3bda700d-ebe7-421a-bbc1-20cb9289f0cc-00-c4yvkdzp1nlg.janeway.replit.dev/send_cheep"
    data = {
        "message": mensaje
    }

    try:
        response = requests.post(url, json=data)
    
        response.raise_for_status()
        
        return response.json()

    except requests.RequestException as e:
        
        print(f"Error al enviar el cheep: {e}")
        return {}
    

def get_cheeps():

    url = "https://3bda700d-ebe7-421a-bbc1-20cb9289f0cc-00-c4yvkdzp1nlg.janeway.replit.dev/get_cheeps"
    
    try:
        response = requests.get(url)
        
        response.raise_for_status()
        
        return response.json()
    
    except requests.RequestException as e:
        
        print(f"Error al obtener los cheeps: {e}")
        return {}

def print_cheeps(cheeps):

    formatted_cheeps = json.dumps(cheeps, indent=4)
    print("Lista de Cheeps:")
    print(formatted_cheeps)


if __name__ == "__main__":
    
    mensaje = input("Escriba su mensaje: ")
    send_cheep(mensaje)
    
    cheeps = get_cheeps()
    print_cheeps(cheeps)
    
    
    