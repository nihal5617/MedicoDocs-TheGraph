import {
  AddedDoctor as AddedDoctorEvent,
  AddedHospital as AddedHospitalEvent,
  AddedPatient as AddedPatientEvent,
  AddedPublicKey as AddedPublicKeyEvent
} from "../generated/PatientMedicalRecordSystem/PatientMedicalRecordSystem"
import {
  AddedDoctor,
  AddedHospital,
  AddedPatient,
  AddedPublicKey
} from "../generated/schema"

export function handleAddedDoctor(event: AddedDoctorEvent): void {
  let entity = new AddedDoctor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.doctorAddress = event.params.doctorAddress
  entity.name = event.params.name
  entity.doctorRegistrationId = event.params.doctorRegistrationId
  entity.dateOfRegistration = event.params.dateOfRegistration
  entity.specialization = event.params.specialization
  entity.hospitalAddress = event.params.hospitalAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddedHospital(event: AddedHospitalEvent): void {
  let entity = new AddedHospital(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hospitalAddress = event.params.hospitalAddress
  entity.name = event.params.name
  entity.hospitalRegistrationId = event.params.hospitalRegistrationId
  entity.dateOfRegistration = event.params.dateOfRegistration
  entity.email = event.params.email
  entity.phoneNumber = event.params.phoneNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddedPatient(event: AddedPatientEvent): void {
  let entity = new AddedPatient(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.name = event.params.name
  entity.chronicHash = event.params.chronicHash
  entity.dob = event.params.dob
  entity.bloodGroup = event.params.bloodGroup
  entity.dateOfRegistration = event.params.dateOfRegistration
  entity.publicKey = event.params.publicKey
  entity.vaccinationHash = event.params.vaccinationHash
  entity.phoneNumber = event.params.phoneNumber
  entity.accidentHash = event.params.accidentHash
  entity.acuteHash = event.params.acuteHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddedPublicKey(event: AddedPublicKeyEvent): void {
  let entity = new AddedPublicKey(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.publicKey = event.params.publicKey

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
