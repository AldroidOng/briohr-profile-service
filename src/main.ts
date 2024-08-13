import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host:
        configService.get<string>('PROFILE_MICROSERVICE_HOST') || 'localhost',
      port:
        parseInt(configService.get<string>('PROFILE_MICROSERVICE_PORT'), 10) ||
        3002,
    },
  };
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      microserviceOptions,
    );

  microservice.listen();
}
bootstrap();
