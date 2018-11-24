// var urlApi = 'http://localhost:8080/api/'
var urlApi = 'https://bestlocation.herokuapp.com/api/'

// Função global
var eventBus = new Vue();
/*
 ==================== Menu NavBar =========================
*/
Vue.component('menu-header',{
  template : `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- Logo -->
  <a class="navbar-brand" href="index.html">
     <img class="img-logo" src="img/Logobranca.png">
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
          <a class="dropdown-item" href="usuario.html">Lista de usuário</a>
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

/*
    ================ Modal, Login and Register =====================
*/

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
             <a href="#register-tab" id="register-link" data-toggle="tab" class="nav-item nav-link" role="tab" aria-selected="true">Cadastrar</a>

             <!-- <ul class="nav nav-tabs">
                 <li class="nav-item">
                   <a href="#login-tab" id="login-link" data-toggle="tab" class="nav-link active" role="tab" aria-selected="true">Login</a>
                 </li>
                 <li class="nav-item">
                   <a href="#register-tab" id="register-link" data-toggle="tab" class="nav-link" role="tab" aria-selected="true">Cadastrar</a>
                 </li>
               </ul> -->
         </div>
       </nav>
      <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button> -->
     </div>
     <div class="modal-body body-grey">

     <!--  ================== Tabs ====================== -->

       <div class="tab-content" >

       <!-- ================= Login ====================== -->

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
      
        <!-- ============================= Register =================================== -->
        <div class="alert alert-danger" role="alert"  v-if="errors.length" >
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
  
        
         <div class="tab-pane fade" id="register-tab" role="tabpanel" aria-labelledby="register-link">

           <form @submit.prevent="cadastrar">

            <div class="form-group">
              <input type="text" class="form-control input-grey" v-model="username"  id="name" placeholder="Nome">
            </div>
           
             <div class="form-group">
               <input type="email" class="form-control input-grey" v-model="email" id="email" aria-describedby="emailHelp" placeholder="Digite e-mail">
             </div>
             
            <div class="form-group">
               <input type="password" class="form-control input-grey" v-model="password" id="password" placeholder="Digite a senha">
            </div>

             <div class="form-group">
               <input type="password" class="form-control input-grey" v-model="password2" id="confirm password" placeholder="Confirme a senha">
            </div>
            <!-- 
            <div class="form-check">
              <input disabled type="checkbox" class="form-check-input" v-model="isAdmin" id="exampleInputPass2word1" placeholder="Numero Telefone">
             <label class="form-check-label" >Administrador</label>
           </div>
           -->
             <button type="submit"  class="btn button-grey">Cadastrar-se</button>
           </form>

         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
`,
data(){
  return{
    // requisição 
    resource: this.$resource(urlApi +'users'),
    usuario: [],
    errors: [],
    username : '',
    email : '',
    password : '',
    password2 : '',
    isAdmin : 'false',
  }
},
methods: {
  
  cadastrar () {
    // Validação
    this.errors = [];
    
    if (!this.username) {
      this.errors.push('O Nome é obrigatório.');
    }

    if (!this.email) {
      this.errors.push('O email é obrigatório.');
    }
    
    if (!this.password) {
      this.errors.push('O senha é obrigatório.');
    }

    if(this.password != this.password2){
      this.errors.push('senha não correspodem')
      console.log("erro password")
    }

    if (!this.errors.length) {
      // Post
      this.$http.post(urlApi+'users', {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2,
        isAdmin : this.isAdmin
      }).then(response =>{
      this.usuario = response.data
   
      })
      $('#login-modal').modal('hide');
      this.username= ""
      this.email= ""
      this.password = ""
      this.password2 = ""
      this.isAdmin = ""
      return true;
    }
  },


}

})

var loginModal = new Vue({
el: '#placemodal',

})


// ##### Modal Descricao casa, desc-casa ################# // 


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
     <img class="card-img-top" src="img/casa.jpg" alt="Card image cap">
     <h5 class="card-title">titulo: {{imoveis.titulo}}</h5>
     <p class="card-text">descrição: {{imoveis.descricao}}</p>
     <p class="card-text">Endereço: {{imoveis.endereco}}</p>
     <p class="card-text">Preço: {{imoveis.preco}}</p>
     
     </div>

   </div>
 </div>
</div>
`,
data(){
  return{

    id: '',
    resource: this.$resource(urlApi+'imoveis/{_id}'),
    imoveis: []
  }
},
 methods: {
   
  iniciar: function(){
    let self = this;
    eventBus.$on('getId', function(id){
      this.id = id

      this.$http.get(urlApi+'imoveis/'+this.id).then(response => {
        self.imoveis = response.data
      
      })
      
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





/*
    --------------Buscar imoveis-------------------
    ----------------Get imoveis -------------------
*/

Vue.component('input-busca',{
  template: `
  <form>
  <div class="place-input">
    <input v-model="id" placeholder="Digite a cidade..." class="input-principal">
    <button @click.prevent="getId(id)" onclick="window.location.href='lista.html'" class="btn-enviar"><i class="fas fa-search icon-serach"></i></button>
  </div>
</form>`,
data(){
  return{
    resource: this.$resource(urlApi+'imoveis'),
    
    id : '',
    imoveis: []
  }
},  
methods: {
  getId(id){

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


/*
  ======================= Listagem de imoveis ========================
  ============================ Get / buscar ==========================
*/

//  GET / Buscar
Vue.component('card-house',{
 template: ` 
<div class="row content-lista" >
  <div class="col-md-4 card-house" v-for="imovel in imoveis" >
    <div class="card" style="width: 350px;">
       <img class="card-img-top" src="img/casa.jpg" alt="Card image cap">
       <div class="card-body card-imovel">
         <h6 class="card-title" >{{imovel.titulo}} R$: {{imovel.preco}}</h6>
         <p class="card-text">descrição: {{imovel.descricao}}</p>
         <p class="card-text">Endereço: {{imovel.endereco}}</p>
         <p class="card-text">id: {{imovel._id}}</p>
         <a class="btn button-plus" @click="getId(imovel._id)"  data-toggle="modal" data-target="#desc-modal" >Mais+</a>
    
         
        </div>
    </div>
  </div>
</div>
   
 `,
 data(){
   return{
     resource: this.$resource(urlApi+'imoveis{/id}'),
     imoveis: [],
     id : ''
   }
 },
  methods: {
    getId(id){
      this.id = id
      // console.log("esse é o id "+ this.id)
      eventBus.$emit('getId', this.id)
      this.resource.get({}).then((response) =>{
        this.idImovel = response.data
       
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



/*
====================== Post / Cadastrar imovel ========================
*/
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
      <input type="titulo" class="form-control input-grey" v-model="titulo" id="titulo" aria-describedby="emailHelp" placeholder="Digite o tipo da venda (Venda, Aluguel)">
    </div>



    <div class="form-group">
      <input type="text" class="form-control input-grey" id="endereco" v-model="endereco" placeholder="Endereço">
    </div>

    <div class="form-group">
        <input type="textarea" class="form-control input-grey" id="descricao" v-model="descricao" placeholder="Descrição do Imovel (2 quartos, 2 banheiro, sala, cozinha etc..">
      </div>

      <div class="form-group">
      <input type="text" class="form-control input-grey" id="preco" v-model="preco" placeholder="Digite o Preço">
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
      resource: this.$resource(urlApi+'imoveis'),
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
        this.$http.post(urlApi+'imoveis', {
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

/*
====================== Delete / Deletar imoveis ===========================
*/

Vue.component('deletar-imovel',{
  template: ` 
  <div>
      <form ref="form" >
        <h2 align="center">Deletar Ímovel</h2>
          <div class="form-group">
            <input type="titulo" class="form-control input-grey" v-model="id" id="id" aria-describedby="emailHelp" placeholder="ID imovel">
          </div>
          <button class="btn button-delete"  @click.prevent="deletar()">Delete</button>
      </form>
      <hr>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Descrição</th>
          <th scope="col">Endereço</th>
          <th scope="col">Preço</th>
          <th scope="col">Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(imovel, index) in imoveis">
          <th scope="row">{{index}}</th>
          <td>{{imovel.titulo}}</td>
          <td>{{imovel.descricao}}</td>
          <td>{{imovel.endereco}}</td>
          <td>{{imovel.preco}}</td>
          <td>{{imovel._id}}</td>
          <td><button  data-toggle="modal"  @click="deletarImovel(imovel._id)" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
        </tr>
    
      </tbody>
    </table>
  </div>`,
  data(){
    return{
 
      resource: this.$resource(urlApi+'imoveis'),
      imoveis: [],
      id : ''
    }
  },
  methods:{
    iniciar(){
      this.resource.get({}).then((response) =>{
        this.imoveis = response.data
        console.log(response.data)
      })
    },
    deletarImovel(id){
      console.log(id)
     
      url = urlApi+'imoveis/'+id
      console.log(url)
      
    this.$http.delete(url).then((response) => {
      location.reload();
    }, response =>{
      id = ''
      console.log("Erro ao deletar!");
      alert("erro id:"+id+" Não encontrado! Vê direito ai poha!")
    })
    this.id = ""
    listaUsuario.$forceUpdate();
  },
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
  },
  created(){
    console.log(typeof(count))
     this.iniciar()
   }
})


var deletarImovel = new Vue({
  el: '#deletarImovel',
  })

/*
 ==================== Listar usuario/ Get Usuario =====================
*/

Vue.component('listar-usuario',{
  template: ` 
 <div class="row " >
 <table class="table">
 <thead>
   <tr>
     <th scope="col">#</th>
     <th scope="col">Name</th>
     <th scope="col">E-mail</th>
     <th scope="col">id</th>
     <th scope="col">Admin</th>
     <th scope="col">Deletar</th>
   </tr>
 </thead>
 <tbody>
   <tr v-for="(usuario, index) in usuarios">
     <th scope="row">{{index}}</th>
     <td>{{usuario.username}}</td>
     <td>{{usuario.email}}</td>
     <td>{{usuario._id}}</td>
     <td>{{usuario.isAdmin}}</td>
     <td><button  data-toggle="modal"  @click="deletarUser(usuario._id)" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
   </tr>

 </tbody>
</table>
 </div>
    
  `,
  data(){
    return{
      resource: this.$resource(urlApi+'users'),
      usuarios: []
    }
  },
   methods: {

     iniciar(){
       this.resource.get({}).then((response) =>{
         this.usuarios = response.data
         console.log(response.data)
       })
     },
    //  Deletar usuario
     deletarUser(id){
      console.log(id)
     
      url = urlApi+'users/'+id
      console.log(url)
      
    this.$http.delete(url).then((response) => {
      location.reload();
    }, response =>{
      id = ''
      console.log("Erro ao deletar!");
      alert("erro id:"+id+" Não encontrado! Vê direito ai poha!")
    })
    this.id = ""
    listaUsuario.$forceUpdate();
  }
   },
   created(){
    console.log(typeof(count))
     this.iniciar()
   }

   
 })
 
 var listaUsuario = new Vue({
  el: '#listarUsuario',
 })


/*
================= Modal confirm Delete =======================
*/



Vue.component('delete-confirm',{
  template: `
  
  <div class="modal fade" id="delete-modal" tabindex="-1" role="dialog" >
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLongTitle">Descrição</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
        <h3>deletetar</h3>
       </div>
       <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  @click="deletarUser(usuario._id)">Save changes</button>
     </div>
     </div>
   </div>
  </div>
  `,
  data(){
    return{
      
      resource: this.$resource(urlApi +'imoveis{/id}'),
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
  el: '#place-delete-modal',
  
  })