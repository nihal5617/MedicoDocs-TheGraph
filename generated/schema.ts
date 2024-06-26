// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AddedDoctor extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddedDoctor entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AddedDoctor must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddedDoctor", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AddedDoctor | null {
    return changetype<AddedDoctor | null>(
      store.get("AddedDoctor", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get doctorAddress(): Bytes {
    let value = this.get("doctorAddress");
    return value!.toBytes();
  }

  set doctorAddress(value: Bytes) {
    this.set("doctorAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get doctorRegistrationId(): string {
    let value = this.get("doctorRegistrationId");
    return value!.toString();
  }

  set doctorRegistrationId(value: string) {
    this.set("doctorRegistrationId", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    return value!.toBigInt();
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get specialization(): string {
    let value = this.get("specialization");
    return value!.toString();
  }

  set specialization(value: string) {
    this.set("specialization", Value.fromString(value));
  }

  get hospitalAddress(): Bytes {
    let value = this.get("hospitalAddress");
    return value!.toBytes();
  }

  set hospitalAddress(value: Bytes) {
    this.set("hospitalAddress", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class AddedHospital extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddedHospital entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AddedHospital must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddedHospital", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AddedHospital | null {
    return changetype<AddedHospital | null>(
      store.get("AddedHospital", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get hospitalAddress(): Bytes {
    let value = this.get("hospitalAddress");
    return value!.toBytes();
  }

  set hospitalAddress(value: Bytes) {
    this.set("hospitalAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get hospitalRegistrationId(): string {
    let value = this.get("hospitalRegistrationId");
    return value!.toString();
  }

  set hospitalRegistrationId(value: string) {
    this.set("hospitalRegistrationId", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    return value!.toBigInt();
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get email(): string {
    let value = this.get("email");
    return value!.toString();
  }

  set email(value: string) {
    this.set("email", Value.fromString(value));
  }

  get phoneNumber(): string {
    let value = this.get("phoneNumber");
    return value!.toString();
  }

  set phoneNumber(value: string) {
    this.set("phoneNumber", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class AddedPatient extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddedPatient entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AddedPatient must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddedPatient", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AddedPatient | null {
    return changetype<AddedPatient | null>(
      store.get("AddedPatient", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    return value!.toBytes();
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get chronicHash(): Array<string> {
    let value = this.get("chronicHash");
    return value!.toStringArray();
  }

  set chronicHash(value: Array<string>) {
    this.set("chronicHash", Value.fromStringArray(value));
  }

  get dob(): BigInt {
    let value = this.get("dob");
    return value!.toBigInt();
  }

  set dob(value: BigInt) {
    this.set("dob", Value.fromBigInt(value));
  }

  get bloodGroup(): string {
    let value = this.get("bloodGroup");
    return value!.toString();
  }

  set bloodGroup(value: string) {
    this.set("bloodGroup", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    return value!.toBigInt();
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get publicKey(): string {
    let value = this.get("publicKey");
    return value!.toString();
  }

  set publicKey(value: string) {
    this.set("publicKey", Value.fromString(value));
  }

  get vaccinationHash(): Array<string> {
    let value = this.get("vaccinationHash");
    return value!.toStringArray();
  }

  set vaccinationHash(value: Array<string>) {
    this.set("vaccinationHash", Value.fromStringArray(value));
  }

  get phoneNumber(): string {
    let value = this.get("phoneNumber");
    return value!.toString();
  }

  set phoneNumber(value: string) {
    this.set("phoneNumber", Value.fromString(value));
  }

  get accidentHash(): Array<string> {
    let value = this.get("accidentHash");
    return value!.toStringArray();
  }

  set accidentHash(value: Array<string>) {
    this.set("accidentHash", Value.fromStringArray(value));
  }

  get acuteHash(): Array<string> {
    let value = this.get("acuteHash");
    return value!.toStringArray();
  }

  set acuteHash(value: Array<string>) {
    this.set("acuteHash", Value.fromStringArray(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class AddedPublicKey extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddedPublicKey entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AddedPublicKey must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddedPublicKey", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AddedPublicKey | null {
    return changetype<AddedPublicKey | null>(
      store.get("AddedPublicKey", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    return value!.toBytes();
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get publicKey(): string {
    let value = this.get("publicKey");
    return value!.toString();
  }

  set publicKey(value: string) {
    this.set("publicKey", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
