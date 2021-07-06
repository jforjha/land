<template>
  <footer>
    <div class="footer">
      <div class="media-icons">
        <a href="#"><img class="icon1" src="../assets/facebook.png" alt=""/></a>
        <a href="#"><img class="icon2" src="../assets/linkedin.png" alt=""/></a>
        <a href="#"
          ><img class="icon3" src="../assets/instagram.png" alt=""
        /></a>
      </div>
      <div class="terms">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p class="copyright">© 2017 Alconomy Technologies pvt ltd.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}
.footer {
  background-color: gold;
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  .media-icons {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .icon1 {
      height: 50px;
      width: 50px;
      object-fit: contain;
      padding-left: 10px;
      padding-right: 10px;
    }
    .icon2 {
      height: 50px;
      width: 50px;
      object-fit: contain;
      padding-left: 10px;
      padding-right: 10px;
    }
    .icon3 {
      height: 50px;
      width: 50px;
      object-fit: contain;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .terms {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
