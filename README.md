# Desafio Backend de Tap

_Desafio backend de tap sobre api rest de nodejs con mongodb_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

🧰 Herramientas

* [Nodejs](https://nodejs.org/es/)  - Nodejs
* [Insomia](https://insomnia.rest/)  - Insomnia REST API CLIENT

### Instalación 🔧

_Install dependencies_

```
npm i
```

_una vez que termina las dependencias, ejecutar el comando_

```
npm start
```

_Desafio tap corriendo en port 3000_

```
DB conectada
```

_Consumir los siguientes endpoints:_

```
GET game/:id?: El parametro id es opcional. Si no es enviado se crea un nuevo juego, si es enviado busca el juego y si existe lo devuelve
POST game: Se envia un body json con un juego. Si el juego existe, este se actualiza, sino exite se informa el error. Se corroboran que los datos de state sean validos, es decir, que no se pueda enviar un numero y una descripcion erroneas. No se realizo el matcheo de 1-CREATED, 2-WON, 3-LOST.
```
## Test ⚙️

Se realizó un test unitario para la ruta GET.
Para correr el test se debe correr:
...
npm test
...

_Testing con_

```
npm supertest
npm mocha
```
## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Express](https://www.npmjs.com/package/express)  - Framework web backend
* [MongoDB](https://www.mongodb.com/) - Sistema de BD noSQL

#

---

⌨️ con ❤️ por [Francisco](https://github.com/FranP68) 🌠
