Vue.component('estudios', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Secundario</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Bachiller - Economia y Gestion de las Organizaciones</p>
          <p class="card-text">Colegio: San Jose - Bragado - Año 2011</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Tecnico en PC</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Reparacion - Armado</p>
          <p class="card-text">Universidad: UNNOBA - Junin - Año 2013</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Analista de Sistemas</h2>
        </div>
        <div class="card-body">
          <p class="card-text">1er y 2do Año. (Sin Terminar)</p>
          <p class="card-text">Universidad: UNNOBA - Junin - Año 2012 / 2015</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Analista - Programador</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Programacion de Sistemas de Escritorio</p>
          <p class="card-text">Centro Regional Universitario de Bragado - Bragado - Año 2019</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Programador FullStack</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Programacion Web</p>
          <p class="card-text">Programa Codo a Codo - Año 2020</p>
        </div>
      </div>
    </div>
    
    `
  })

  new Vue({ el: '#estudios' })