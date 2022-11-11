<template>
  <div class="home container">
    <div>
      <img class="me" src="../assets/ali2.png" />
      <h1>علي حسين العبدالله</h1>
      <p>Front End Developer</p>

      <div class="list">
        <a target="_blank" href="https://instagram.com/dev_marten"
          ><img src="../assets//imgs/instagram.png"
        /></a>

        <a target="_blank" href="https://wa.me/966565595718"
          ><img src="../assets//imgs/whatsapp.png"
        /></a>

        <a target="_blank" href="https://github.com/iallawi50"
          ><img src="../assets//imgs/github.png"
        /></a>

        <a
          target="_blank"
          href="https://profile.satr.codes/iallawi50/public/overview"
          ><img src="../assets//imgs/safcsp.png"
        /></a>
      </div>
      <router-link to="/about"><button>شاهد أعمالي</button></router-link>
    </div>
    <div class="img">
      <img src="../assets/imgs/home4.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style lang="scss">
body {
  min-height: 100vh;
  position: relative;
}
.home {
  color: var(--mainColor);
  @media (min-width: 800px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 20px;
  text-align: center;
  flex-direction: row-reverse;
  img.me {
    width: 200px;
    height: 200px;
    border-radius: 20%;
    border: solid 3px var(--mainColor);
  }

  h1 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  p {
    margin: 0;
  }

  .img {
    max-width: 700px;
    img {
      padding: 30px;
      max-width: 80%;
      animation: scale 1s infinite alternate;
    }
  }
  @media (max-width: 800px) {
    & {
      flex-direction: column;
      text-align: center;
    }
    .img {
      margin: 0 auto;
    }
  }

  .list {
    display: flex;
    flex-direction: row;
    align-content: center;
    img {
    transition: 0.3s;
      opacity: 0.5;
      margin: 10px;
      width: 30px;
      &:hover {
        opacity: 1;
      }
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
