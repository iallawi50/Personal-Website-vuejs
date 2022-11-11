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
  components: {
    MyWork,
  },
  data: function () {
    return {
      works: [
        {
          title: "موقع جدولي",
          photo: "gdwle.png",
          link: "https://gdwle.com",
          langs: ["html", "css", "javascript"],
        },
        {
          title: "موقع عاداتي ومهاراتي",
          photo: "habitsandskills.png",
          link: "http://habitsandskills.herokuapp.com/",
          langs: ["html", "css", "bootstrap", "laravel"],
        },
        {
          title: "موقع مشاريعي",
          photo: "code.png",
          link: "http://myprojects-cm.herokuapp.com/login",
          langs: ["html", "css", "bootstrap", "laravel"],
        },
    
        {
          title: "موقعي الشخصي ( السابق )",
          photo: "code.png",
          link: "https://iallawi50.github.io/Template-Number-One",
          langs: ["html", "css", "javascript", "bootstrap"],
        },
    
        {
          title: "قالب 1",
          photo: "code.png",
          link: "https://iallawi50.github.io/Template-Number-One",
          langs: ["html", "css"],
        },
        {
          title: "قالب 2",
          photo: "code.png",
          link: "https://iallawi50.github.io/Template-Number-Two",
          langs: ["html", "css"],
        },
        {
          title: "قالب 3",
          photo: "code.png",
          link: "https://iallawi50.github.io/Template-Number-Three",
          langs: ["html", "css"],
        },
        {
          title: "قالب 4",
          photo: "code.png",
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
