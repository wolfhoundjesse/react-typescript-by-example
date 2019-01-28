import { Guid } from 'guid-typescript';

export interface Client {
  id: Guid;
  lastName: string;
  firstName: string;
}