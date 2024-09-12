import { Module } from '@nestjs/common/decorators/modules';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { FoodController } from '../controllers/food.controller';
import { FoodSchema } from '../schema/food.schema';
import { FoodService } from '../services/food.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'Food', schema: FoodSchema }]),
  ],
  controllers: [FoodController],
  providers: [FoodService],
  exports: [],
})
export class FoodModule {}