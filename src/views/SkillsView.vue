<template>
  <div class="container">

  <h1 class="main-title">لغات البرمجة</h1>
    <div class="langs">
      <div class="box" v-for="(skill, i) in skills.langs" :key="i">
        <div class="img-holder">
          <img :src="require(`@/assets/imgs/${skill.img}`)" alt= />
        </div>

        <span>{{ skill.title }}</span>
      </div>
    </div>
  <h1 class="main-title">اطر العمل</h1>
    <div class="langs">
      <div class="box" v-for="(skill, i) in skills.frameworks" :key="i">
        <div class="img-holder">
          <img :src="require(`@/assets/imgs/${skill.img}`)" alt= />
        </div>

        <span>{{ skill.title }}</span>
      </div>
    </div>
  <h1 class="main-title">المكتبات</h1>
    <div class="langs">
      <div class="box" v-for="(skill, i) in skills.librarys" :key="i">
        <div class="img-holder">
          <img :src="require(`@/assets/imgs/${skill.img}`)" alt= />
        </div>

        <span>{{ skill.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsView",
  data: function () {
    return {
      skills: {
        langs: [
          {
            title: "HTML",
            img: "html.png",
          },
          {
            title: "CSS",
            img: "css.png",
          },
          {
            title: "JavaScript",
            img: "javascript.png",
          },
          {
            title: "SASS",
            img: "sass.png",
          },
        ],
        frameworks: [
          {
            title: "VUEJS",
            img: "vuejs.png",
          },
        ],
        librarys: [
          {
            title: "Bootstrap",
            img: "bootstrap.png",
          },
          {
            title: "Swiper",
            img: "swiper.png",
          },
        ],
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.main-title {
  margin-top: 50px;
  color: var(--mainColor);
  text-align: center;
}
  .langs {
    display: grid;
    gap: 30px;
    justify-content: center;
    margin: 40px auto;
    grid-template-columns: repeat(auto-fit, 140px);
    direction: rtl;
    .box {
      margin-bottom: 0;
      width: 100%;
      text-align: center;

      .img-holder {
      background: #fbfbfb;
      overflow: hidden;
          img {
            width: 100%;
            transition: 0.3s;
            &:hover {
              transform: rotate(2deg) scale(1.7);
            }

      }
      }
      span {
        padding: 10px;
        color: white;
        background: var(--mainColor);
        border-radius: 0 0 15px 15px;
        display: block;
      }

  

    }
  }
</style>