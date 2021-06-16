# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Estructura de carpetas
Descripcion de la estructura del proyecto
```
    src
    |___ views Dentro se encuentran los componentes contenedores de las vistas principales de cada ruta.
    |___ components Dentro se encuentran componentes reutilizables o de menor tamaño como tarjetas, botones, logos, etc...
    |___ hooks Ubicacion para hooks customizados
    |___ models Aqui se encuentran los modelos e interfaces para typescript
    |___ services Aqui se encuentran los servicios que envian y reciben data. Principalmente HTTP Request.
    |___ shared Componentes compartidos por todas las pantallas de la app, como el Navbar, el Footer, el Sidebar... etc.
    |___ routes Aqui estan los componentes enrutadores
    |___ helpers Solo functions que se pueden usar en otros archivos.
    |___ auth Aqui estan los componentes relacionados a la autentificacion de usuario, pantalla de Login y Register
    |___ assets Todo lo relacionado a imagenes, fuentes, audio, scss, etc...
    |___ store Redux store, acciones, reducers, y un index con el setting del store de Redux. 
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
