<template>
  <section>
    <header>
      <div class="test-result-header">
        <h2>{{ results?.message }}</h2>
        <img
          v-if="isSuccess"
          src="../assets/pass.png"
          alt=""
          class="result-card"
        />
        <img v-else src="../assets/fail.png" alt="" class="result-card" />
      </div>
      <p class="gray-italic-text">You Scored</p>
      <h1 :class="['marks-font', results?.color]">
        {{ obtainedMarks }}/{{ totalNumberOfQuestions }}
      </h1>
      <p>{{ results?.note }}</p>
    </header>
    <div class="global-bottom-element">
      <router-link :to="{ name: 'TestIntro' }" class="global-bottom-element"
        ><button @click="onResetQuestions" class="global-full-width-button">
          {{ isSuccess ? "Complete Registration" : "Try Again" }}
        </button></router-link
      >
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

import { successResults, failureResults } from "@/dataStore";

export default {
  props: {
    obtainedMarks: {
      type: Number || null,
      required: true,
    },
    isSuccess: {
      type: Boolean || null,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const totalNumberOfQuestions = computed(
      () => store.state.questionsModule.all.length
    );
    const results = computed(() =>
      props.isSuccess ? successResults : failureResults
    );

    const onResetQuestions = () => {
      store.dispatch("questionsModule/onResetData");
    };
    return {
      results,
      totalNumberOfQuestions,
      onResetQuestions,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  flex-grow: inherit;
  flex: 1;
  height: 100%;
  padding: 0 0.6rem;
}

@media only screen and (min-width: 480px) {
  section {
    padding: 0 20vw;
  }
}

.test-result-header {
  display: flex;
  justify-content: space-between;
}

.result-card {
  width: 7em;
}

.gray-italic-text {
  font-style: italic;
  color: gray;
  font-weight: 200;
}

.marks-font {
  margin: 0.5em auto;
  font-size: 2.5rem;
}
.red {
  color: red;
}

.green {
  color: green;
}
</style>
