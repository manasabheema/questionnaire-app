<template>
  <div class="test-view-container">
    <header>
      <img
        src="../assets/back-arrow.png"
        alt="GoBack"
        @click="$router.go(-1)"
        class="global-back-arrow"
      />
      <router-link :to="{ name: '' }" class="link-text"
        ><p>Need Help?</p></router-link
      >
    </header>
    <section>
      <div class="question-header">
        <h2>Certification test</h2>
        <div class="timer">
          <img
            src="../assets/timer.png"
            alt="Clock:"
            class="global-back-arrow"
          />
          <span id="timer-display">mm:ss</span>
        </div>
      </div>
      <div class="question-container">
        <p class="question-number">
          Q{{ currentQuestion?.id + 1 }} of
          {{ totalNumberOfQuestions }}
        </p>
        <h4>{{ currentQuestion?.question }}</h4>
        <label
          v-for="(option, idx) in currentQuestion?.options || []"
          :key="idx"
          class="option-label"
        >
          <input
            type="radio"
            v-model="currentQuestion.selected"
            :value="idx"
            @change="setAnswer"
          /><span>{{ option }}</span>
        </label>
      </div>
    </section>
    <div class="navigate-buttons global-bottom-element">
      <button
        v-if="currentQuestion?.id != 0"
        @click="onClickPrevious"
        class="global-full-width-button"
        :disabled="currentQuestion.selected == null"
      >
        Previous
      </button>
      <button
        v-if="currentQuestion?.id != totalNumberOfQuestions - 1"
        @click="onClickNext"
        class="global-full-width-button"
        :disabled="currentQuestion.selected == null"
      >
        Next
      </button>
      <div v-else class="global-full-width-button">
        <router-link :to="{ name: 'Result' }">
          <button
            @click="onClickSubmit"
            class="global-full-width-button"
            :disabled="currentQuestion?.selected == null"
          >
            Submit
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.commit("questionsModule/setCurrentQuestion", 0);
    });

    const currentQuestion = computed(
      () =>
        store.state.questionsModule.all[
          store.state.questionsModule.currentQuestion
        ]
    );
    const totalNumberOfQuestions = computed(
      () => store.state.questionsModule.all.length
    );

    const onClickPrevious = () => {
      if (store.state.questionsModule.currentQuestion !== 0)
        store.commit(
          "questionsModule/setCurrentQuestion",
          store.state.questionsModule.currentQuestion--
        );
    };

    const onClickNext = () => {
      if (
        store.state.questionsModule.currentQuestion !=
        totalNumberOfQuestions - 1
      )
        store.commit(
          "questionsModule/setCurrentQuestion",
          store.state.questionsModule.currentQuestion + 1
        );
    };

    const onClickSubmit = () => {
      if (
        store.state.questionsModule.currentQuestion ===
        totalNumberOfQuestions - 1
      )
        store.commit("questionsModule/setQuizCompletion", true);
    };

    const setAnswer = (e) => {
      store.commit("questionsModule/setAnswer", e.target.value);
      e.target.value = null;
    };

    return {
      currentQuestion,
      totalNumberOfQuestions,
      onClickPrevious,
      onClickNext,
      onClickSubmit,
      setAnswer,
    };
  },
};
</script>

<style scoped>
.test-view-container {
  padding: 0 0.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}

@media only screen and (min-width: 480px) {
  section {
    padding: 0 20vw;
  }
}

header,
.question-header {
  display: flex;
  justify-content: space-between;
}

header {
  padding-top: 1em;
  padding-bottom: 1em;
}

.link-text {
  color: rgb(0, 185, 241);
  font-style: italic;
}

.timer {
  display: flex;
  align-items: center;
}

.question-number {
  font-weight: bold;
  color: rgb(65, 105, 225);
}

.option-label {
  display: flex;
  flex: 1;
}

.option-label input[type="radio"] {
  margin: 0 1rem 0 0.5rem;
  width: 1rem;
}

.navigate-buttons {
  display: flex;
  justify-content: space-between;
}

.navigate-buttons :not(:last-child) {
  margin-right: 0.2rem;
}
.navigate-buttons :not(:first-child) {
  margin-left: 0.2rem;
}
</style>
