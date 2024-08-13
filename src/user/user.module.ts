import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'shared/schemas/User.schema';
import { Companies, CompaniesSchema } from 'shared/schemas/Companies.schema';
import {
  UserSettings,
  UserSettingsSchema,
} from 'shared/schemas/UserSettings.schema';
import {
  Notifications,
  NotificationsSchema,
} from 'shared/schemas/Notifications.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: UserSettings.name,
        schema: UserSettingsSchema,
      },
      {
        name: Notifications.name,
        schema: NotificationsSchema,
      },
      {
        name: Companies.name,
        schema: CompaniesSchema,
      },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
