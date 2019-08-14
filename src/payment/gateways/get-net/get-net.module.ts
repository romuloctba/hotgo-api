import { Module, HttpModule } from '@nestjs/common';
import { GetNetService } from './get-net.service';

@Module({
  imports: [HttpModule],
  providers: [GetNetService],
})
export class GetNetModule {}
