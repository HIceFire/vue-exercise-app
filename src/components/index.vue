<template lang="html">
  <div id="content">
    <div class="banner">
      <div class="banner-content">
        <h1>Simplify Continuous Delivery</h1>
        <p>Open source continuous delivery<br>server to model and visualize complex workflows with ease</p>
      </div>
      <div class="banner-download">
        <a href="#">Download Now</a>
      </div>
    </div>
    <div v-for="product in products" id="products">
      <div class="product">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" alt="">
        <p>{{ product.content }}</p>
      </div>
    </div>
    <div class="footer">
      <span><a href="#">See more GoCD features</a></span>
    </div>
  </div>
</template>

<script>
import JSON_INDEX from '../data/index.json'
export default {
  data () {
    return {
      products: JSON_INDEX.data,
    }
  }
}
</script>

<style lang="css">


.banner {
  height: 250px;
  background: url('https://www.gocd.io/assets/images/go-banner-phone-30701141.jpg') no-repeat;
  background-position: center 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.banner-content {
  height: 170px;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
}

.banner-content h1 {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 10px;
}

.banner-content p {
  text-shadow: 0px 0px 2px #969696;
  font-weight: 300;
  line-height: 1.5;
  word-spacing: 1px;

}
.banner-download {
  width: 300px;
  margin-top: 10px;
}
.banner-download a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #94399E;
  border-color: #82328b;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  font-weight: 300;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed #ccc;
  padding: 20px 0;
}

.product h2 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}
.product img {
  width: 50%;
  margin-top: 20px;
  margin-bottom: 25px;
}
.product p {
  color: #777;
  font-weight: 300;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 10px;
  line-height: 1.5;
  /*text-align: justify;*/
}

.footer {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer span {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.footer a {
  text-decoration: none;
}

</style>
