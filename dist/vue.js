Vue.component('menu-header',{
     template : `
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <!-- Logo -->
     <a class="navbar-brand" href="#">
         <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
         BestLocation
       </a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
   
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto navbar-right">
         <li class="nav-item active">
           <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="lista.html">Lista de Imóveis</a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="login.html">Login</a>
         </li>
         <!-- <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown
           </a>
           <div class="dropdown-menu" aria-labelledby="navbarDropdown">
             <a class="dropdown-item" href="#">Action</a>
             <a class="dropdown-item" href="#">Another action</a>
             <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="#">Something else here</a>
           </div>
         </li> -->
       </ul>
     </div>
   </nav>
     `
})

var header = new Vue({
    el: '#header'
  })

  

  Vue.component('form-busca',{
    props: ['preco'],
    template: `
    <form>
    <div class="form-group">
      <h2 class="title-form" align="center" >Busca</h2>
      <label for="exampleInputEmail1">Cidade</label>
      <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Digite sua cidade">

    </div>

    <!-- <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div> -->

    <div class="form-group">
        <label for="formControlRange">Preço</label>
        <span>{{preco}}</span>
        <input v-model="preco" type="range" class="form-control-range" id="formControlRange">
      </div>
    
      <!-- Checkbox  -->

      <label>O que deseja perto do seu imovel:</label>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Escola</label>
    </div>

    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck2">
        <label class="form-check-label" for="exampleCheck2">Restaurante</label>
    </div>

    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck3">
        <label class="form-check-label" for="exampleCheck3">Mercado</label>
    </div>
    
  </form>
    `
  })

  var formBusca = new Vue({
    el: '#form-busca',
    data:{
      preco : '100'
    }

  })