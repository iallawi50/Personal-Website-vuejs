<template>
  <div class="work container">
    <my-work
      v-for="(work, i) in works"
      :key="i"
      :title="work.title"
      :link="work.link"
      :img="work.photo"
      :langs="work.langs"
    />
  </div>
</template>

<script>
import MyWork from "@/components/WorkComponent.vue";
export default {
  name: "PortfolioView",
  components: {
    MyWork,
  },
  data: function () {
    return {
      works: [
        {
          title: "موقعي الشخصي (الحالي)",
          photo: "marten-logo.png",
          link: "https://ali-alabdullah.netlify.app/",
          langs: ["html", "css", "sass", "javascript", "vuejs"],
        },

        {
          title: "موقع جدولي",
          photo: "gdwle.png",
          link: "https://gdwle.com",
          langs: ["html", "css", "javascript"],
        },
        {
          title: "نادي البرمجة والذكاء الاصطناعي",
          photo: "programmers-club.png",
          link: "https://programmers-club-tvtc.netlify.app/",
          langs: ["html", "css", "javascript"],
        },
        {
          title: "متجر سمارت ستور",
          photo: "smartstore.png",
          link: "https://smarrtstor.com/",
          langs: ["salla"],
        },
        {
          title: "متجر العناية بالاذن",
          photo: "alanayet-balazn.png",
          link: "https://salla.sa/mgmwat-alanayet-balazn",
          langs: ["salla"],
        },
        {
          title: "متجر بي كودز",
          photo: "b-codes.png",
          link: "https://b-codes.com/",
          langs: ["salla"],
        },
        {
          title: "موقع عاداتي ومهاراتي",
          photo: "habitsandskills.png",
          link: "http://habitsandskills.herokuapp.com/",
          langs: ["html", "css", "bootstrap", "php", "laravel"],
        },

        {
          title: "قالب بحث",
          photo: "marten-search.png",
          link: "https://marten-search.netlify.app/",
          langs: ["html", "css", "javascript", "php"],
        },

        {
          title: "موقعي الشخصي ( السابق )",
          photo: "me.png",
          link: "https://ali-al-abdullah.netlify.app/",
          langs: ["html", "css", "javascript", "bootstrap"],
        },

        {
          title: "قالب ليون",
          photo: "lion.png",
          link: "https://iallawi50.github.io/Template-Number-One",
          langs: ["html", "css"],
        },
        {
          title: "قالب كاسبر",
          photo: "kasper.png",
          link: "https://iallawi50.github.io/Template-Number-Two",
          langs: ["html", "css"],
        },
        {
          title: "قالب مارتن",
          photo: "marten.png",
          link: "https://iallawi50.github.io/Template-Number-Three",
          langs: ["html", "css"],
        },
        {
          title: "قالب مولي",
          photo: "molly.png",
          link: "https://iallawi50.github.io/Template-Number-Four",
          langs: ["html", "css"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.work {
  display: grid;
  gap: 30px;
  justify-content: center;
  margin: 40px auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  direction: rtl;
}
</style>
