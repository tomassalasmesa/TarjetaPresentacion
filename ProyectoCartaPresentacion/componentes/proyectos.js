Vue.component('proyectos', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container w-50 ">

        <div class="card mb-3">
        <div class="card-body">
        <h1 class="card-title">Proyecto: Monarca IT - Sistemas Contables</h1>
        </div>
        </div>  
        

        <div class="card mb-3">
            <img src="../images/MonarcaITLiquidacionSueldo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Pantalla de Liquidacion de Sueldos - Proyecto Monarca IT / Sistemas Contables</h5>
            </div>
        </div>

        <div class="card mb-3">
            <img src="../images/SueldoPDF.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Recibo de Sueldo en PDF - Proyecto Monarca IT / Sistemas Contables</h5>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Pronto Mas Novedades!</h5>
            </div>
        </div>

    </div>

    
    `
  })

  new Vue({ el: '#proyectos' })