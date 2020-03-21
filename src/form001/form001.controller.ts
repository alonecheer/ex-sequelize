import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { Form001Service } from './form001.service';

@Controller('form001')
export class Form001Controller {
    constructor(private readonly form001Service: Form001Service){}

    @Get()
    async getForm001(@Res() res){
        
        const form001s = await this.form001Service.getForm001();
        return res.json(form001s)
    }

    @Post()
    async addForm001(@Body() body,@Res() res) {
        console.log('body',body);
        const form001 = await this.form001Service.addForm001(body)
        return res.json(form001)
    }
}
