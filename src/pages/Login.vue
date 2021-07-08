<template>
  <div>
    <form @submit.prevent="login" class="form">
      <div class="details">
        <h2 class="h2">Login</h2>
        <input
          class="email"
          type="email"
          placeholder="    Email address..."
          v-model="email"
        />
        <input
          type="password"
          placeholder="    password..."
          v-model="password"
          class="email"
        />
        <button type="submit" class="email button">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  margin-top: 300px;
  display: flex;
  justify-content: center;
  .details {
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 400px;
    width: 400px;
    border-radius: 20px;
    background-color: black;
    .h2 {
      color: blanchedalmond;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      line-height: 2rem;
      font-size: 2rem;
      font-weight: bolder;
      font-family: sans-serif;
      margin-bottom: 30px;
    }
    .email {
      margin-bottom: 30px;
      height: 50px;
      border-radius: 20px;
      font-weight: bolder;
    }
    .button {
      font-size: 25px;
      &:hover {
        background-color: blanchedalmond;
        transition: 1s ease-in all;
      }
    }
  }
}
</style>
