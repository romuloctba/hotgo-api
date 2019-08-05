// import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
// import { CreateStoreCommand } from '../commands/create-store.command';
// import { StoreEntity } from '../store.entity';
// import { StoreService } from '../store.service';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { SupplierEntity } from '../../supplier/supplier.entity';

// @CommandHandler(CreateStoreCommand)
// export class CreateStoreHandler implements ICommandHandler<CreateStoreCommand> {
//   constructor(
//     @InjectRepository(StoreEntity) private readonly storeRepo: Repository<StoreEntity>,
//     @InjectRepository(SupplierEntity) private readonly supplierRepo: Repository<SupplierEntity>,
//     ) {}

//   async execute(command: CreateStoreCommand) {
//     const { userId, name, themeId } = command;
//     await this.supplierRepo.findOne(userId)
//       .then(supplier => {
//         const newStore = new StoreEntity();
//         newStore.supplier = supplier.id;
//         newStore.name =  name;
//         newStore.themeId = themeId;

//         return this.storeRepo.save(newStore);
//       });
//   }
// }
