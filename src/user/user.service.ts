import * as crypto from 'crypto';
import { Injectable, BadRequestException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository, ObjectID } from 'typeorm';
import { CreateUserDto } from './models/createUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(newUser: CreateUserDto) {
    const entity = Object.assign(new UserEntity(), newUser);
    return this.userRepository.save(entity)
    .catch(error => {
      /* TODO: Handle creation error correctly */
      if (!error || !error.err || !error.err.code) {
        return HttpStatus.NOT_ACCEPTABLE;
      }

      switch (error.err.code) {
        case 11000:
          return HttpStatus.CONFLICT;

        default:
          return error.err;
      }
    });
  }

  async find(query: any) {
    return this.userRepository.find(query);
  }

  async findById(id) {
    return await this.userRepository.findOne(id);
  }

  async findOne(query: any) {
    return this.userRepository.findOne(query);
  }
  createAffiliateByUser(user) {
    // validate if user exists
    // view user.affiliate
    // this is POST, so if user has affiliate, throw error (update only in put)
  }
}
