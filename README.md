# Reto técnico

## Nombre: Niels Uchpa

## Tabla de contenidos

- [Características funcionales](#Características-funcionales)
- [Características técnicas](#Características-técnicas)
- [Configuración](#Configuración)
- [Scripts](#Scripts)

## Caracteristicas funcionales

- Consulta tres API's de StarWars y combina la información de éstas con información ingresada a una base de datos MySQL
  - People: https://swapi.py4e.com/api/people
  - Planets: https://swapi.py4e.com/api/planets
  - Species: https://swapi.py4e.com/api/species

- Despliegue en AWS
  - https://wars.nielsus.link/api#/Species
  - https://wars.nielsus.link/api#/Peoples
  - https://wars.nielsus.link/api#/planets  -

## Características técnicas

- Usa ES6/ES7 a través de Typescript
- Utiliza el framework Serverless
- Formatea el código usando Prettier y ESLint
- Usa buenas prácticas usando ESLint
- Utiliza AWS CLI para conectarse a AWS
- Utiliza el framework Jest para ejecutar pruebas unitarias y de integración
- Utiliza AWS-SDK para conectarse a MySQL

## Configuración

La configuración está en el archivo no versionado serverless.yaml.

## Scripts

Todos los scripts deben ser ejecutados desde la carpeta raíz

### `clean`

Borra y elimina los directorios generados: cache, dist y reports

```
npm run clean
```

### `lint:code`

Valida las reglas de ESLint desde la carpeta src y muestra los resultados en consola

```
npm run lint:code
```

### `lint:test`

Valida las reglas de ESLint del código de las pruebas unitarias y de integración desde la carpeta test y muestra los resultados en consola

```
npm run lint:test
```

### `lint:report`

Valida las reglas de ESLint desde la carpeta src y muestra los resultados en html

```
npm run lint:report
```

### `test`

Ejecuta las pruebas unitarias y de integración

```
npm run test
```

### `test:unit`

Ejecuta las pruebas unitarias

```
npm run test:unit
```

### `test:integration`

Ejecuta las pruebas de integración

```
npm run test:integration
```

### `test:watch`

Ejecuta todas las pruebas en modo de monitoreo constante

```
npm run test:watch
```

### `test:config`

Muestra la configuración del framework de pruebas Jest

```
npm run test:config
```

### `test:clear`

Borra la cache del framework de pruebas Jest

```
npm run test:clear
```

### `test:coverage`

Ejecuta todas las pruebas de unitarias y de integración, y genera un reporte de coverage tanto en consola como en html

```
npm run test:coverage
```

### `test:coverage:unit`

Ejecuta las pruebas unitarias y genera un reporte de coverage tanto en consola como en html

```
npm run test:coverage:unit
```

### `test:coverage:integration`

Ejecuta las pruebas de integración y genera un reporte de coverage tanto en consola como en html

```
npm run test:coverage:integration
```

### `format`

Formatea todos los archivos de la carpeta src usando Prettier

```
npm run format
```

### `format:fix`

Formatea todos los archivos y corrige usando ESLint

```
npm run format:fix
```

### `prebuild`

Ejecuta los script `clean` y `lint:report`

```
npm run prebuild
```

### `build`

Transpila a javascript en la carpeta cache y luego minifica a la carpeta dist

```
npm run build
```

### `code:build`

Ejecuta los script `prebuild` y `build`

```
npm run code:build
```

### `deploy`

Despliega a AWS

```
npm run deploy
```

### `deploy:remove`

Elimina todo lo desplegado a AWS

```
npm run deploy:remove
```

### `deploy:restart`

Elimina todo lo desplegado a AWS y redespliega

```
npm run deploy:remove
```

### `deploy:build`

Transpila los archivos de typescript y los minifica para el despligue. A continuación despliega a AWS.

```
npm run deploy:build
```
