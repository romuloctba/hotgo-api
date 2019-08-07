import { Module } from '@nestjs/common';
import { ComissionService } from './comission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComissionEntity } from './models/comission.entity';
import { ComissionResolver } from './comission.resolver';
import ComissionTypeEntity from './models/comission-type.entity';
import { ComissionTypeResolver } from './comission-type.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComissionEntity, ComissionTypeEntity]),
  ],
  providers: [ComissionService, ComissionResolver, ComissionTypeResolver],
  exports: [ComissionService]
})
export class ComissionModule {}
