
// ########## MENU ###############

Vue.component('menu-header',{
  template : `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- Logo -->
  <a class="navbar-brand" href="#">
     <img class="img-logo" src="logo.png">
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto navbar-right">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="lista.html">Lista de Imóveis</a>
      </li>
      <li class="nav-item">
          <a class="nav-link menu-login" data-toggle="modal" data-target="#login-modal" >Login</a>
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
 el: '#header',

})
//  ############### MODAL LOGIN #######################

Vue.component('login-modal',{
template: `
<div id="login">
<div class="modal modal-grey fade" id="login-modal" tabindex="-1" role="dialog">
 <div class="modal-dialog" role="document">
   <div class="modal-content content-grey ">
     <div class="modal-header header-grey">
       <!-- tab panelsss -->
       <nav>
         <div class="nav nav-tabs" id="nav-tab" role="tablist">
             <a href="#login-tab" id="login-link" data-toggle="tab" class="nav-item nav-link active" role="tab" aria-selected="true">Login</a>
             <a href="#register-tab" id="register-link" data-toggle="tab" class="nav-item nav-link" role="tab" aria-selected="true">register</a>

             <!-- <ul class="nav nav-tabs">
                 <li class="nav-item">
                   <a href="#login-tab" id="login-link" data-toggle="tab" class="nav-link active" role="tab" aria-selected="true">Login</a>
                 </li>
                 <li class="nav-item">
                   <a href="#register-tab" id="register-link" data-toggle="tab" class="nav-link" role="tab" aria-selected="true">register</a>
                 </li>
               </ul> -->
         </div>
       </nav>
      <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button> -->
     </div>
     <div class="modal-body body-grey">

     <!--  tabs -->

       <div class="tab-content" >
         <div class="tab-pane fade show active" id="login-tab">
             <!-- Form login -->
           <form>
            
             <div class="form-group">
              <!-- <label for="exampleInputEmail1">Email address</label> -->
               <input type="email" class="form-control input-grey" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite e-mail">
              
             </div>



             <div class="form-group">
               <!-- <label for="exampleInputPassword1">Password</label> -->
               <input type="password" class="form-control input-grey" id="exampleInputPassword1" placeholder="Senha">
             </div>
           
             <button type="submit" class="btn button-grey">Entrar</button>
           </form>

         </div>
      

         <div class="tab-pane fade" id="register-tab" role="tabpanel" aria-labelledby="register-link">

           <form>
             <div class="form-group">
     
               <!-- <label for="exampleInputEmail1">Email address</label> -->
               <input type="email" class="form-control input-grey" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite e-mail">
             
             </div>
             
             <div class="form-group">
               <input type="text" class="form-control input-grey" id="exampleInputPassword1" placeholder="Nome">
             </div>

             <div class="form-group">
               <input type="number" class="form-control input-grey" id="exampleInputPassword1" placeholder="Numero Telefone">
            </div>


             <div class="form-group">
              <!-- <label for="exampleInputPassword1">Password</label> -->
               <input type="password" class="form-control input-grey" id="exampleInputPassword1" placeholder="Senha">
             </div>
           
             <button type="submit" class="btn button-grey">Cadastrar-se</button>
           </form>

         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
`
})

var loginModal = new Vue({
el: '#placemodal',
data(){

}

})


// ##### Open Descricao House ################# // 


Vue.component('desc-house',{
template: `
<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">
       ...
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary">Save changes</button>
     </div>
   </div>
 </div>
</div>
`
})

var loginModal = new Vue({
el: '#DescHouse',

})

// ####################################################


Vue.component('form-busca',{

 template: "#form-busca",
 prop:['preco'],
 data(){
   return {
     content: this.preco
   }
 },
 methods: {
   alterar(e){
     this.$emit('input', this.content)
   }
 }

})



// var formBusca = new Vue({
//   el: '#form-busca',
//   data:{
//     preco: ''
//   }
// })


// Listam Casa 

Vue.component('card-house',{
 template: ` 
 <div class="row">
 
   <div class="col-md-4 card-house">
     <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="casa.jpg" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
   </div>


   <hr>

   <div class="col-md-4 card-house">
   <div class="card" style="width: 18rem;">
     <img class="card-img-top" src="casa.jpg" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
 </div>

 <div class="col-md-4 card-house">
 <div class="card" style="width: 18rem;">
   <img class="card-img-top" src="casa.jpg" alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
</div>

 </div>
 `
})

var loginModal = new Vue({
 el: '.cardHouse',
})



// export default{
//   methods: {
//     alterar(){
//       console.log("teste")
//     }
//   }
// }

// var sliderPreco = new Vue({
//   el: '#sliderPreco',

//   }
// })

// const BasicInput = {
//   template: '<input type="range" v-model="content" @input="handleInput" />',
//   prop: ['value'],
//   data () {
//     return {
//       content: this.value
//     }
//   },
//   methods: {
//     handleInput (e) {
//       this.$emit('input', this.content)
//     }
//   }
// }

// new Vue({
//   el: '#app',
//   data: { name: '' },
//   components: { BasicInput }
// })