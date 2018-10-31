
// ########## MENU ###############

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
  <div class="modal fade body-orange2" id="login-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
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
        <div class="modal-body">

        <!--  tabs -->

          <div class="tab-content" >
            <div class="tab-pane fade show active" id="login-tab">
                <!-- Form login -->
              <form>
                <h6>login</h6>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control input-orange2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control input-grey" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn button-orange2">Submit</button>
              </form>

            </div>
         

            <div class="tab-pane fade" id="register-tab" role="tabpanel" aria-labelledby="register-link">

              <form>
                <div class="form-group">
                  <h6>register</h6>
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control input-orange2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control input-orange2" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn .button-orange2">Submit</button>
              </form>

            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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