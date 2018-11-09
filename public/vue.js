

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
     <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="cadastrar.html">Cadastrar</a>
          <a class="dropdown-item" href="deletar.html">Deletar</a>
   
        </div>
      </li> 
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
              <!-- <label for="exam2pleInputEmail1">Email address</label> -->
               <input type="email" class="form-control input-grey" id="exampleInputE2mail1" aria-describedby="emailHelp" placeholder="Digite e-mail">
              
             </div>



             <div class="form-group">
               <!-- <label for="exampleInputPassword1">Password</label> -->
               <input type="password" class="form-control input-grey" id="exampleInputPassword2" placeholder="Senha">
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
               <input type="text" class="form-control input-grey" id="exampleInputPasswor21" placeholder="Nome">
             </div>

             <div class="form-group">
               <input type="number" class="form-control input-grey" id="exampleInputPass2word1" placeholder="Numero Telefone">
            </div>


             <div class="form-group">
              <!-- <label for="exampleInputPasswor3d1">Password</label> -->
               <input type="password" class="form-control input-grey" id="exampleInputPassw3ord1" placeholder="Senha">
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

})


// ##### Modal Descricao House, desc-casa ################# // 


Vue.component('desc-house',{
template: `

<div class="modal fade" id="desc-modal" tabindex="-1" role="dialog" >
 <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLongTitle">Descrição</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">
     <h5 class="card-title">{{imoveis.titulo}}</h5>
     <p class="card-text">descrição: {{imoveis.descricao}}</p>
     <p class="card-text">Endereço: {{imoveis.endereco}}</p>
     <p class="card-text">id: {{imoveis._id}}</p>
     <a class="btn btn-primary"   data-toggle="modal" data-target="#desc-modal" >Mais+</a>  
     </div>

   </div>
 </div>
</div>
`,
data(){
  return{
    
    resource: this.$resource('http://localhost:8080/api/imoveis{/id}'),
    imoveis: []
  }
},
 methods: {

   iniciar(){
     this.resource.get({}).then((response) =>{
       this.imoveis = response.data[2]
     
     })
   }
 },
 created(){
   this.iniciar()
 }
 
})

var descModal = new Vue({
el: '#descHouse',

})



// ####################################################

// Buscar casa

Vue.component('input-busca',{
  template: `
  <form>
  <div class="place-input">
    <input v-model="id" class="input-principal">
    <button @click.prevent="getId(id)" class="btn-enviar"><i class="fas fa-search icon-serach"></i></button>
  </div>
</form>`,
data(){
  return{
    resource: this.$resource('http://localhost:8080/api/imoveis'),
    
    id : '',
    imoveis: []
  }
},  
methods: {
  getId(id){
    
    console.log(id)
    this.resource.get({}).then((response) =>{
      this.imoveis = response.data
      console.log(response.data)
    })
   },
},
})

var inputBusca = new Vue({
  el: '#placeBuscar',
 })


// Listam Casa 

//  GET / Buscar
Vue.component('card-house',{
 template: ` 
<div class="row content-lista" >
  <div class="col-md-4 card-house" v-for="imovel in imoveis" >
    <div class="card" style="width: 300px;">
       <img class="card-img-top" src="casa.jpg" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">{{imovel.titulo}}</h5>
         <p class="card-text">descrição: {{imovel.descricao}}</p>
         <p class="card-text">Endereço: {{imovel.endereco}}</p>
         <p class="card-text">Preço: {{imovel.preco}}</p>
         <p class="card-text">id: {{imovel._id}}</p>
         <a class="btn btn-primary" @click="getId(imovel._id)"  data-toggle="modal" data-target="#desc-modal" >Mais+</a>
    
         
        </div>
    </div>
  </div>
</div>
   
 `,
 data(){
   return{
  
     resource: this.$resource('http://localhost:8080/api/imoveis{/id}'),
   
     imoveis: []
   }
 },
  methods: {
    getId(id){
      id = this.id
      this.resource.get({}).then((response) =>{
        this.idImovel = response.data
        console.log(id)
      })
     },
    iniciar(){
      this.resource.get({}).then((response) =>{
        this.imoveis = response.data
        console.log(response.data)
      })
    }
  },
  created(){
    this.iniciar()
  }
  
})

var loginModal = new Vue({
 el: '.cardHouse',
})


//  Post / Cadastrar 
Vue.component('cadastrar-imovel',{
  template: `
    <form ref="form" @submit.prevent="handleSubmit">

    <div class="alert alert-danger" role="alert"  v-if="errors.length" >
    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>

    <h2 align="center">Cadastrar Ímovel</h2>

    <div class="form-group">
      <input type="titulo" class="form-control input-grey" v-model="titulo" id="titulo" aria-describedby="emailHelp" placeholder="Digite o titulo do imovel">
    </div>



    <div class="form-group">
      <input type="text" class="form-control input-grey" id="endereco" v-model="endereco" placeholder="Endereço">
    </div>

    <div class="form-group">
        <input type="textarea" class="form-control input-grey" id="descricao" v-model="descricao" placeholder="descrição do Imovel">
      </div>

      <div class="form-group">
      <input type="number" class="form-control input-grey" id="preco" v-model="preco" placeholder="Digite o Preço">
    </div>

<!--      <div class="form-group">
        <input type="file" class="form-control input-grey"  placeholder="descrição do Imovel">
      </div>
-->
    <button type="submit" class="btn button-grey"  >Cadastrar</button>
   
  </form>`,
  data(){
    return{
      // requisição 
      resource: this.$resource('http://localhost:8080/api/imoveis'),
      imoveis: [],
      errors: [],
      titulo : '',
      endereco : '',
      descricao : '',
      preco : ''
    }
  },
  methods: {
    
    handleSubmit () {
      // Validação
      this.errors = [];

      if (!this.titulo) {
        this.errors.push('O titulo é obrigatório.');
      }

      if (!this.endereco) {
        this.errors.push('O endereco é obrigatório.');
      }
      
      if (!this.descricao) {
        this.errors.push('O descricao é obrigatório.');
      }


      if (!this.preco) {
        this.errors.push('O preco é obrigatório.');
      }
      if (!this.errors.length) {
        // Post
        this.$http.post('http://localhost:8080/api/imoveis', {
          titulo: this.titulo,
          endereco: this.endereco,
          descricao: this.descricao,
          preco: this.preco
        }).then(response =>{
        this.imoveis = response.data

        console.log(response.data)

        })
        alert('cadastro com sucesso')
         this.titulo = ""
          this.endereco = ""
          this.descricao = ""
          this.preco = ""
        return true;
      }
    },


  }
   
})

var cadastrarImovel = new Vue({
el: '#cadastrarImovel',
})

// ## Deletar 

Vue.component('deletar-imovel',{
  template: ` 
  <form ref="form" >
  <h2 align="center">Deletar Ímovel</h2>
    <div class="form-group">
      <input type="titulo" class="form-control input-grey" v-model="id" id="id" aria-describedby="emailHelp" placeholder="ID imovel">
    </div>

   
    <button class="btn button-delete"  @click.prevent="deletar()">Delete</button>
  </form>`,
  data(){
    return{
 
      resource: this.$resource('http://localhost:8080/api/imoveis'),
      imoveis: [],
      id : ''
    }
  },
  methods:{
    // Função deletar
    deletar(){
        id = this.id
       
        url = 'http://localhost:8080/api/imoveis/'+id
        console.log(url)
      this.$http.delete(url).then((response) => {
       
        alert("Deletado com sucesso")
      }, response =>{
        
        console.log("Erro ao deletar!");
        alert("erro id:"+id+" Não encontrado! Vê direito ai poha!")
      })
      this.id = ""
    }
  }
})


var deletarImovel = new Vue({
  el: '#deletarImovel',
  })

