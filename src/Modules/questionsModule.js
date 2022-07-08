// import { questions } from "@/dataStore";

export const questionsModule = {
  namespaced: true,
  state() {
    return {
      all: [],
      currentQuestion: 0,
      isQuizCompleted: false,
    };
  },
  getters: {},
  mutations: {
    getOriginalQuestions(state, questions) {
      if (state.all.length < 1) state.all = questions;
    },
    setCurrentQuestion(state, currentQuestion) {
      state.currentQuestion = currentQuestion;
    },
    setAnswer(state, selectedAnswer) {
      state.all[state.currentQuestion].selected = selectedAnswer;
      console.log("current question: ", state.all[state.currentQuestion]);
    },
    setQuizCompletion(state, isDone) {
      state.isQuizCompleted = isDone;
    },

    resetQuestionnaire(state) {
      const data = state.all.map((que) => {
        let question = { ...que, selected: null };

        return question;
      });
      state.all = data || [];
    },
  },
  actions: {
    onResetData(ctx) {
      ctx.commit("resetQuestionnaire");
    },
  },
};
