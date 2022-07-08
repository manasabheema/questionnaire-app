import { createStore } from "vuex";

import { questionsModule } from "@/Modules/questionsModule";

export default createStore({
  modules: { questionsModule },
});
