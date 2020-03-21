import { Module } from '@nestjs/common';
import { Form001Service } from './form001.service';
import { Form001Controller } from './form001.controller';

@Module({
  providers: [Form001Service],
  controllers: [Form001Controller]
})
export class Form001Module {}
