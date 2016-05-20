export class KeyUsage {
  constructor(public val: string){
  }

  toString() {
    return this.val;
  }

  static ENCRYPT = "encrypt";
  static DECRYPT = "decrypt";
  static SIGN = "sign";
  static VERIFY = "verify";
  static DERIVE_KEY = "deriveKey";
  static DERIVE_BITS = "deriveBits";
  static WRAP_KEY = "wrapKey";
  static UNWRAP_KEY = "unwrapKey";
}
