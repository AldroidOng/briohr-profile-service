import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, DatabaseModule } from './shared';

@Module({
  imports: [UserModule, DatabaseModule, ConfigModule],
})
export class AppModule {}
