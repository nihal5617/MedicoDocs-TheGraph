import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddedDoctor } from "../generated/schema"
import { AddedDoctor as AddedDoctorEvent } from "../generated/PatientMedicalRecordSystem/PatientMedicalRecordSystem"
import { handleAddedDoctor } from "../src/patient-medical-record-system"
import { createAddedDoctorEvent } from "./patient-medical-record-system-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let doctorAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let doctorRegistrationId = "Example string value"
    let dateOfRegistration = BigInt.fromI32(234)
    let specialization = "Example string value"
    let hospitalAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddedDoctorEvent = createAddedDoctorEvent(
      doctorAddress,
      name,
      doctorRegistrationId,
      dateOfRegistration,
      specialization,
      hospitalAddress
    )
    handleAddedDoctor(newAddedDoctorEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddedDoctor created and stored", () => {
    assert.entityCount("AddedDoctor", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddedDoctor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "doctorAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddedDoctor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedDoctor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "doctorRegistrationId",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedDoctor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dateOfRegistration",
      "234"
    )
    assert.fieldEquals(
      "AddedDoctor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "specialization",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedDoctor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hospitalAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
