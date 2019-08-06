import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import Price from './price.class';

@Scalar('Price', type => Price)
export class PriceScalar implements CustomScalar<string, Price> {
  description = 'Price scalar type';

  parseValue(value: string): Price {
    console.log('Price parseValue ', value);
    return new Price({ value: parseFloat(value) }); // value from the client
  }

  parseLiteral(ast: ValueNode): Price {
    console.log('Price parseLiteral ', ast);
    if (ast.kind === Kind.STRING) {
      return new Price({ value: parseFloat(ast.value)});
    }
    if (ast.kind === Kind.INT && !isNaN(Number(ast.value))) {
      return new Price({ value: Number(ast.value) });
    }
    return null;
  }

  serialize(value: Price): string {
    return value.toString(); // value sent to the client
  }

}
