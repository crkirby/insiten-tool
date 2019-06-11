<template>
  <div class="current-company">
    <h1 class="heading-title--lg">Create a new target</h1>

    <h2 class="heading-title--sm">Company Info</h2>
    <div class="info">
      <div class="info__name">
        <label>Name</label>
        <input
          autocomplete="off"
          name="name"
          type="text"
          v-model.trim="company.name"
          placeholder="Enter company name"
        />
      </div>
      <div class="info__address">
        <label>Address</label>
        <input
          autocomplete="off"
          name="address"
          type="text"
          v-model.trim="company.address"
          placeholder="Enter address (e.g., 123 abc rd)"
        />
      </div>
      <div class="info__state">
        <label>State</label>
        <input
          autocomplete="off"
          name="state"
          type="text"
          v-model.trim="company.state"
          placeholder="Enter the (city, state)"
        />
      </div>
      <div class="info__phoneNumber">
        <label>Phone number</label>
        <input
          autocomplete="off"
          name="phoneNumber"
          type="text"
          v-model.trim="company.phoneNumber"
          placeholder="Enter phone number"
        />
      </div>
      <div class="info__website">
        <label>Website</label>
        <input
          autocomplete="off"
          name="website"
          type="text"
          v-model.trim="company.website"
          placeholder="Enter website url"
        />
      </div>
      <div class="info__type">
        <label>Type</label>
        <input
          autocomplete="off"
          name="type"
          type="text"
          v-model.trim="company.type"
          placeholder="Enter type of business"
        />
      </div>
    </div>

    <h2 class="heading-title--sm">Financial Performance</h2>
    <div class="financials">
      <div class="financials__gross">
        <label>Gross Revenue</label>
        <input
          name="grossRevenue"
          type="number"
          min="0"
          v-model.number="company.grossRevenue"
          placeholder="Enter gross revenue"
        />
      </div>
      <div class="financials__comparable">
        <label>Comparable Growth</label>
        <input
          name="comparableGrowth"
          type="number"
          step="0.01"
          v-model.number="company.comparableGrowth"
          placeholder="Enter comparable growth"
        />
      </div>
      <div class="financials__employees">
        <label>Employees</label>
        <input
          name="emps"
          type="number"
          min="0"
          v-model.number="company.emps"
          placeholder="Enter number of employees"
        />
      </div>
    </div>

    <h2 class="heading-title--sm">Merger status</h2>
    <div class="merger">
      <div class="merger__status">
        <label>Status</label>
        <input
          name="status"
          type="text"
          v-model.trim="company.status"
          placeholder="Enter status"
        />
      </div>
    </div>

    <div class="key-contacts">
      <h3 class="heading-title--sm">
        Key Contacts
        <img
          :src="plusSignImage"
          class="image-plus"
          v-if="canAddKeyContact"
          @click="showAddContactField()"
        />
      </h3>

      <div class="new-contact" v-if="showContactField">
        <img
          class="image-cancel"
          :src="cancelImage"
          @click="hideAddContactField()"
        />
        <input
          @input="addNewContact($event)"
          name="name"
          v-model.trim="newContact.name"
          type="text"
          placeholder="Enter contact name"
        />
        <input
          @input="addNewContact($event)"
          name="title"
          v-model.trim="newContact.title"
          type="text"
          placeholder="Enter professional title"
        />
        <input
          @input="addNewContact($event)"
          name="number"
          v-model.trim="newContact.number"
          type="text"
          placeholder="Enter contact number"
        />
      </div>

      <ul v-for="contact in company.keyContacts" :key="contact.id">
        <li class="no-dot">
          <img
            :src="trashImage"
            class="image-trash"
            @click="removeKeyContact(contact.id)"
          />
          <input
            name="name"
            type="text"
            v-model.trim="contact.name"
            placeholder="Enter contact name"
          />
          <input
            name="title"
            type="text"
            v-model.trim="contact.title"
            placeholder="Enter professional title"
          />
          <input
            name="number"
            type="text"
            v-model.trim="contact.number"
            placeholder="Enter contact number"
          />
        </li>
      </ul>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn__cancel" @click="closeModal()">
        Cancel
      </button>

      <button type="button" class="btn btn__save" @click="saveChanges()">
        Save changes
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import trashCan from "@/assets/trash.png";
import plusSign from "@/assets/add.png";
import cancel from "@/assets/cancel.png";

export default {
  name: "NewCompanyModal",
  data: function() {
    return {
      showContactField: false,
      company: { dateCreated: new Date().toLocaleDateString() },
      newContact: {},
      canAddKeyContact: true
    };
  },
  computed: {
    trashImage: function() {
      return trashCan;
    },
    plusSignImage: function() {
      return plusSign;
    },
    cancelImage: function() {
      return cancel;
    }
  },
  methods: {
    ...mapMutations(["ADD_COMPANY"]),
    closeModal: function() {
      this.$emit("close");
    },
    addNewContact: function({ target: { name: key, value } }) {
      this.newContact[key] = value;
    },
    hideAddContactField: function() {
      this.newContact = {};
      this.showContactField = false;
    },
    showAddContactField: function() {
      this.showContactField = true;
    },
    removeKeyContact: function(id) {
      this.company.keyContacts = this.company.keyContacts.filter(
        contact => contact.id !== id
      );
    },
    saveChanges: function() {
      const contactValues = Object.values(this.newContact);
      if (contactValues.length === 3) {
        const containsEmptyValues = contactValues.some(
          val => val.trim() === ""
        );
        if (!containsEmptyValues) {
          const id = Math.floor(Math.random() * 3048733) + 9000;
          let contacts = this.company.keyContacts || [];
          contacts.push({ ...this.newContact, id });
          this.company.keyContacts = contacts;
        }
      }
      this.ADD_COMPANY(this.company);
      this.newContact = {};
      this.closeModal();
    }
  }
};
</script>

<style lang="scss">
.current-company {
  margin: 2rem;
  color: #084c61;
  font-weight: bold;
}

.image-plus {
  position: relative;
  left: 1%;
  margin-bottom: -0.3rem;
}

.image-trash {
  margin-bottom: -0.3rem;
}

.image-cancel {
  margin-bottom: -0.4rem;
}

.company-name {
  font-weight: 300;
}

.heading-title {
  font-size: 1.2rem;
  &--sm {
    font-size: 1.6rem;
  }

  &--md {
    font-size: 2.5rem;
  }

  &--lg {
    font-size: 3.6rem;
  }
}

.btn {
  padding: 1.2rem 2.5rem;
  width: 49%;
  border-radius: 0.3rem;
  font-size: 1.5rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &__cancel {
    color: #323031;
  }

  &__delete,
  &__save {
    color: white;
    background: #177e89;
  }
}

.info {
  margin: 1.2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &__name,
  &__address,
  &__state,
  &__phoneNumber,
  &__website,
  &__type {
    flex: 0 0 33%;
    input {
      padding: 0.8rem;
      width: 95%;
      margin: 0.7rem 0rem;
    }
  }
}

.financials {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &__gross,
  &__comparable,
  &__employees {
    flex: 0 0 33%;
    input {
      padding: 0.8rem;
      width: 95%;
      margin: 0.7rem 0rem;
    }
  }
}

.merger {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &__status {
    flex: 0 0 33%;
    input {
      padding: 0.8rem;
      width: 95%;
      margin: 0.7rem 0rem;
    }
  }
}

.key-contacts {
  margin: 1rem 0;
  input {
    padding: 0.8rem;
    width: 30%;
    margin: 0.7rem 0.65rem;
  }
}

.btn-group {
  margin-top: 1.5rem;
}

li.no-dot {
  list-style: none;
}

@media (max-width: 34.6rem) { 
  div.new-contact {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    img.image-cancel {
      align-self: baseline;
    }
    input {
      flex: 1;
      padding: 0.8rem;
      width: 29%;
      margin: 0.7rem 0.5rem;
    }
  }
}
</style>
