Vue.component('tarjinfo', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container w-75 ">
        <div class="card">
                <div class="card-body">
                    <p>
                    Hola! Mi nombre es Tomas Salas Mesa.
                    </p>
                    <p>
                    Tengo 27 Años.
                    </p>
                    <p class="card-text">
                    Soy de la Ciudad de Bragado, Pcia. de Buenos Aires.
                    </p>
                    <p>
                    Soy Desarrollador Web FullStack y Programador de Sistemas de Escritorio desde el año 2016.
                    </p>
                    <p>
                    Los invito a recorrer mi pagina para que puedan conocerme en mas profundidad!
                    </p>
                    <p>
                    Van a encontrar: Mis Estudios, Experiencias, Proyectos y algunas pruebas en las que he participado!
                    </p>
                    <p>
                    Espero les guste y se sientan comodos!
                    </p>
                    <p>
                    Desde ya, gracias por darme una parte de su tiempo y leer todo esto!
                    </p>
                    <p>
                    Que tengan un exelente dia!
                    </p>
                </div>
        </div>
    </div>
    `
  })

  new Vue({ el: '#tarjinfo' })