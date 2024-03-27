/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return `Usuário ${createUserDto} criado com sucesso.`;
  }
 
  findAll() {
    return `Usuários retornados com sucesso.`;
  }

  findOne(id: number) {
    return `Usuário #${id} retornado com sucesso.`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `Usuário ${updateUserDto} atualizado com sucesso.`;
  }

  remove(id: number) {
    return `Usuário #${id} removido com sucesso.`;
  }
}
