import { Module } from '@nestjs/common';
import { ComissionService } from './comission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComissionEntity } from './comission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComissionEntity]),
  ],
  providers: [ComissionService],
})
export class ComissionModule {}
