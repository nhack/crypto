export class KeyFormat {
  private constructor (private val: string){}

  toString() {
    return this.val;
  }

  static RAW = new KeyFormat('raw');
  static PKCS8 = new KeyFormat('pkcs8');
  static SPKI = new KeyFormat('spki');
  static JWK = new KeyFormat('jwk');
}
