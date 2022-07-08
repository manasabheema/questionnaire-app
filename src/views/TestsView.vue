<template>
  <div>
    <test-screen />
  </div>
</template>

<script>
// import { onMounted } from "vue";
// import { useStore } from "vuex";

import TestScreen from "@/components/TestScreen.vue";
// import { questions } from "@/dataStore";

export default {
  name: "TestsView",
  components: {
    TestScreen,
  },
  setup() {
    // const store = useStore();
    // onMounted(() => {
    //   store.commit("questionsModule/getOriginalQuestions", questions);
    // });
  },
};
</script>
