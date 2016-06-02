import {Injectable} from 'angular2/core';
import {CryptoService} from "../crypto.service";
import {CryptoFunction} from "../cryptoFunction";
import {HashFunction} from "../hashFunction";
import {KeyUsage} from '../keyUsage';
import {KeyFormat} from '../keyFormat';
import {KeyData} from '../keyData';

@Injectable()
export class SubtleCryptoService implements CryptoService {

  subtleCrypto = window.crypto.subtle;
// TODO: implement wrapper functions

  encrypt(algo:CryptoFunction, key:CryptoKey, cleartext:ArrayBuffer):Promise<ArrayBuffer> {
    return this.subtleCrypto.encrypt(algo, key, cleartext);
  }

  decrypt(algo:CryptoFunction, key:CryptoKey, ciphertext:ArrayBuffer):Promise<ArrayBuffer> {
    return this.subtleCrypto.decrypt(algo, key, ciphertext);
  }

  sign(algo:CryptoFunction, key:CryptoKey, text2sign:ArrayBuffer):Promise<ArrayBuffer> {
    return this.subtleCrypto.sign(algo, key, text2sign);
  }

  verify(algo:CryptoFunction, key:CryptoKey, signature:ArrayBuffer, text2verify:ArrayBuffer):Promise<boolean> {
    return this.subtleCrypto.verify(algo, key, signature, text2verify);
  }

  digest(algo:HashFunction, buffer:ArrayBuffer):Promise<ArrayBuffer> {
    return this.subtleCrypto.digest(algo, buffer);
  }

  generateKey(algo:CryptoFunction, extractable:boolean, keyUsages:KeyUsage[]):Promise<CryptoKey> {
    var keyUsagesString:string[] = keyUsages.map( (val) => val.toString());
    return this.subtleCrypto.generateKey(algo, extractable, keyUsagesString);
  }

  deriveKey(algo:CryptoFunction, masterKey:CryptoKey, derivedKeyAlgo:CryptoFunction, extractable:boolean, keyUsages:KeyUsage[]):Promise<CryptoKey> {
    var keyUsagesString:string[] = keyUsages.map( (val) => val.toString());
    return this.subtleCrypto.deriveKey(algo, masterKey, derivedKeyAlgo, extractable, keyUsagesString);
  }

  importKey(format:KeyFormat, keyData:KeyData, algo:CryptoFunction, extractable:boolean, usages:KeyUsage[]):Promise<CryptoKey> {
    var usagesString:string[] = usages.map( (val) => val.toString());
    var keyDataAB:ArrayBuffer = <ArrayBuffer>keyData;
    return this.subtleCrypto.importKey(format.toString(), keyDataAB, algo, extractable, usagesString);
  }

  exportKey(format:KeyFormat, key:CryptoKey):Promise<ArrayBuffer> {
    return this.subtleCrypto.exportKey(format.toString(), key);
  }
  wrapKey(format:KeyFormat, key:CryptoKey, wrappingKey:CryptoKey, wrapAlgo:CryptoFunction):Promise<ArrayBuffer> {
    return this.subtleCrypto.wrapKey(format.toString(), key, wrappingKey, wrapAlgo);
  }

  unwrapKey(format:KeyFormat, wrappedKey:ArrayBuffer, unwrappingKey:CryptoKey, unwrapAlgo:CryptoFunction, unwrappedKeyAlgo:CryptoFunction, extractable:boolean, keyUsages:KeyUsage[]):Promise<CryptoKey> {
    var keyUsagesString:string[] = keyUsages.map( (val) => val.toString());
    return this.subtleCrypto.unwrapKey(format.toString(), wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsagesString);
  }
}
