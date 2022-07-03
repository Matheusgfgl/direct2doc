<template>
  <div class="appointments">
    <v-card class="elevation-0">
      <v-card-title class="d-block page-header">
        <v-row>
          <v-col cols="12" md="12" lg="12" xl="12" class="pt-0">
            <h3 class="page-title">Profissionais</h3>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" md="4" lg="4" xl="4" class="pb-2">
            <v-text-field
              v-model="search"
              class="mt-0 pt-0 text-input-blue"
              hide-details="auto"
              color="#CDCDCD"
              label="Pesquisar profissional"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn
            class="add-professional elevation-0 mr-3"
            color="#00ADAB"
            dark
            @click="openAppointmentModal"
            >Novo Profissional</v-btn
          >
        </v-row>
      </v-card-title>
      <v-card-text class="page-body mx-0">
        <v-container fluid>
          <v-data-table
            :headers="header"
            :items="appointments"
            :search="search"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
              'items-per-page-text': 'Itens por página',
            }"
            :loading="loading"
            loading-text="Procurando profissionais..."
            no-data-text="Nenhum profissional encontrado!"
            class="mt-3 mb-3"
          >
            <template v-slot:item="{ item }">
              <tr @click="goToAppointment(item)">
                <td>
                  {{ item.name }}
                </td>
                <td>
                  {{ item.contact.email }}
                </td>
                <td>
                  <span>Teste</span>
                </td>
                <td>
                  <span>Teste </span>
                </td>
                <td>
                  <span class="activePills" v-if="item.isActive === true"
                    >Ativo</span
                  >
                  <span class="inactivePills" v-else>Inativo</span>
                </td>
              </tr>
            </template>
            <template v-slot:no-results>
              Ops, não encontramos nenhum profissional com este dado!
            </template>
          </v-data-table>
        </v-container>
      </v-card-text>
    </v-card>
    </div>
</template>

<script lang="ts">
// Vuex
  import { mapGetters, mapActions } from 'vuex';
  import AppointmentHeader from '../headers/appointment-header';
 // import Headers from '../types/header';
  import appointmentInterface , { appointmentInitalValue } from '../types/appointment';
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Appointments',

  data() {
    return {
      appointments: [],
      loading: false,
      search: '',
      header: null,
      items: null
    };
  },

  appointmentHeader: AppointmentHeader,
  Headers: Headers,
  appointments: appointmentInitalValue,

  created(): void {
    //this.getAppointments(1);
  },

  methods: {
    ...mapActions([
      'getUserShifts',
    ]),

    async getAppointments(userId : string): Promise<void> {
      console.log('appointments');
      this.loading = true;
      try {
      
      const response = this.getUserShifts(userId);

      const items: appointmentInterface[] = response;
      this.appointments = items;

      } catch (error) {
        console.error('Ocorreu um erro ao listar candidatos');
        this.appointments = [];
      }

      this.loading = false;
    },

    goToAppointment(item : object): void {
      console.log(item);
    },

    openAppointmentModal(item : object): void {
      console.log(item);
    }
  },
});

</script>

<style lang="scss">
  .appointments {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: var(--gray-400);

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--white);
      margin: 2rem 0;
      padding: 1.5rem;
      max-width: 26rem;
      font-size: 14px;
    }
  }


</style>