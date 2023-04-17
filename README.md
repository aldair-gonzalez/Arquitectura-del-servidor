# 💻 Arquitectura del servidor: Diseño

- El proyecto debe contar con capas de routing, controlador, dao, con nuestras vistas bien separadas y con las responsabilidades correctamente delegadas.
- Además, mover del proyecto todas las partes importantes y comprometedoras en un archivo .env para poder leerlo bajo variables de entorno en un archivo config.js

## Configuración Standar.js

En caso de que aparezcan errores en el código pegar la siguiente configuración en standard en ./node_modules/standard/eslintrs.json

```JSON
{
  "rules": {
    "camelcase": "off"
  }
}
```

Si los errores todavía persisten configurar la extensión de ESlint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint