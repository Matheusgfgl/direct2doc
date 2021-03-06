export default interface AppointmentInterface {
  applicationId: string;
  applicationStatus: number;
  candidateEmail: string;
  candidateName: string;
  candidatePhone: string;
  checkpointId: string;
  checkpointStatus: number;
  endDate: string;
  shiftCode: string;
  shiftId: string;
  shiftTitle: string;
  startDate: string;
}

const appointmentInitalValue: AppointmentInterface = {
  applicationId: 'string',
  applicationStatus: 1,
  candidateEmail: '',
  candidateName: '',
  candidatePhone: '',
  checkpointId: '',
  checkpointStatus: 1,
  endDate: '',
  shiftCode: '',
  shiftId: '',
  shiftTitle: '',
  startDate: '',
};

export { appointmentInitalValue };
