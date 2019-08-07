import ComissionTypeEntity from './models/comission-type.entity';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ComissionService } from './comission.service';
import AddComissionTypeDto from './models/add-comission-type.dto';

@Resolver(of => ComissionTypeEntity)
export class ComissionTypeResolver {
  constructor(
    private readonly comissionService: ComissionService,
  ) {}
  @Mutation(returns => ComissionTypeEntity)
  async addComissionType(@Args('comissionType') comissionType: AddComissionTypeDto) {
    return await this.comissionService.createType(comissionType);
  }

  @Query(returns => [ComissionTypeEntity])
  async getComissionTypeByProduct(@Args('productId') productId: string) {
    return await this.comissionService.getTypesByProduct(productId);
  }
}
