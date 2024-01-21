import {
  Field,
  SmartContract,
  state,
  State,
  method,
  Signature,
  PublicKey,
} from 'o1js';

export class Swap extends SmartContract {
  @state(Field) minaPrice = State<Field>();
  @state(Field) ethereumPrice = State<Field>();

  @state(Field) minaToEthExchange = State<Field>();
  @state(Field) ethToMinaExchange = State<Field>();

  init() {
    super.init();
  }

  @method updatePrices(
    priceE: Field,
    signatureE: Signature,
    priceM: Field,
    signatureM: Signature,
    oracle: PublicKey
  ) {
    this.ethereumPrice.getAndRequireEquals();
    this.minaPrice.getAndRequireEquals();

    // Evaluate whether the signature is valid for the provided data
    const validM = signatureM.verify(oracle, [priceM]);
    const validE = signatureE.verify(oracle, [priceE]);
    validE.assertTrue();
    validM.assertTrue();

    this.minaPrice.set(priceM);
    this.ethereumPrice.set(priceE);
  }

  @method setExchangeRates(minaToEth: Field, ethToMina: Field) {
    this.ethToMinaExchange.getAndRequireEquals();
    this.minaToEthExchange.getAndRequireEquals();

    this.ethToMinaExchange.set(ethToMina);
    this.minaToEthExchange.set(minaToEth);
  }
}
