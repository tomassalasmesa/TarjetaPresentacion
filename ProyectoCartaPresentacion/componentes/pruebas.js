Vue.component('pruebas', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container w-50 ">

        <div class="card mb-3">
        <div class="card-body">
        <h1 class="card-title">Pruebas para Entrevistas</h1>
        </div>
        </div>  
        

        <div class="card mb-3">
            <img src="../images/Gauss.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Lista de Productos</h5>
            </div>
        </div>

        <div class="card mb-3">
            <img src="../images/Prueba1.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">ABM de Productos</h5>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Pronto Mas Imagenes</h5>
            </div>
        </div>

    </div>

    
    `
  })

  new Vue({ el: '#pruebas' })