import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Contato from '../components/Contato';
import Login from '../components/Login';
import AllProducts from '../components/AllProducts';
import AllSmartphones from '../components/AllSmartphones';
import AllNotebooks from '../components/AllNotebooks';
import AllBooks from '../components/AllBooks';
import SignUp from '../components/SignUp';
import Product from '../components/Product';
import Home from '../components/Home';
import CartCheckout from '../components/CartCheckout';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/todos',
      name: 'Todos os Produtos',
      component: AllProducts,
      meta: {
        title: 'Livraria Ocean - Todos os Produtos',
      },
    },
    {
      path: '/smartphones',
      name: 'Smartphones',
      component: AllSmartphones,
      meta: {
        title: 'Livraria Ocean - Smartphones',
      },
    },
    {
      path: '/notebooks',
      name: 'Notebooks',
      component: AllNotebooks,
      meta: {
        title: 'Livraria Ocean - Notebooks',
      },
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
      meta: {
        title: 'Livraria Ocean - Produto',
      },
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
      meta: {
        title: 'Livraria Ocean - Checkout',
      },
    },
    {
      path: '/livros',
      name: 'Livros',
      component: AllBooks,
      meta: {
        title: 'Livraria Ocean - Livros',
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Livraria Ocean',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Livraria Ocean - Login',
      },
    },
    {
      path: '/signup',
      name: 'Registro',
      component: SignUp,
      meta: {
        title: 'Livraria Ocean - Registro',
      },
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato,
      meta: {
        requiresAuth: true,
        meta: {
          title: 'Livraria Ocean - Contato',
        },
      },
    },
  ],
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else next();
});

export default router;
