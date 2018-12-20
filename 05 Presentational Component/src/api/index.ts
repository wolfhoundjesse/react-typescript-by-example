import { Client } from '../models';
import { clients } from './mock-data';

const fetchClients = (): Promise<Client[]> => {
  return Promise.resolve(clients);
};

export const clientAPI = {
  fetchClients,
};