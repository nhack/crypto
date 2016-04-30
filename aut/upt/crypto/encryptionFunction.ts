export interface EncriptionFunction{
  name: string,
  iv?: Uint8Array,
  counter?: Uint8Array,
  length?: number,
  additionalData?: ArrayBuffer,
  tagLength?: number,
  label?: ArrayBuffer
}
