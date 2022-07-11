<template>
  <div class="customers">
    <v-card class="elevation-0">
      <v-card-title class="d-block page-header">
        <v-row>
          <v-col cols="12" md="12" lg="12" xl="12" class="pt-0">
            <h3 class="page-title">Lista de Clinicas</h3>
          </v-col>
        </v-row>
      </v-card-title>
      <div class="input-search input-item">
        <label
          class="input-search__label"
          :class="{ 'input-search__label--active': search }"
        >
          <div class="svgIcon">
            <SvgElement
              name="Search"
              title="Search"
            />
          </div>
          <input
            v-model="search"
            type="text"
            class="input-item__search search"
            placeholder="Pesquisar Empresa"
          >
          <button
            v-if="search"
            class="clear"
            @click="search = ''"
          >
            <SvgElement
              name="Close"
              title="Close"
            />
          </button>
        </label>
      </div>
      <v-btn
        class="add-professional elevation-0 mr-3"
        color="#00ADAB"
        dark
        @click="openAppointmentModal"
        >Adicionar Empresa</v-btn
      >
      <div class="q-pa-md">
        <q-table
          title="Lista de consultas"
          :rows="customers"
          :loading="loading"
          :filter="search"
          row-key="name"
          :options="{
            'items-per-page-options': [10, 25, 50, 100],
            'items-per-page-text': 'Itens por página',
          }"
          no-data-label="Nenhuma consulta encontrada!"
          no-results-label="Nenhuma consulta encontrada!"
        />
      </div>
    </v-card>
    </div>
</template>

<script lang="ts">
// Vuex
  import { mapGetters, mapActions } from 'vuex';
  //import AppointmentHeader from '../../headers/appointment-header.vue';
  //import Headers from '../types/header';
  //import AppointmentInterface  from '~/types/appointment';
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Customers',

  data() {
    return {
      customers: [],
      loading: false,
      search: '',
      header: null,
    };
  },

  //appointmentHeader: AppointmentHeader,
  Headers: Headers,

  created(): void {
    this.getCustomers();
  },

  methods: {
    ...mapActions([
      'getCustomersAll',
    ]),

    async getCustomers(): Promise<void> {
      console.log('customers');
      this.loading = true;
      try {
      
      const response = await this.getCustomersAll();

      this.customers = response.data;
      console.log(this.customers)

      } catch (error) {
        console.error('Ocorreu um erro ao listar candidatos');
        this.customers = null;
      }

      this.loading = false;
    },
  },
});

</script>

<style lang="scss">
  .customers {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: var(--gray-400);
    padding: 2rem 1rem;

    .content-search {
      display: none;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--white);
      margin: 2rem 0;
      padding: 1.5rem;
      width: 100%;
      font-size: 14px;
    }
  }


</style>