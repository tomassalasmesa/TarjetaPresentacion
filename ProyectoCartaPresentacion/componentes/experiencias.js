Vue.component('experiencias', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Mantis IT</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Desarrollador - Analista - Atencion al Cliente</p>
          <p class="card-text">C# - Report Service - SQL Server - Hibernate</p>
          <p class="card-text">Area: Compras / Ventas / Facturacion / Proveedores / Stock</p>
          <p class="card-text">1/4/2016 - 31/10/2016 . (Remoto)</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Municipalidad de Bragado</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Desarrollador - Analista</p>
          <p class="card-text">HTML - Javascript - VueJS - NodeJS - Bootstrap - AJAX - MySQL</p>
          <p class="card-text">Area: Compras / Ventas / Facturacion / Proveedores / Stock / Rastreo Vehicular</p>
          <p class="card-text">1/10/2017 - 31/10/2018  . (Remoto)</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Proyectos Personales</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Desarrollador</p>
          <p class="card-text">HTML - Javascript - NodeJS - Bootstrap - MySQL</p>
          <p class="card-text">Administracion Contable - Comercial / Liquidacion de Sueldos / Reportes Generales</p>
          <p class="card-text">2016 - Actualidad</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Diseño Grafico</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Photoshop - Corel Draw - Piskel - Filmora</p>
          <p class="card-text">2016 - Actualidad</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Conocimientos Extra</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Desarrollo: ReactJs - Angular - PHP/Laravel - MongoDB - Java - .Net - Python - CSS</p>
          <p class="card-text">Herramientas Office</p>
          <p class="card-text">Administrativo: Manejo de Stock - Caja - Ventas - Liquidacion de Sueldos - Facturacion</p>
        </div>
      </div>

      

    </div>
    
    `
  })

  new Vue({ el: '#experiencias' })