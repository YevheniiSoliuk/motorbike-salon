import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Role from './entities/role.entity';
import { Repository } from 'typeorm';
import { RoleType } from './types/roles';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {
    this.createDefaultRoles();
  }

  async getRoleByName(name: RoleType) {
    return await this.roleRepository.findOneBy({ name });
  }

  private async createDefaultRoles() {
    const roles = await this.roleRepository.find();

    if (roles.length) {
      return;
    }

    const superAdminRole = this.roleRepository.create({
      name: 'super-admin',
    });
    const adminRole = this.roleRepository.create({
      name: 'admin',
    });
    const userRole = this.roleRepository.create({
      name: 'user',
    });

    await superAdminRole.save();
    await adminRole.save();
    await userRole.save();
  }
}
