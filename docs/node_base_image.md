# Justificación de elección de imagen base
He elegido la versión 12.18.4 ya que es la versión de node.js que tengo
instalada en el ordenador en el que estoy desarrollando el proyecto y
no me ha dado ningún problema.
![Node version](https://github.com/aleveji/RecipeFinder/blob/master/docs/img/node_base_image/node_version.png)

Para elegir el tipo de imagen realicé pruebas de forma local y así
decidir entre la versión estándar ("completa"), la version "slim" y
la version "alpine":
 - Estándar: es la versión más completa e incluye una gran variedad de herramientas, pero no voy utilizar la mayoría, lo que hace su tamaño sea muy elevado de manera innecesaria. Su tiempo de construcción es muy elevado también. (IMAGE ID: 77c896281703)
 - Slim: esta versión es como la versión estándar, pero cuenta con menos herramientas, por lo que su tamaño es más liviano. Aún así, esta versión no es la que cuenta con el tamaño más reducido. (IMAGE ID: b1d1dde06b6d)
 - Alpine: está versión está basada en Alpine Linux, que fue diseñado para ser ligero pero seguir siendo funcional. De las tres posibles versiones esta es la que tiene el menor tamaño de todas. (IMAGE ID: c744398200b3)
![Node images size](https://github.com/aleveji/RecipeFinder/blob/master/docs/img/node_base_image/node_images_size.png)

Tamaño de la versión "alpine" comprimido:
![Node alpine compressed size](https://github.com/aleveji/RecipeFinder/blob/master/docs/img/node_base_image/node_alpine_compressed_size.png)

Tiempo de construcción de la versión "alpine":
![Node alpine build time](https://github.com/aleveji/RecipeFinder/blob/master/docs/img/node_base_image/node_alpine_build_time.png)