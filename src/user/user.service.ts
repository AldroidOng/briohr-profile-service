import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'shared/schemas/User.schema';
import { GetUserRequest, GetUserResponse } from 'shared/types/user-event.types';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUser(payload: GetUserRequest): Promise<GetUserResponse> {
    const userInfo = await this.userModel
      .findOne({ username: payload.username })
      .populate('company', 'companyName')
      .populate('settings', 'channel');

    if (!userInfo) {
      throw new Error('User not found');
    }

    return {
      id: userInfo._id.toString(),
      username: userInfo.username,
      email: userInfo.email,
      channel: userInfo.settings.channel,
      companyName: userInfo.company.companyName,
    };
  }
}
