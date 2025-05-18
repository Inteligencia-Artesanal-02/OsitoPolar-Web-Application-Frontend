## Consideraciones para evitar conflictos y errores al avanzar el proyecto:
- Para crear las ramas **"feature"** pueden hacerlo de dos formas:
  - Desde el mismo Github se ubican en la rama **"develop"** y en buscar ramas escriben como si ya existiera la rama y le dan a crear.
  - Desde el mismo IDE hacen **checkout** a **"develop"** y crean la nueva rama desde ahí.

- Siempre actualicen la rama **"develop"** de su proyecto en el IDE antes de crear ramas **"feature"** para verificar que estén al día y con las mismas versiones.

- Creen ramas **"feature"** desde una versión actualizada de **"develop"**.
> [!IMPORTANT]
> Antes de fusionar sus ramas **"feature"** a **"develop"**, actualicen con los cambios de **"develop"** usando **git merge** o **git rebase**.
  
- En caso haya conflictos, tendrán que resolverlos manualmente en el proyecto.

- Fusionen sus ramas **"feature"** hacia **"develop"** luego de resolver los conflictos (pueden hacerlo desde el IDE o en el mismo GitHub como **"pull request"**, como gusten).

> [!IMPORTANT]
> Cuiden de no hacer merge a otras ramas, solo a **"develop"**.

- Comuníquense por interno que avance terminaron y mantengan las ramas **"feature"** pequeñas para minimizar conflictos, osea, que sea avances o implementaciones puntuales. Mientras más grande el progreso puede ser más complicado arreglar conflictos, por eso, creen features de a pocos.

