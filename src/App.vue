<template>
  <div class="container-fullwidth">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-static-top">
      <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
          <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item">
                  <router-link to="/home">
                    <a class="nav-link">Home</a>
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contato">
                  <a class="nav-link">Contato</a>
                </router-link>
              </li>
          </ul>
      </div>
      <div class="mx-auto my-2 order-0 order-md-1 position-relative">
          <a class="mx-auto" href="#">
              <img src="../static/logo.png" width="60" height="60" class="rounded-circle">
          </a>
          <button class="navbar-toggler" type="button"
          data-toggle="collapse" data-target=".dual-collapse2">
              <span class="navbar-toggler-icon"></span>
          </button>
      </div>
      <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
          <ul class="navbar-nav mr-auto text-center">
              <li class="nav-item">
                  <router-link to="/todos" class="nav-link">Todos os Produtos</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                  Departamentos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item"><router-link to="/livros">Livros</router-link></a>
                  <a class="dropdown-item"><router-link to="/smartphones">
                    Smartphones
                  </router-link></a>
                  <a class="dropdown-item"><router-link to="/notebooks">
                    Notebooks
                  </router-link></a>
              </div>
              </li>
          </ul>
          <router-link to="/checkout">
          <btn btnColor="btn btn-primary btn-popup"
             :cartIcon="true">
            <span class="btn-circle" v-if="hasProduct()">
               {{ getProductsInCart.length }}
            </span>
          </btn>
          </router-link>
      </div>
    </nav>
    <transition name="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import btn from './components/Btn';
import maskBg from './components/Mask';

export default {
  components: {
    btn,
    maskBg,
  },
  methods: {
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
};
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  body {
    font-family: 'Raleway', sans-serif;
  }
  /*
  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }
  */

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active{
    transition: opacity 1.5s;
  }

  .leave-leave-active {
    transition: opacity 2s reverse;
  }

  .leave-enter, .leave-leave-to {
    opacity: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }
</style>
