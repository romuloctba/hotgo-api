import { Controller, Post, UsePipes, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SupplierService } from './supplier.service';
import { EventBus } from '@nestjs/cqrs';
import { CreateStoreCommand } from '../store/commands/create-store.command';

@Controller('supplier')
export class SupplierController {

  constructor(
    private readonly supplierService: SupplierService,
    private readonly eventBus: EventBus,
  ) {}

  @Post()
  // @UsePipes(AffiliatePipe)
  @UseGuards(AuthGuard('jwt'))
  async createSupplier(@Request() req) {
    return this.supplierService.create(req.user.id);
  }

  @Post('store')
  // @UsePipes(AffiliatePipe)
  @UseGuards(AuthGuard('jwt'))
  async createStore(@Request() req) {
    const supplier = await this.supplierService.findOne(req.user.id);
    if (!supplier) {
      throw new HttpException('No suppllier for user.', HttpStatus.UNAUTHORIZED);
    }
    /*
    * usar o commandBus? ou o ws? atrelar ao service?
    */
    // return this.supplierService.createStore();

    return this.eventBus.publish(new CreateStoreCommand(supplier.id.toString(), req.body.name, '23'));
  }
}
