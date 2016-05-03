import {HashFunction} from './hashFunction';

export interface CryptoFunction{
  name: string,
  iv?: ArrayBuffer,
  counter?: ArrayBuffer,
  length?: number,
  additionalData?: ArrayBuffer,
  tagLength?: number,
  label?: ArrayBuffer,
  hash?: HashFunction,
  modulusLength?: number,
  publicExponent?: ArrayBuffer,
  namedCurve?: string,
  prime?: ArrayBuffer,
  generator?: ArrayBuffer
}
