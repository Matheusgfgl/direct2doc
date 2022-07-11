<template>
  <div class="patients">
    <v-card class="elevation-0">
      <v-card-title class="d-block page-header">
        <v-row>
          <v-col cols="12" md="12" lg="12" xl="12" class="pt-0">
            <h3 class="page-title">Pacientes</h3>
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
            @click="openNewProfessionalModal"
            >Novo Profissional</v-btn
          >
        </v-row>
      </v-card-title>
      <v-card-text class="page-body mx-0">
        <v-container fluid>
          <v-row>
            <v-tabs background-color="#f2f4f8" flat class="my-4 ml-3" height="35">
              <v-tabs-slider color="#00ADAB"></v-tabs-slider>
              <v-tab class="reserve-filter pa-0 mr-6" @click="isActive = true"
                >Profissionais ativos</v-tab
              >
              <v-tab class="reserve-filter pa-0" @click="isActive = false"
                >Profissionais inativos</v-tab
              >
            </v-tabs>
          </v-row>
          <v-data-table
            :headers="header"
            :items="items"
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
              <tr @click="openInner(item)">
                <td>
                  {{ item.name }}
                </td>
                <td>
                  {{ item.contact.email }}
                </td>
                <td>
                  <span>{{ setCrmFormatted(item.crMs) }}</span>
                </td>
                <td>
                  <span>{{ setSpecialitiesFormatted(item.specialities) }} </span>
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
  import { mapActions } from 'vuex';

export default {
  name: 'patients',

  data() {
    return {
      patients: [],
      loading: false,
    };
  },

  computed: {
    //
  },

  setup(): void {
    //
  },

  methods: {
    ...mapActions([
      '',
    ]),

    async getPatiens(userId : string): Promise<void> {
      //
    }
  },


  
}

</script>

<style lang="scss">
  .patients {
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