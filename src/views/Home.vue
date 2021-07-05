<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Investment Made Easy</h4>
        <hr />
        <h2>With Coin Ramen <br /></h2>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.hero {
  background: url("../assets/btc.jpg") center center / cover no-repeat fixed;
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    color: #fff;
    padding-bottom: 45px;
    padding-left: 55px;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
