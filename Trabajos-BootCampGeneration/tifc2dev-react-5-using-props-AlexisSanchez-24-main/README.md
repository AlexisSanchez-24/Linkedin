# TIFC2DEV-REACT-5---Using-Props-

Inicio de la actividad

●	Abra el proyecto my-weather-application.

●	Examine el fragmento de código de ejemplo proporcionado.

## App.js
```
import logo from './logo.svg';
import './App.css';


function WeatherForecast() {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <div className="city">
        <h2>New York</h2>
        <p>Temperature: 75°F</p>
        <p>Condition: Sunny</p>
      </div>
      <div className="city">
        <h2>Los Angeles</h2>
        <p>Temperature: 80°F</p>
        <p>Condition: Partly Cloudy</p>
      </div>
    </div>
  );
};

export default WeatherForecast;
```
El componente WeatherForecast contiene una apariencia muy similar para dos perfiles de ciudades y hay código que se duplica. Extraiga un componente de él para reducir la duplicación. Deberá elegir qué propiedades pasarle.

### Tarea 1 : Se le asignará el ejercicio de codificación. Abra el símbolo del sistema y navegue hasta la carpeta cd <nombre de carpeta >.

### Tarea 2: Instale las dependencias necesarias ejecutando el siguiente comando:
npm install
### Tarea 3 : Inicie el servidor de desarrollo de React ejecutando:
npm start
La aplicación se abrirá automáticamente en su navegador web predeterminado.
### Tarea 4 : Abra otro símbolo del sistema y navegue hasta la carpeta descargada.
Escriba code . para cargar todos los archivos en VS Code.
### Tarea 5 : Seleccionar quién actuará como líder y quién como observador. El líder escribirá y compartirá su pantalla con el código.
### Tarea 6 : Extrae un componente del ejercicio para reducir la duplicación. Deberás elegir qué propiedades pasarle.

### Tarea 7 (opcional) : si completa su trabajo antes del límite, puede intentar realizar el ejercicio opcional de PostCard.
Extrae un componente de la estructura propuesta y usa la propiedad children para pasarle diferentes JSX.

Siga las mismas pautas para instalar las dependencias necesarias e iniciar el servidor de desarrollo como en el ejercicio anterior.

Actividad opcional
Actividad

●	Abra el proyecto my-postcard-optional.

●	Examine el fragmento de código de ejemplo proporcionado.


## App.js

```
import logo from './logo.svg';
import './App.css';

export default function Profile() {
  return (
    <div>
      <div className="post-card">
        <div className="post-content">
        <p>This is the content of the post...</p>
          <u>
            <li>Item 1</li>
            <li>Item 2</li>
          </u>
        </div>
      </div>
      <div className="post-card">
        <div className="post-content">
         
          <span>Posted on: January 1, 2023</span>
        </div>
      </div>
    </div>
  );
}
```
