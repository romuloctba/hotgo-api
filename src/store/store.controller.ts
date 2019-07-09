import { Controller, Get, Param } from '@nestjs/common';

@Controller('store')
export class StoreController {
  @Get(':id')
  getStore(@Param('id') id): string {
    return `store ${id}`;
  }
}
