import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from 'app/app.controller';
import { AppService } from 'app/app.service';
import { AuthModule } from 'app/modules/auth.module';
import { UserModule } from 'app/modules/user.module';
import { CategoryModule } from 'app/modules/category.module';
import { FoodModule } from 'app/modules/food.module';
import { OrderModule } from 'app/modules/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI as string),
    AuthModule,
    UserModule,
    CategoryModule,
    FoodModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
