export default class Price {
  constructor(obj?: Partial<Price>) {
    Object.assign(this, obj);
  }

  value: number;
  promo?: [{
    start: string;
    end: string;
    value: number;
  }];

  getValue() {
    return this.value.toString();
  }

  static parseFromString(payload: string) {
    console.log('Price parseFromString ', payload);
    try {
      const parsedPayload = JSON.parse(payload);
      return new Price(parsedPayload);
    } catch (e) {
      return new Price();
    }
  }
}
