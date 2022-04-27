import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get() 
    getVersion() {
        return { message: `Welcome to the Church of Philippi Vendor Contract Management Service Version ${require('../package.json').version}`};
    }
}
