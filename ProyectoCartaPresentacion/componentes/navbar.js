Vue.component('navbar', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<nav class="navbar navbar-expand-sm navbar-light navbar-toggleable-sm  align-content-center" >
    <a type="button" class="btn btn-primary btn-css" href="../src/index.html">Pagina Principal</a>
    <a type="button" class="btn btn-primary btn-css" href="../src/estudios.html">Estudios</a>
    <a type="button" class="btn btn-primary btn-css" href="../src/experiencias.html">Experiencias</a>
    <a type="button" class="btn btn-primary btn-css" href="../src/proyectos.html">Proyectos</a>
    <a type="button" class="btn btn-primary btn-css" href="../src/pruebas.html">Pruebas en Entrevistas</a>
    <a type="button" class="btn btn-primary btn-css" href="../src/contacto.html">Contacto</a>
      </nav>`
  })

  new Vue({ el: '#navbar' })