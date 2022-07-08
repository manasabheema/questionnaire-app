<template>
  <div class="view-container">
    <certification-progress :isSuccess="false" />
    <test-guidelines />
  </div>
</template>

<script>
// import { onMounted } from "vue";
import { useStore } from "vuex";

import CertificationProgress from "@/components/CertificationProgress.vue";
import TestGuidelines from "@/components/TestGuidelines.vue";
import { questions } from "@/dataStore";

export default {
  name: "TestIntroduction",
  components: {
    CertificationProgress,
    TestGuidelines,
  },
  setup() {
    const store = useStore();
    store.commit("questionsModule/getOriginalQuestions", questions);
    return {};
  },
};
</script>
