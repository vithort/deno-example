import { Client } from 'https://deno.land/x/mysql/mod.ts';
import Aula from '../models/aula.ts';

export default async (): Promise<Aula[]> => {
  const client = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'root',
    password: '12345678',
    db: 'cod3r',
  });

  const registros = await client.query('select id, name from lessons');

  const aulas: Aula[] = registros.map(
    (reg: any): Aula => {
      return {
        id: reg.id,
        nome: reg.name,
      };
    }
  );

  return aulas;
};
