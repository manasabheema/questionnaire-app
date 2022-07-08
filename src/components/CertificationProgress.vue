<template>
  <div class="fixed-top-bar">
    <header>
      <img
        src="../assets/back-arrow.png"
        alt="GoBack"
        class="back-arrow global-back-arrow"
        @click="isSuccess && $router.go(-1)"
      />
      <img
        src="https://insurance-blog-cms.paytminsurance.co.in/logo_e79d0e811a.svg"
        alt=""
        class="paytm-logo"
      />
    </header>
    <div class="progress-bar">
      <div class="tick-container">
        <img src="../assets/done-mark.png" alt="Done" class="tick-mark" />
        <p class="progress-description completed">Basic&nbsp;Details</p>
      </div>
      <hr class="horizontal" />
      <div class="tick-container">
        <img src="../assets/done-mark.png" alt="Done" class="tick-mark" />
        <p class="progress-description completed">Bank&nbsp;Details</p>
      </div>
      <hr class="horizontal" />
      <div v-if="isSuccess" class="tick-container">
        <img src="../assets/done-mark.png" alt="Now" class="tick-mark" />
        <p class="progress-description completed">Certification</p>
      </div>
      <div v-else class="tick-container">
        <div class="tick-mark active-mark"></div>
        <p class="progress-description incomplete">Certification</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSuccess: {
      type: Boolean || null,
      required: true,
    },
  },
};
</script>

<style scoped>
.fixed-top-bar {
  position: sticky;
  top: 0;
}

header {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 247, 251);
}
.back-arrow {
  position: absolute;
  left: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
}

.paytm-logo {
  width: 6rem;
}

.progress-bar {
  text-align: center;
  position: relative;
  top: -0.5rem;
  padding-bottom: 1em;
  margin-bottom: 1em;
}

.tick-container {
  position: relative;
  top: -0.2rem;
  display: inline-block;
}
.tick-mark {
  width: 0.8rem;
  position: relative;
}

.progress-description {
  position: absolute;
  left: -2rem;
  margin-top: -0.05rem;
  background-color: white;
}

.incomplete {
  font-style: italic;
  color: rgb(80, 80, 80);
}

.active-mark {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  border: 0.05rem solid green;
  border-radius: 50%;
}

.horizontal {
  display: inline-block;
  width: 30vw;
}
</style>
