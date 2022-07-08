<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <router-link :to="{ name: 'TestIntro' }"
      ><button>Go Back to Test Introduction</button></router-link
    >
  </div>
</template>

<style scoped>
h1 {
  color: crimson;
}
h2 {
  color: rgb(29, 49, 41);
}

.not-found {
  text-align: center;
  padding: 5rem;
}
</style>
