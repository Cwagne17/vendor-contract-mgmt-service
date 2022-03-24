import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if(!configService.isProduction()) {
    const document = SwaggerModule.createDocument(app, configService.getSwaggerConfig())
    SwaggerModule.setup('docs', app, document);
  }
  app.use(helmet())
  await app.listen(configService.getPort());
}
bootstrap();
