<template>
  <div class="current-company">
    <div class="company-name">
      <h1 class="heading-title--lg">{{ currentCompany.name }}</h1>
    </div>

    <div class="info">
      <h2 class="heading-title--sm">Company Info</h2>
      <div class="info__basic">
        <input autocomplete="off" name="name"    type="text" v-model.trim="company.name" placeholder="Enter company name"/>
        <input autocomplete="off" name="address" type="text" v-model.trim="company.address" placeholder="Enter address (e.g., 123 abc rd)"/>
        <input autocomplete="off" name="state"   type="text" v-model.trim="company.state" placeholder="Enter the (city, state)"/>
      </div>
      <div class="info__intermediate">
        <input autocomplete="off" name="phoneNumber" type="text" v-model.trim="company.phoneNumber" placeholder="Enter phone number"/>
        <input autocomplete="off" name="website"     type="text" v-model.trim="company.website" placeholder="Enter website url"/>
        <input autocomplete="off" name="type"        type="text" v-model.trim="company.type" placeholder="Enter type of business"/>
      </div>
    </div>

    <div class="financials">
      <h2 class="heading-title--sm">Financial Performance</h2>
      <input name="grossRevenue"     type="number" min="0"     v-model.number="company.grossRevenue" placeholder="Enter gross revenue"/>
      <input name="comparableGrowth" type="number" step="0.01" v-model.number="company.comparableGrowth" placeholder="Enter comparable growth"/>
      <input name="emps"             type="number" min="0"     v-model.number="company.emps" placeholder="Enter number of employees"/>
    </div>

    <div class="merger-status">
      <h2 class="heading-title--sm">Merger status</h2>
      <input name="status" type="text" v-model.trim="company.status" />
    </div>

      <div class="key-contacts">
      <h3 class="heading-title--sm">Key Contacts <img :src="plusSignImage" class="image-plus" v-if="canAddKeyContact" @click="showAddContactField()"/> </h3>

      <div class="new-contact" v-if="showContactField">
        <img class="image-cancel" :src="cancelImage" @click="hideAddContactField()"/>
        <input @input="addNewContact($event)" name="name" v-model.trim="newContact.name" type="text" placeholder="Enter contact name"/>
        <input @input="addNewContact($event)" name="title" v-model.trim="newContact.title" type="text" placeholder="Enter contact professional title"/>
        <input @input="addNewContact($event)" name="number" v-model.trim="newContact.number" type="text" placeholder="Enter contact number"/>
      </div>

        <ul v-for="contact in company.keyContacts" :key="contact.id">
          <li class="no-dot" :key="contactChangeKey">
            <img :src="trashImage" class="image-trash" @click="removeKeyContact(contact.id)"/>
            <input name="name" type="text" v-model.trim="contact.name" placeholder="Enter contact name" />
            <input name="title" type="text" v-model.trim="contact.title" placeholder="Enter contact professional title" />
            <input name="number" type="text" v-model.trim="contact.number" placeholder="Enter contact number" />
          </li>
        </ul>
      </div>

    <div class="btn-group">
      <button type="button" class="btn btn__cancel" @click="closeModal()">Cancel</button>
    
      <button type="button" class="btn btn__save" @click="saveChanges()">Save changes</button>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import trashCan from '@/assets/trash.png'
import plusSign from '@/assets/add.png'
import cancel from '@/assets/cancel.png'

export default {
  name:'EditCompanyModal',
  created: function () {
    this.company = JSON.parse(JSON.stringify(this.currentCompany))
  },
  data: function () {
    return {
      showContactField: false,
      newContact: {},
      contactChangeKey: 0
    }
  },
  computed: {
    ...mapGetters({ currentCompany: 'getCurrentCompany' }),
    trashImage: function () {
      return trashCan
    },
    plusSignImage: function () {
      return plusSign
    },
    cancelImage: function () {
      return cancel
    },
    canAddKeyContact: function () {
      return this.company.keyContacts.length < 4
    }
  },
  methods: {
    ...mapMutations(['UPDATE_COMPANY']),
    closeModal: function () {
      this.$emit('close')
    },
    addNewContact: function ({ target: { name: key, value } }) {
      this.newContact[key] = value
    },
    showAddContactField: function () {
      this.showContactField = true
    },
    hideAddContactField: function () {
      this.newContact = {}
      this.showContactField = false
    },
    removeKeyContact: function (id) {
      this.company.keyContacts = this.company.keyContacts.filter(contact => contact.id !== id)
      this.contactChangeKey = this.contactChangeKey + 1
    },
    saveChanges: function () {
      const contactValues = Object.values(this.newContact)
      if(contactValues.length === 3){
        const containsEmptyValues = contactValues.some(val => val.trim() === '')
        if(!containsEmptyValues){
          const id = Math.floor(Math.random() * 3048733) + 9000
          this.company.keyContacts.push({ ...this.newContact, id })
        }
      }
      this.UPDATE_COMPANY(this.company)
      this.newContact = {}
      this.closeModal()
    }
  }
}
</script>

<style lang="scss">
  .current-company {
    margin: 2rem;
  }

  .image-plus {
    position: relative;
    left: 1%;
    margin-bottom: -.3rem;
  }

  .image-trash { margin-bottom: -.3rem; }

  .image-cancel {
    position: relative;
    left:0.4%;
    margin-bottom: -.4rem;
  }

  .new-contact {
    margin-left: -.3rem;
    margin-right: .3rem;
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

  input:not(:last-child) {
    margin-right: 2.6rem;
  }

  .btn {
    padding: 1.2rem 2.5rem;
    width: 49%;
    border-radius: .3rem;
    font-size: 1.5rem;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &__cancel {
      color: #323031;
    }

    &__delete, &__save {
      color: white;
      background: #177E89;
    }
  }
  .info {
    margin: 1.2rem 0;
    
    input {
      padding: .8rem;
      width: 30%;
      margin: .7rem .9rem;
    }
  }
  .financials {
    margin: 1rem 0;
    input {
      padding: .8rem;
      width: 30%;
      margin: .7rem .9rem;
    }
  }
  .merger-status {
    margin: 1rem 0;
    input {
      padding: .8rem;
      width: 30%;
      margin: .7rem .9rem;
    }
  }
  .key-contacts {
    margin: 1rem 0;
    input {
      padding: .8rem;
      width: 30%;
      margin: .7rem .65rem;
    }
  }

  .btn-group {
    margin-top: 1.5rem;
  }
 
  li.no-dot {
    list-style: none;
  }
  
</style>
