import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if(!configService.isProduction()) {
    const document = SwaggerModule.createDocument(app, configService.getSwaggerConfig())
    SwaggerModule.setup('docs', app, document);
  }
  app.use(helmet());
  app.enableCors({
    origin: /https?:.*$/i
  })
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true 
  }));
  app.useGlobalGuards(new JwtAuthGuard());
  await app.listen(configService.getPort());
}
bootstrap();
