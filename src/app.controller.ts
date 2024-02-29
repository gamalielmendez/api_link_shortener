import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/")
export class AppController {
    constructor(private readonly appService: AppService) { }
    
    @Get()
    getRoot() {
        return `Hola Raiz`
    }

    @Get('/:code')
    async redirect(@Res() res, @Param('code') code: string) {
        try {
            const link = await this.appService.redirect(code)
            return res.redirect(link.url);
        } catch (error) {
            return res.redirect("/");
        }
    }
    
}