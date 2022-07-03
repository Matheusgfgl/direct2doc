import Header from '@/types/header';

export default class managmentHeader {
  public static header: Header[] = [
    {
      text: 'Profissional',
      align: 'start',
      sortable: true,
      value: 'candidateName',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Convênio',
      align: 'start',
      sortable: true,
      value: 'shiftCode',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Paciente',
      align: 'start',
      sortable: true,
      value: 'startDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Clínica',
      align: 'start',
      sortable: false,
      value: 'specialities.specialityName.name',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Especialidade',
      align: 'start',
      sortable: true,
      value: 'checkinDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Data',
      align: 'start',
      sortable: true,
      value: 'checkinDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Início',
      align: 'start',
      sortable: false,
      value: 'id',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Observações',
      align: 'start',
      sortable: false,
      value: 'id',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Status',
      align: 'start',
      sortable: false,
      value: 'id',
      class: 'item-table-header item-table-header-revserves',
    },
  ];

  public static inProgressHeader: Header[] = [
    {
      text: 'Candidato',
      align: 'start',
      sortable: true,
      value: 'candidateName',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Plantão',
      align: 'start',
      sortable: true,
      value: 'shiftCode',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Data',
      align: 'start',
      sortable: true,
      value: 'startDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Período',
      align: 'start',
      sortable: false,
      value: 'specialities.specialityName.name',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Check-in',
      align: 'start',
      sortable: true,
      value: 'checkinDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: '',
      align: 'start',
      sortable: false,
      value: 'id',
      class: 'item-table-header item-table-header-revserves',
    },
  ];

  public static feedbackHeader: Header[] = [
    {
      text: 'Candidato',
      align: 'start',
      sortable: true,
      value: 'candidateName',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Plantão',
      align: 'start',
      sortable: true,
      value: 'shiftCode',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Data',
      align: 'start',
      sortable: true,
      value: 'startDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Período',
      align: 'start',
      sortable: false,
      value: 'specialities.specialityName.name',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: 'Check-in',
      align: 'start',
      sortable: true,
      value: 'checkinDate',
      class: 'item-table-header item-table-header-revserves',
    },
    {
      text: '',
      align: 'start',
      sortable: false,
      value: 'id',
      class: 'item-table-header item-table-header-revserves',
    },
  ];
}
