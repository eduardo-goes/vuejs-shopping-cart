<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Faça login</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control"
                placeholder="E-mail" v-model="email" required autofocus>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword"
                class="form-control" placeholder="Password" v-model="password" required>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase"
              v-on:click="login">Entrar</button>

              <button class="btn btn-lg btn-primary btn-block text-uppercase"
              @click="$router.push('signup')">Registre-se</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  /* eslint-disable */
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => { this.$router.replace('/contato'); }).catch((err) => {
        alert(err.message);
      });
    },
  },
};
</script>
<style scoped>
  :root {
    --input-padding-x: 1.5rem;
    --input-padding-y: .75rem;
  }

  .card-signin {
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  }

  .card-signin .card-title {
    margin-bottom: 2rem;
    font-weight: 300;
    font-size: 1.5rem;
  }

  .card-signin .card-body {
    padding: 2rem;
  }

  .form-signin {
    width: 100%;
  }

  .form-signin .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: .1rem;
    font-weight: bold;
    padding: 1rem;
    transition: all 0.2s;
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }
</style>
