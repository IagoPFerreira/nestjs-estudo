import { Module } from '@nestjs/common';
import { CatsService } from './cats/cat.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { OrdersModule } from './orders/orders.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [CatsModule, OrdersModule, GamesModule],
})
export class AppModule {}
