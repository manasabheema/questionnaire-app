<template>
  <div class="view-container">
    <certification-progress :isSuccess="isSuccess" />
    <test-result :isSuccess="isSuccess" :obtainedMarks="obtainedMarks" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

import CertificationProgress from "@/components/CertificationProgress.vue";
import TestResult from "@/components/TestResult.vue";

export default {
  name: "Results-View",
  components: {
    CertificationProgress,
    TestResult,
  },
  setup() {
    const store = useStore();
    const obtainedMarks = computed(() => {
      let marks = 0;
      store.state.questionsModule.all.forEach((question) => {
        if (
          question.selected !== null &&
          parseInt(question.selected, 10) === question.answer
        ) {
          marks++;
        }
      });
      return marks;
    });
    const isSuccess = computed(
      () => obtainedMarks.value / store.state.questionsModule.all.length >= 0.4
    );

    return {
      obtainedMarks,
      isSuccess,
    };
  },
};
</script>
