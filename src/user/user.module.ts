import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, UsersService],
  controllers: [UserController, UserController],
})
export class UsersModule {}