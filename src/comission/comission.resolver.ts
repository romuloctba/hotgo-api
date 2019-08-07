import { Resolver, Mutation, Args, ResolveProperty, Parent, Query } from '@nestjs/graphql';
import AddComissionDto from './models/add-comission.dto';
import { ComissionService } from './comission.service';
import AddComissionTypeDto from './models/add-comission-type.dto';
import { async } from 'rxjs/internal/scheduler/async';
import { ComissionEntity } from './models/comission.entity';
import ComissionTypeEntity from './models/comission-type.entity';

@Resolver(of => ComissionEntity)
export class ComissionResolver {

  constructor(
    private readonly comissionService: ComissionService,
  ) {}

  @Query(returns => [ComissionEntity])
  async getComissionByProduct(@Args('productId') productId: string) {
    return this.comissionService.getComissionByProduct(productId);
  }

  @Query(returns => [ComissionEntity])
  async getComissionByAffiliate(@Args('affiliateId') affiliateId: string) {
    console.log('thisgetComissionByAffiliate ', affiliateId);
    return await this.comissionService.getComissionByAffiliate(affiliateId);
  }

  @Mutation(returns => ComissionEntity)
  async addComission(@Args('comission') comission: AddComissionDto) {
    return await this.comissionService.create(comission);
  }

  @ResolveProperty('type', type => ComissionTypeEntity)
  async type(@Parent() comission) {
    const { typeId } = comission;
    return this.comissionService.getTypeById(typeId);
  }
}
