import { Controller, Get } from '@nestjs/common';
import package = require('../package.json');

@Controller()
export class AppController {

    @Get() 
    getVersion() {
        return { message: `Welcome to the Church of Philippi Vendor Contract Management Service Version ${package.version}`};
    }
}
