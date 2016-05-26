export class KeyUsage {
  private constructor(private val: string){
  }

  toString() {
    return this.val;
  }

  static ENCRYPT = new KeyUsage("encrypt");
  static DECRYPT = new KeyUsage("decrypt");
  static SIGN = new KeyUsage("sign");
  static VERIFY = new KeyUsage("verify");
  static DERIVE_KEY = new KeyUsage("deriveKey");
  static DERIVE_BITS = new KeyUsage("deriveBits");
  static WRAP_KEY = new KeyUsage("wrapKey");
  static UNWRAP_KEY = new KeyUsage("unwrapKey");
}
