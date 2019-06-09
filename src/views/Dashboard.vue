<template>
  <div>
    <div class="header-container">
      <div class="company company-welcome">Active Acquisitions</div>
      <button class="company company-addMerger">Add new merger</button>
    </div>
    <Acquisitions />
  </div>
</template>

<script>
import Acquisitions from "@/components/Acquisitions";
export default {
  name: "Dashboard",
  components: { Acquisitions }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header-container {
  padding: 1rem;
  height: 10rem;
  background: #177e89;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.company {
  padding: 2rem;
  color: whitesmoke;
  font-size: 2.4rem;

  &-addMerger {
    background: #de1f26;
    border: none;
    box-shadow: 0.3rem 0.5rem 0.3rem #084c61;
    border-radius: 0.3rem;

    &:hover {
      margin-bottom: 0.3rem;
    }

    &:active {
      margin-top: 0.5rem;
    }
  }
}
</style>
