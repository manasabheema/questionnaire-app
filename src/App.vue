<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0 auto;
}

p {
  margin: 0.2em 0;
  font-size: 0.9em;
}

h2,
h3 {
  margin: 0.5em 0;
}

button {
  background-color: rgb(0, 185, 241);
  border: none;
  height: 2rem;
  border-radius: 5px;
  margin: 0.2rem auto;
}

ul {
  list-style: none;
}

ul li p::before {
  content: "\2022";
  color: rgb(0, 185, 241);
  font-weight: bolder;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.view-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}

.global-back-arrow {
  padding: 0.2rem;
  width: 1rem;
}

.global-full-width-button {
  width: 100%;
  color: snow;
}

.global-bottom-element {
  margin-top: auto;
}

button[disabled="disabled"],
button:disabled {
  color: rgb(103, 102, 102);
}
</style>
