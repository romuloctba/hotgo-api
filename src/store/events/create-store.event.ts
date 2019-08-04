export class CreateStoreEvent {
  constructor(
    public readonly userId: string,
    public readonly supplierId: string,
    public readonly name?: string,
    public readonly themeId?: string,
  ) {}
}
