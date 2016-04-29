export interface CryptoService{

  encrypt(algo: string, key: CryptoKey, cleartext: ArrayBuffer): Promise<ArrayBuffer>
}
