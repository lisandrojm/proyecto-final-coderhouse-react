# <a href="https://pf-martinez.vercel.app/" target="_blank">Freelo ECOM</a>

<div>
  <h3>E-Commerce-React Js</h3>
  <p>
    Este proyecto fue creado en el curso de React Js de la carrera Full Stack en <a href="https://www.coderhouse.com/"target="_blank">Coderhouse</a>.
    <br />
    <br />
    <a href="https://pf-martinez.vercel.app/" target="_blank">Link al sitio</a>
  </p>
</div>

## Video Preview

# Tabla de contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Estructura del Proyecto.](#estructura-del-proyecto)
- [Tecnologías aplicadas](#tecnologías-aplicadas)
- [Instalación](#instalación)

## Acerca del Proyecto

- Se trata de un e-commerce de hardware desarrollado en React Js.
- Cuenta con una navegacion que permite al usuario ingresar, navegar por los productos e ir a sus detalles.
- Desde el detalle el usuario puede ver la descripción, la foto, el precio y puede ingresar el producto al
  carrito.
- Una vez que el carrito tiene al menos un producto, el usuario puede visualizar un listado de la orden y el precio total.
- Durante el Checkout, al ingresar su nombre, teléfono e e-mail se activa el botón de "realizar compra".
- Al clickear "realizar compra" se guarda en la base de datos (Firebase) una orden que tiene todos los productos, la fecha y se le da feedback al usuario del número de orden.

## Estructura del Proyecto.

### Inicio

- Al momento de ingresar a la app el usuario visualiza todos los productos disponibles para la compra.
- El usuario puede acceder a un menú desplegable en la navbar que contiene todas las categorías. Al clickear en una, accede a la lista de productos de la misma visualizando sólamente los productos de esa categoría.

### Flow

- Al clickear un ítem del listado, el usuario navega a la ruta /item/:id, donde
  id es el id del item (generado por **Firebase**), y puede ver la descripción del producto (
  foto, precio, selector de cantidad).

### Carrito de compras

- El carrito de compras es accesible durante toda la experiencia y tiene una indicación de la cantidad de items incluidos agregados.

### Checkout

- El checkout contiene una tabla de los items con sus cantidades, el detalle de cada artículo, el precio y el total de la orden.
- Finalizada la orden, el usuario recibe su **order id** con el **id** del objeto de **Firebase**.

### Backend

- El backend está realizado con **Firebase** y tiene dos colecciones: **items** y **orders**.
- Firebase/ **items**: Es el catálogo completo. Contiene el link para la foto, el precio unitario, la descripción y la categoría.
- Firebase/ **orders**: Las órdenes generadas incluyen los productos, las descripciones y los precios al momento de la compra. Las órdenes pueden tener items surtidos y en cada uno se especifica su cantidad.

## Tecnologías aplicadas

Para la construcción del proyecto se utilizaron las siguientes tecnologías:

- _[React.js](https://reactjs.org/):_ _Construcción de la interface de usuario._
- _[Create React App](https://create-react-app.dev/):_ _Estructura base del proyecto._
- _[React Router DOM](https://www.npmjs.com/package/react-router-dom):_ _Navegación de las diferentes secciones._
- _[React Bootstrap](https://react-bootstrap.github.io/):_ _Estilos._
- _[React Toastify](https://www.npmjs.com/package/react-toastify/):_ _Mensajes y alertas._
- _[Firebase](https://firebase.google.com/):_ _Base de datos._
- _[Vercel](https://vercel.com/):_ _Desplegar la aplicación._

## Instalación

### Pre-requisitos

Debes tener instalado el siguiente software en tu sistema operativo:

- Node
- npm

### Clonar repositorio

```bash
git clone https://github.com/lisandrojm/PFMartinez
```

### Instalar las dependencias

```bash
npm install
```

### Ejecutar la aplicación

```bash
npm start
```
