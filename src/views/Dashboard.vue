<template>
  <div>
    <div class="header-container">
      <div class="company company-welcome">Active Acquisitions <span class="company__count">{{ companyCount }}</span></div>
      <button @click="showNewCompanyModal()" class="company company__addMerger">Add new merger</button>
    </div>
    <Acquisitions />
  </div>
</template>

<script>
import Acquisitions from "@/components/Acquisitions";
import NewCompanyModal from "@/components/NewCompanyModal";
import { mapGetters } from 'vuex'
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters({ currentCompanies: 'getCompanies'}),
    companyCount: function () {
      return this.currentCompanies.length
    }
  },
  components: { Acquisitions },
  methods: {
    showNewCompanyModal: function (){
      this.$modal.show(NewCompanyModal, {}, { height: 'auto' })
    }
  }
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

  &__count {
    background: white;
    padding: .6rem 1.3rem;
    text-align: center;
    border-radius: 100%;
    color: #177e89;
  }

  &__addMerger {
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
