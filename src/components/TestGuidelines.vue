<template>
  <div class="test-intro-container">
    <header class="container">
      <div class="test-intro-header">
        <h2 class="">Take the test now</h2>
        <img
          src="../assets/thumbs-up.png"
          alt="All The Best"
          class="thumbsup"
        />
      </div>
      <p class="test-intro-subheading">
        Clear this certification exam to become a certified insurance agent.
      </p>
      <img src="../assets/cloud.png" alt="" class="cloud-img" />
    </header>
    <div class="instructions">
      <h3>Instructions:</h3>
      <table class="instructions-table">
        <tr v-for="(instruction, idx) in instructions" :key="idx">
          <td style="width: 50%">
            <p>{{ instruction?.instructionKey }}</p>
          </td>
          <td style="width: 50%">
            <p>{{ instruction?.instructionValue }}</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="guidelines">
      <h3>Please note:</h3>
      <ul>
        <li v-for="(note, idx) in guidelines" :key="idx">
          <p>{{ note }}</p>
        </li>
      </ul>
    </div>
    <router-link :to="{ name: 'TestsView' }" class="global-bottom-element"
      ><button class="global-full-width-button">Start Test</button></router-link
    >
  </div>
</template>

<script>
import { instructions, guidelines } from "@/dataStore";

export default {
  setup() {
    return {
      instructions,
      guidelines,
    };
  },
};
</script>

<style scoped>
.test-intro-container {
  height: 100%;
  padding: 0 0.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

@media only screen and (min-width: 480px) {
  .test-intro-container {
    padding: 0 20vw;
  }
}

.test-intro-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.thumbsup {
  width: 4rem;
}

.cloud-img {
  width: 100%;
  position: relative;
  top: -0.8rem;
  right: -0.6rem;
  z-index: -1;
}

.instructions-table {
  width: 100%;
}

.guidelines {
  border: 0.5px solid rgb(173, 172, 172);
  border-radius: 5px;
  margin: 0.5em auto;
  padding: 0.5em;
}
</style>
