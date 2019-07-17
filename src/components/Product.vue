<template>
  <div class="product-box">
    <div class="product-image">
      <img :src="currentProduct.image" alt="">
      <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews"/>
    </div>
    <div class="product-info">
      <h2 class="product-title text-center">{{ currentProduct.name }}</h2>
      <span class="product-price">R$ {{ currentProduct.price }}, 00</span>
      <btn btnColor="btn btn-large btn-primary btn-product" :cartIcon="true"
      @click.native="addProductToCart(currentProduct)">
        Adicionar ao Carrinho
      </btn>

      <button type="button" class="btn btn-primary btn-product"
      data-toggle="modal" data-target="#exampleModal">
        Mais informações
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {{ currentProduct.details }}
            </div>
          </div>
        </div>
      </div>

    </div>
    <modal>{{ currentProduct.details }}</modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import stars from './Stars';
import modal from './Modal';

export default {
  components: {
    btn,
    stars,
    modal,
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    border-color: #7181FF;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
    height: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .btn-product {
    width: 300px;
    margin: .3em 0;
  }

  .modal {
    text-align: center;
    padding: 0!important;
  }

  .modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -4px;
  }

  .modal-dialog {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }
</style>
