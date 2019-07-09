export class Affiliate {
  id: number;
  userId: number;
  storeIds: [number];

  constructor({ userId, storeIds }) {
    this.userId = userId;
    this.storeIds = storeIds;
  }
}
