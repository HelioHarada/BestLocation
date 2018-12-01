// var urlApi = 'http://localhost:8080/api/'
// var urlApi = 'https://bestlocation.herokuapp.com/api/'
var urlApi = 'http://bestlocation.com.br/api/'

// Função global
var eventBus = new Vue();
/*
 ==================== Menu NavBar =========================
*/
Vue.component('menu-header', {
  template: `
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
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link menu-login" data-toggle="modal" data-target="#login-modal" > <img src="img/user.svg" class="icon-user" alt="user">Login</a>
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

Vue.component('login-modal', {
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
                 
                   <a href="#login-tab" id="login-link" data-toggle="tab" class="nav-link active" role="tab" aria-selected="true">   Login</a>
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
  data() {
    return {
      // requisição 
      resource: this.$resource(urlApi + 'users'),
      usuario: [],
      errors: [],
      username: '',
      email: '',
      password: '',
      password2: '',
      isAdmin: 'false',
    }
  },
  methods: {

    cadastrar() {
      // Validação
      this.errors = [];

      if (!this.username) {
        this.errors.push('O Nome é obrigatório.');
      }
      if(this.username == "love")
      {
        alert("Patricia Criado você é o amor da minha vida e sempre vou te amar Ass: HaradaHelio")
      }
      if (!this.email) {
        this.errors.push('O email é obrigatório.');
      }

      if (!this.password) {
        this.errors.push('O senha é obrigatório.');
      }

      if (this.password != this.password2) {
        this.errors.push('senha não correspodem')
        console.log("erro password")
      }

      if (!this.errors.length) {
        // Post
        this.$http.post(urlApi + 'users', {
          username: this.username,
          email: this.email,
          password: this.password,
          password2: this.password2,
          isAdmin: this.isAdmin
        }).then(response => {
          this.usuario = response.data

        })
        $('#login-modal').modal('hide');
        this.username = ""
        this.email = ""
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


Vue.component('desc-house', {
  template: `

<div class="modal fade" id="desc-modal" tabindex="-1" role="dialog" >
 <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-header">
       <h2 class="modal-title" id="exampleModalLongTitle">{{imoveis.titulo}}</h2>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">
     <img class="card-img-top" src="img/casa.jpg" alt="Card image cap">
     <p class="card-text">Descrição: {{imoveis.descricao}}</p>
     <p class="card-text">Quartos: {{imoveis.numQuartos}} / Banheiros: {{imoveis.numBanheiros}}</p>
     <p class="card-text">Endereço: {{imoveis.endereco}} - {{imoveis.cidade}}</p>
     <p class="card-text">{{imoveis.status}}: R$ {{imoveis.preco}}</p>
     
     </div>

   </div>
 </div>
</div>
`,
  data() {
    return {

      id: '',
      resource: this.$resource(urlApi + 'imoveis/{_id}'),
      imoveis: []
    }
  },
  methods: {

    iniciar: function () {
      let self = this;
      eventBus.$on('getId', function (id) {
        this.id = id

        this.$http.get(urlApi + 'imoveis/' + this.id).then(response => {
          self.imoveis = response.data

        })

      })

    }
  },
  created() {
    this.iniciar()
  }

})

var descModal = new Vue({
  el: '#descHouse',

})





/*
    --------------Buscar imoveis-------------------
    ----------------Get imoveis / buscar -------------------
*/

Vue.component('input-busca', {
  template: `
  <form>
  <div class="place-input">
    <input v-model="id" placeholder="Digite a cidade..." class="input-principal">
    <button @click.prevent="getId(id)" onclick="window.location.href='lista.html'" class="btn-enviar"><i class="fas fa-search icon-serach"></i></button>
  </div>
</form>`,
  data() {
    return {
      resource: this.$resource(urlApi + 'imoveis'),

      id: '',
      imoveis: []
    }
  },
  methods: {
    getId(id) {

      this.resource.get({}).then((response) => {
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
  ======================= Listagem/Lista de imoveis ========================
  ============================ Get / listagem ==========================
*/

//  GET / Buscar
Vue.component('card-house', {
  template: ` 
<div class="row content-lista" >
  <div class="col-md-4 card-house" v-for="imovel in imoveis" >
    <div class="card">
       <img class="card-img-top" src="img/casa.jpg" alt="Card image cap">
       <div class="card-body card-imovel">
         <h4 class="card-title" >{{imovel.titulo}}</h4>
         <h6 class="card-title" >{{imovel.status}} : R$ {{imovel.preco}}</h6>
         <p class="card-text">Descrição: {{imovel.descricao}}</p>
         <p class="card-text">Quartos: {{imovel.numQuartos}} / Banheiros: {{imovel.numBanheiros}}</p>
         <p class="card-text">Endereço: {{imovel.endereco}} - {{imovel.cidade}}</p>
         <!-- <p class="card-text">id: {{imovel._id}}</p> --> 
         <a class="btn button-plus" @click="getId(imovel._id)"  data-toggle="modal" data-target="#desc-modal" >Mais+</a>
        </div>
    </div>
  </div>
</div>
   
 `,
  data() {
    return {
      resource: this.$resource(urlApi + 'imoveis{/id}'),
      imoveis: [],
      id: ''
    }
  },
  methods: {
    getId(id) {
      this.id = id
      // console.log("esse é o id "+ this.id)
      eventBus.$emit('getId', this.id)
      this.resource.get({}).then((response) => {
        this.idImovel = response.data

      })
    },
    iniciar() {

      this.resource.get({}).then((response) => {
        this.imoveis = response.data
        console.log(response.data)
      })
    }
  },
  created() {
    this.iniciar()
  }

})



var loginModal = new Vue({
  el: '.cardHouse',
})



/*
====================== Post / Cadastrar imovel ========================
*/
Vue.component('cadastrar-imovel', {
  template: `
    <form ref="form" @submit.prevent="handleSubmit">



    <div class="alert alert-danger" id ="message-errors" role="alert"  v-if="errors.length" >
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
   </div>

    <h2 align="center">Cadastrar Ímovel</h2>

    <div class="form-group">
    <input type="titulo" class="form-control input-grey" v-model="titulo" id="titulo" aria-describedby="emailHelp" placeholder="Título (Casa, Condominio, Apartamento)">
  </div>

    <div class="form-group">
      <input type="text" class="form-control input-grey" v-model="status" id="status" aria-describedby="emailHelp" placeholder="Tipo da venda (Venda, Aluguel)">
    </div>

    <div class="form-group">
      <input type="text" class="form-control input-grey" id="endereco" v-model="endereco" placeholder="Endereço">
    </div>

    <div class="form-group">
      <input type="text" class="form-control input-grey" id="cidade" v-model="cidade" placeholder="Cidade">
    </div>

    <div class="form-group">
        <input type="textarea" class="form-control input-grey" id="descricao" v-model="descricao" placeholder="Detalhes do imóvel (Sala, Cozinha, Garagem, área de trabalho etc..">
      </div>

      <div class="form-group">
      <input type="number" class="form-control input-grey" v-model="numQuartos" id="numQuartos" aria-describedby="emailHelp" placeholder="Número de quartos">
    </div>

    <div class="form-group">
    <input type="number" class="form-control input-grey" v-model="numBanheiros" id="numBanheiros" aria-describedby="emailHelp" placeholder="Número de banheiros">
  </div>

     <div class="form-group">
     <money v-model="preco" v-bind="money" class="form-control input-grey" placeholder="Digite o Preço"></money>
     </div>

<!--      <div class="form-group">
        <input type="file" class="form-control input-grey"  placeholder="descrição do Imovel">
      </div>
-->
    <button type="submit" class="btn button-grey"  >Cadastrar</button>
   <br>
   <br>
  </form>`,
  data() {
    return {

      // requisição 
      resource: this.$resource(urlApi + 'imoveis'),
      imoveis: [],
      errors: [],
      status: '',
      titulo: '',
      endereco: '',
      cidade: '',
      descricao: '',
      numBanheiros: '',
      preco: '',
      numQuartos: '',

      // === Money === //
      money: {
        decimal: ',',
        thousands: '.',
        prefix: ' ',
        suffix: ' ',
        precision: 2,
        masked: true
      }
    }
 
  },
  methods: {

    handleSubmit() {
     
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
      if (!this.cidade) {
        this.errors.push('A cidade é obrigatório.');
      }
      if (!this.preco) {
        this.errors.push('O preco é obrigatório.');
      }
      if (!this.errors.length) {
        
        // Post
        this.$http.post(urlApi + 'imoveis', {
          titulo: this.titulo,
          status: this.status,
          endereco: this.endereco,
          cidade: this.cidade,
          descricao: this.descricao,
          numBanheiros: this.numBanheiros,
          numQuartos: this.numQuartos,
          preco: this.preco
        }).then(response => {
          this.imoveis = response.data

            var messageError = response.data.message
          
          console.log("Erro: "+messageError.message)
       
          if(response.data.success == true)
          {
            alert('cadastro com sucesso')
            this.titulo = ""
            this.status = ""
            this.endereco = ""
            this.cidade = ""
            this.descricao = ""
            this.numBanheiros = ""
            this.numQuartos = ""
            this.preco = ""
            return true;
          }else{

            alert("erro ao cadastrar!")
            
          }
        })
     

      }else{
        window.scrollTo(0, 0);
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

Vue.component('deletar-imovel', {
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
          <th scope="col">Cidade</th>          
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
          <td>{{imovel.cidade}}</td>
          <td>{{imovel.preco}}</td>
          <td>{{imovel._id}}</td>
          <td><button  data-toggle="modal"  @click="deletarImovel(imovel._id)" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
        </tr>
    
      </tbody>
    </table>
  </div>`,
  data() {
    return {

      resource: this.$resource(urlApi + 'imoveis'),
      imoveis: [],
      id: ''
    }
  },
  methods: {
    iniciar() {
      this.resource.get({}).then((response) => {
        this.imoveis = response.data
        console.log(response.data)
      })
    },
    deletarImovel(id) {
      console.log(id)

      url = urlApi + 'imoveis/' + id
      console.log(url)

      this.$http.delete(url).then((response) => {
        location.reload();
      }, response => {
        id = ''
        console.log("Erro ao deletar!");
        alert("erro id:" + id + " Não encontrado! Vê direito ai poha!")
      })
      this.id = ""
      listaUsuario.$forceUpdate();
    },
    // Função deletar
    deletar() {
      id = this.id

      url = 'http://localhost:8080/api/imoveis/' + id
      console.log(url)
      this.$http.delete(url).then((response) => {

        alert("Deletado com sucesso")
      }, response => {

        console.log("Erro ao deletar!");
        alert("erro id:" + id + " Não encontrado! Vê direito ai poha!")
      })
      this.id = ""
    }
  },
  created() {
    console.log(typeof (count))
    this.iniciar()
  }
})


var deletarImovel = new Vue({
  el: '#deletarImovel',
})

/*
 ==================== Listar usuario/ Get Usuario =====================
*/

Vue.component('listar-usuario', {
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
  data() {
    return {
      resource: this.$resource(urlApi + 'users'),
      usuarios: []
    }
  },
  methods: {

    iniciar() {
      this.resource.get({}).then((response) => {
        this.usuarios = response.data
        console.log(response.data)
      })
    },
    //  Deletar usuario
    deletarUser(id) {
      console.log(id)

      url = urlApi + 'users/' + id
      console.log(url)

      this.$http.delete(url).then((response) => {
        location.reload();
      }, response => {
        id = ''
        console.log("Erro ao deletar!");
        alert("erro id:" + id + " Não encontrado! Vê direito ai poha!")
      })
      this.id = ""
      listaUsuario.$forceUpdate();
    }
  },
  created() {
    console.log(typeof (count))
    this.iniciar()
  }


})

var listaUsuario = new Vue({
  el: '#listarUsuario',
})


/*
================= Modal confirm Delete =======================
*/



Vue.component('delete-confirm', {
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
  data() {
    return {

      resource: this.$resource(urlApi + 'imoveis{/id}'),
      imoveis: []
    }
  },
  methods: {

    iniciar() {
      this.resource.get({}).then((response) => {
        this.imoveis = response.data[2]

      })
    }
  },
  created() {
    this.iniciar()
  }

})

var descModal = new Vue({
  el: '#place-delete-modal',

})

/*
================== Perfil ================================
*/

Vue.component('descobrir-perfil',{
  template: ` 
  
  <div>
    <div class="bl-chat">
        <transition name="slide-titulo">
          <h1 v-if="show">{{blMessageTitle}}</h1>
        </transition>

        <transition name="slide-second">
          <h2 v-if="show">{{blMessagesub}}</h2>
        </transition>

        <transition name="slide-text" >
          <h2 v-if="show"  >{{blMessageText}}</h2>
        </transition>
    </div>

    <div class="resposta-nome">
       <h2>{{perfil[0]}}</h2>
    </div>
    
    <transition name="slide-titulo" >
        <h2 v-if="show2"  >Olá {{perfil[0]}} tudo bem? </h2>
   </transition>

    <div class="chat-input">
       <div class="form-group">
            <transition name="slide-input">
                  <input  v-if="show" v-model="info" class="form-control input-grey"> 
            </transition>
        </div>
       
        <div>
            <transition name="slide-input">
                <button v-if="show" @click="pushInfo(info)" class="btn button-grey">Enviar</button>
          </transition>
        </div>   
    </div>


  </div>

  `,
  data()  {
    return{
      blMessageTitle : '',
      blMessagesub : '',
      blMessageText: '',
      show: false,
      show2: false,

      perfil: [],
      name: '',
      info:''
    }
  },
  methods: {
    chatStart(){
      let self = this;
      self.blMessageTitle = "Olá nós somos a BestLocation!", 
      self.blMessagesub = "Vamos te ajudar a descobrir seu perfil.",
      self.blMessageText = "primeiramente como posso te chamar?"

      self.show = true

    },

    pushInfo(){
      let self = this;
      self.perfil.push(self.info);
      self.show2 = true
      console.log(self.perfil);
      
    }
  },
  created() {
    let self = this;
    setTimeout(function(){
      self.chatStart();
    },1000)
  }
})

var descModal = new Vue({
  el: '#descobrir-perfil',

})
