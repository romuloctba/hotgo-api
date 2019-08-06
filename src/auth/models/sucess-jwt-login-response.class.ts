import { JSDocUnknownTag } from 'ts-morph';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class SuccessJwtLoginResponse {
  constructor(obj: Partial<SuccessJwtLoginResponse>) {
    Object.assign(this, obj);
  }
  @Field()
  'access_token': string;

  toString() {
    return JSON.stringify({ access_token: this.access_token });
  }
}
