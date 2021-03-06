import { Controller, Get } from '@nestjs/common';
import version = require('../package.json');

@Controller()
export class AppController {

    @Get() 
    getVersion() {
        return { message: `Welcome to the Church of Philippi Vendor Contract Management Service Version ${version.version}`};
    }
}
