import { AffiliatePipe } from './affiliate.pipe';

let pipe: AffiliatePipe;
const affiliateServiceMock = {

} as any;

describe('AffiliatePipe', () => {
  beforeEach(() => {
    pipe = new AffiliatePipe(affiliateServiceMock)
  })
  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });
});
