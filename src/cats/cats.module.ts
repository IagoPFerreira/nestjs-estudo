import { Module } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
