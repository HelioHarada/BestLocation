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
    el: '#header',

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



  var formBusca = new Vue({
    el: '#form-busca',
    data:{
      preco: ''
    }
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