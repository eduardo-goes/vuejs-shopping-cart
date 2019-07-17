<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Deixe aqui o seu comentário!</h5>
            <form class="form-depoimento">
              <div class="form-label-group">
                <textarea type="text" id="inputComment"
                class="form-control" placeholder="Comentário" v-model="comment"
                required> </textarea>
              </div>
              <button class="btn btn-lg btn-primary btn-block"
              v-on:click="addComentario">Deixe o seu comentário! </button>

              <button class="btn btn-lg btn-block btn-danger"
              v-on:click="logout"> Sair </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ul class="commentList">
      <li v-for="(comment, index) in comments" :key="index" class="comment card">
        <div class="card-body">
          <h1 class="card-title text-center"> {{ comment.email }} </h1>
          <p> {{ comment.comment }} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';

export default {
  /* eslint-disable */
  name: 'Comentarios',
  data() {
    return {
      comments: [],
      comment: '',
    };
  },
  firestore() {
    return {
      comments: db.collection('comments').orderBy('createdAt')
    }
  },
  methods: {
    addComentario(comentario) {
      var email = firebase.auth().currentUser.email;
      var comment = this.comment;
      const createdAt = new Date();
      db.collection('comments').add({ email, comment, createdAt });
      this.comment = '';
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
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
