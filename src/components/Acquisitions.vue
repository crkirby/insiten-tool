<template>
  <fragment>
    <div class="container">
      <h1 class="company company--comparable"></h1>
      <h1 class="company company--name">Name</h1>
      <h1 class="company company--state">Location</h1>
      <h1 class="company company--dateCreated">Date Created</h1>
      <h1 class="company company--gross">Gross</h1>
      <h1 class="company company--status">Status</h1>
      <h1 class="company company--emps">Employees</h1>
      <h1 class="company company--actions">Actions</h1>

      <fragment v-for="(company, idx) in companies" :key="idx">
        <div
          :class="
            `company company--comparable company--comparable-${growth(
              company.comparableGrowth
            )}`
          "
        ></div>
        <div class="company company--name">{{ company.name }}</div>
        <div class="company company--state">{{ company.state }}</div>
        <div class="company company--date">{{ company.dateCreated }}</div>
        <div class="company company--gross">
          {{ company.grossRevenue | toFiat }}
        </div>
        <div class="company company--status">{{ company.status }}</div>
        <div class="company company--emps">{{ company.emps }}</div>
        <button
          @click="showEditCompanyModal(company)"
          class="company company--editBtn"
        >
          Edit
        </button>
      </fragment>
    </div>
  </fragment>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import EditCompanyModal from "@/components/EditCompanyModal";

export default {
  name: "Acquisitions",
  computed: {
    ...mapGetters({ companies: "getCompanies" })
  },
  methods: {
    ...mapMutations(["SET_CURRENT_COMPANY"]),
    growth: function(comparable) {
      if (comparable > 0) {
        return "up";
      } else if (comparable === 0) {
        return "default";
      } else return "down";
    },
    showEditCompanyModal: function(company) {
      this.SET_CURRENT_COMPANY(company);
      this.$modal.show(EditCompanyModal, {}, { height: "auto", adaptive: true });
    }
  }
};
</script>

<style lang="scss">
.container {
  padding: 0 2.5rem;
  box-shadow: none;

  margin-bottom: 3rem;
  display: grid;
  grid-template-rows: 7rem repeat(1, 1fr);
  grid-template-columns: 0.35fr repeat(6, 1fr) 1fr;
  grid-row-gap: 1rem;
  justify-items: center;
}

.company {
  font-size: 1.5rem;
  color: #084c61;
  text-align: center;

  &:not(.company--comparable) {
    padding: 3.8rem 0;
    align-self: center;
  }

  &--growth {
    justify-self: end;
    margin-right: 1.5rem;
    width: 15%;
  }

  &--comparable {
    border-radius: 3.6rem;
    margin-right: 1.5rem;
    width: 12%;

    &-default {
      background: #ffc857;
    }

    &-down {
      background: #de1f26;
    }

    &-up {
      background: forestgreen;
    }
  }

  &--editBtn {
    width: 75%;
    background: #177e89;
    box-shadow: 0.4rem 0.4rem 0.4rem lightgrey;
    border-radius: 0.3rem;
    color: white;
    justify-self: center;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}
@media (max-width: 54.6rem) { 
    * {
      font-size: 38.5%;
    }
  }
</style>
