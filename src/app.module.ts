import { Module } from '@nestjs/common';
import { Form001Module } from './form001/form001.module';
import { DatabaseModule } from './database/database.module';




@Module({
  imports: [Form001Module, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
