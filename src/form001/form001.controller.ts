import { Controller, Get, Res } from '@nestjs/common';
import { Form001Service } from './form001.service';

@Controller('form001')
export class Form001Controller {
    constructor(private readonly form001Service: Form001Service){}

    @Get()
    async getForm001(@Res() res){
        return await this.form001Service.getForm001();
    }
}
