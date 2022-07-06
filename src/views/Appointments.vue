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
        <div class="box-header with-border content-search" style="background: #1e282c;color: #FFF;border: 1px solid #000; padding: 0 !important">
          <button class="collapsible active-collapsible">
            <i class="fa fa-search" aria-hidden="true"></i>
            <h3 class="box-title">Pesquisa</h3>
          </button>
        </div>
        <div id="content-search" class="box-body content-search" style="background: rgb(34, 45, 50); color: rgb(255, 255, 255);">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="status_exame" class="control-label">Status</label>
                  <select :selected="type" class="form-control" id="status_exame">
                    <option  value="todos"> --- Todos</option>
                    <option value="Agendado">&nbsp; --- Agendado</option>
                    <option value="Atendido">&nbsp; --- Atendido</option>
                    <option value="Confirmado">&nbsp; --- Confirmado</option>
                    <option value="Atrasado">&nbsp; --- Atrasado</option>
                    <!--<option value="trash">&nbsp; --- Excluídos</option>-->
                  </select>
                </div>

                <div class="form-group">
                  <label for="medico_agendado" class="control-label">Profissional</label>
                  <select :selected="type" class="form-control" id="medico_agendado">
                    <option value="Todos"> --- Todos</option>
                    <option value="413"> --- Dr Gustavo Zacca Dário Ribeiro</option><option value="512"> --- Dr. Pedro Affonso Godinho De Alcântara</option><option value="649"> --- Dr. Teste</option>
                  </select>
                </div>
              </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="active" class="control-label">&nbsp;</label>
                    <select :selected="type" class="form-control" id="tipo_data" disabled="true">  
                    <!--    Comentario adicionado para que a opcao de data seja mostrada a todos -->
                        <option value="data_criado"> Data agendado</option>
                    </select>
                  </div>
                <div class="row">
                  <div class="x">
                    <div class="col-md-5">
                    <label style="width: 110px;  margin-left: 10px" class="radio-inline">
                      <input type="radio" name="radio_data" value="opt_data_hoje">Hoje
                    </label>
                    <label class="radio-inline" style="width: 128px;">
                     <input type="radio" name="radio_data" value="opt_amanha">Amanhã 
                    </label>
                    <label class="radio-inline" style="width: 128px;">
                      <input type="radio" name="radio_data" value="opt_prox_semana">Próxima semana 
                    </label>
                    <label class="radio-inline">
                      <input type="radio" name="radio_data" value="opt_intervalo">Intervalo
                    </label>
                  </div>
                  <div class="col-md-5">
                    <label style="width: 110px; margin-left: 10px" class="radio-inline">
                      <input type="radio" name="radio_data" value="opt_ontem">Ontem
                    </label>
                    <label class="radio-inline">
                      <input type="radio" name="radio_data" value="opt_ultimo_mes">Último mês
                    </label>
                    <label class="radio-inline">
                      <input type="radio" name="radio_data" value="opt_qualquer_data">Qualquer data
                    </label>
                    <label class="radio-inline" style="width: 100%;">
                      <input type="radio" name="radio_data" value="opt_no_dia">No dia
                    </label>
                  </div>
                  <div class="col-md-12" id="intervalo_div">
                    <div class="form-group" style="width: 47%;float: left;padding: 5px 0 0 0;">
                      <input type="date" placeholder="Filtrar" class="form-control" name="opt_data_i" id="opt_data_i" value="">
                    </div>
                    <span style="margin-top: 9px;float: left;margin-left: 6px;"> E </span>
                    <div class="form-group" style="width: 47%;float: right;padding: 5px 0 0 5px;">
                      <input type="date" placeholder="Filtrar" class="form-control" name="opt_data_f" id="opt_data_f" value="">
                    </div>
                  </div>
                  <div class="col-md-12" id="single_date_div" style="display: none;">
                    <div class="form-group" style="width: 47%;float: left;padding: 5px 0 0 0;">
                      <input type="date" placeholder="Filtrar" class="form-control" name="opt_data_single" id="opt_data_single" value="">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="urgency_data[]" value="1">Emergência            </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" name="urgency_data[]" value="0">Ambulatório            </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" name="urgency_data[]" value="2">Internado            </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" name="urgency_data[]" value="3">Todos            </label>
                  </div>     
                </div>  
              </div>
              </div>
              <div class="col-md-4">

                  <div class="form-group ">

                      <label>&nbsp;</label>

                      <select :selected="type" class="form-control " name="search_field" id="search_field">

                          <option value="field_nome_paciente" >Nome do paciente</option>

                          <option value="field_numero_registro">Registro do paciente </option>

                          <option value="field_medico_solicitante">Médico solicitante</option>

                          <option value="field_estudo">Estudo</option>
                          
                          <option value="field_convenio">Convênio</option>
                          
                          <option value="field_birthday">Data de nascimento</option>

                      </select>

                  </div>

              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>&nbsp;</label>
                    <input type="text" placeholder="Filtrar" class="form-control" name="value_text" id="value_text">
                    <input type="text" placeholder="__/__/____" class="form-control date" style="display: none;" name="value_date" id="value_date" maxlength="10">
                    <div id="convenios_div" style="display: none; width: 100%;">
                      <select id="convenios_select" class="form-control select2-hidden-accessible" style="width: 100%" tabindex="-1" aria-hidden="true">
                        <option value="10">Unimed</option>                                        
                      </select><span class="select2 select2-container select2-container--default select2-hidden-accessible" dir="ltr" style="width: 100%;" tabindex="-1" aria-hidden="true"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-convenios_select-container"><span class="select2-selection__rendered" id="select2-convenios_select-container" title="Unimed">Unimed</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ayjd-container"><span class="select2-selection__rendered" id="select2-ayjd-container"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <a id="btn-filter-list" class="btn btn-primary col-md-12">PESQUISAR</a>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div class="q-pa-md">
          <q-table
            title="Lista de consultas"
            :rows="appointments"
            :columns="header"
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
      </v-card-text>
    </v-card>
    </div>
</template>

<script lang="ts">
// Vuex
  import { mapGetters, mapActions } from 'vuex';
  //import AppointmentHeader from '../../headers/appointment-header.vue';
  //import Headers from '../types/header';
  //import AppointmentInterface  from '@/types/appointment';
  import { defineComponent } from 'vue'
  import VueRouter from 'vue-router';

  export default defineComponent({
    name: 'Appointments',

  data() {
    return {
      appointments: null,
      loading: false,
      search: '',
      header: null,
      items: null,
      type: '',
    };
  },

  //appointmentHeader: AppointmentHeader,
  Headers: Headers,

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

      const items = response;
      console.log(items)

      //this.appointments = items;

      } catch (error) {
        console.error('Ocorreu um erro ao listar candidatos');
        this.appointments = null;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: var(--gray-400);

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