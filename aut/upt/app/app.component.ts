import {Component, OnInit} from 'angular2/core';
import {SubtleCryptoService} from "../crypto/subtle/subtleCrypto.service";

@Component({
    selector: 'crypto-app',
    template: '<h1>Angular2 Crypto</h1>',
    providers: [SubtleCryptoService]
})
export class AppComponent implements OnInit{
  constructor(private cryptoService: SubtleCryptoService){}

  ngOnInit(){

      function hex(buffer) {
          var hexCodes = [];
          var view = new DataView(buffer);
          for (var i = 0; i < view.byteLength; i += 4) {
              // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
              var value = view.getUint32(i);
              // toString(16) will give the hex representation of the number without padding
              var stringValue = value.toString(16);
              // We use concatenation and slice for padding
              var padding = '00000000';
              var paddedValue = (padding + stringValue).slice(-padding.length);
              hexCodes.push(paddedValue);
          }

          // Join all the hex strings into one
          return hexCodes.join("");
      }
      // TODO: pseudo unit tests

      var helloWorld = new TextEncoder("utf-8").encode("Hello World!");
      this.cryptoService.digest({name: 'SHA-256'}, helloWorld).then(enc => console.log(hex(enc)));
  }
}
