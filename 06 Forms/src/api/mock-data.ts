import { Guid } from 'guid-typescript';

import { Client } from '../models';


export const clients: Client[] =
  [
    {
      id: Guid.create(),
      lastName: 'Lovelace',
      firstName: 'Ada'
    },
    {
      id: Guid.create(),
      lastName: 'Turing',
      firstName: 'Alan'
    }
  ];