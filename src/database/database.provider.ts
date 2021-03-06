import { Sequelize } from 'sequelize-typescript';
import { Form001 } from 'src/form001/model/form001.model';



export const DatabaseProvider = [
  {
    provide: 'db',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '0123456',
        database: 'ex-sequelize',
      });
    sequelize.addModels([Form001]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

