<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Investment Made Easy</h4>
        <hr class="" />
        <h2>With <span>Coin Ramen</span><br /></h2>
        <!-- <button class="button">Get Started</button> -->
        <hr />
      </div>
    </section>
    <section class="second-page">
      <div class="first">
        <div class="first-content">
          <h1 class="h1">
            "The beginning of a great day begins a night before"
          </h1>
          <p class="p">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
        <img
          class="image"
          src="../assets/cards/card1.jpg"
          alt="card1"
          height="200"
          width="200"
        />
      </div>
      <div class="first">
        <div class="first-content">
          <h1 class="h1">
            "Innovation is the outcome of a habit, not a random act"
          </h1>
          <p class="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <img
          class="image"
          src="../assets/cards/card2.jpg"
          alt=""
          height="200"
          width="200"
        />
      </div>
      <div class="first">
        <div class="first-content">
          <h1 class="h1">
            "Plan your next move because every step contributes towards your
            goal"
          </h1>
          <p class="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
        <img
          class="image"
          src="../assets/cards/card3.jpg"
          alt=""
          height="200"
          width="200"
        />
      </div>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: { Footer },
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
      span {
        color: #e5d2a5;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
      background-color: #e5d2a5;
      height: 1px;
      border: none;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #e5d2a5;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
.second-page {
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  .first {
    min-height: 100vh;
    min-width: 100vw;
    // border: black solid 5px;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
    }
    .first-content {
      // border: black solid 5px;
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      margin-left: 250px;
      margin-bottom: 40px;
      @media (max-width: 768px) {
        margin-left: 10px;
        align-items: center;
      }

      .h1 {
        // border: black solid 5px;
        display: block;
        font-size: 3rem;
        font-weight: bolder;
        margin-top: 60px;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          font-size: 30px;
        }
      }
      .p {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .image {
      height: 450px;
      width: 450px;
      object-fit: contain;
      border-radius: 80px;
      margin-right: 200px;
      margin-left: 50px;

      &:hover {
        transform: scale(1.1);
        transition: ease-in-out 1s all;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        height: 350px;
        width: 350px;
        object-fit: contain;
        border-radius: 40px;
        margin: auto;
      }
    }
  }
}
</style>
