import { Controller, Get, Res } from '@nestjs/common';
import { Form001Service } from './form001.service';

@Controller('form001')
export class Form001Controller {
    constructor(private readonly form001Service: Form001Service){}

    @Get()
    async getForm001(@Res() res){
        
        const form001 = await this.form001Service.getForm001();
        return res.json(form001)
    }
}
