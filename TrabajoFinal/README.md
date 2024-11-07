# E-Commerce Project

## Descripción

Este es un proyecto de comercio electrónico desarrollado con React y Firebase. Los usuarios pueden navegar por productos, agregar productos al carrito, gestionar cantidades, y realizar compras. El carrito se almacena en el contexto de React y las compras se gestionan utilizando Firebase Firestore.

## Funcionalidades

- **Navegar por productos**: Los usuarios pueden ver una lista de productos disponibles.
- **Agregar productos al carrito**: Los productos pueden ser agregados al carrito, con la opción de cambiar la cantidad.
- **Eliminar productos del carrito**: Los productos pueden ser eliminados del carrito.
- **Gestionar cantidades**: Los usuarios pueden incrementar o disminuir la cantidad de un producto en su carrito.
- **Finalizar compra**: Los usuarios pueden realizar la compra, la cual se guarda en Firebase Firestore.
- **Persistencia en Firebase**: El stock de productos se actualiza en Firestore cada vez que se realiza una compra.

## Tecnologías Usadas

- **React**: Librería para la construcción de la interfaz de usuario.
- **Firebase**: Para la base de datos (Firestore), y el almacenamiento en la nube.
- **React Router**: Para la navegación entre componentes.
- **Context API**: Para manejar el estado global del carrito.
- **CSS Modules**: Para la organización de los estilos.
- **JavaScript**: Para la lógica del proyecto.
