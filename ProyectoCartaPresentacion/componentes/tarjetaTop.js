Vue.component('tarjeta', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container w-50 ">
        <div class="card mb-8">
            <div class="row g-0">
                <div class="col-md-4 text-center">
                <img src="../images/foto.png" class="img-tarj">
                </div>
                <div class="col-md-8">
                <div class="card-body text-center">
                    <h1 class="card-title cardTit">Tomas Salas Mesa</h1>
                    <p class="card-text cardSubt">Desarrollador Web FullStack y Sistemas de Escritorio</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
  })

  new Vue({ el: '#tarjeta' })
