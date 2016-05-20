export class KeyFormat {
  constructor (public val: string){}

  toString() {
    return this.val;
  }

  static RAW = 'raw';
  static PKCS8 = 'pkcs8';
  static SPKI = 'spki';
  static JWK = 'jwk';
}
