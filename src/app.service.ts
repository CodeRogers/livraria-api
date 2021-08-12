import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  constructor(private sequelize: Sequelize) {
    this.sincronizaDB();
  }

  async sincronizaDB() {
    await this.sequelize.sync();
  }
}
