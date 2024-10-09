import Dexie, { Table } from 'dexie';

export interface Email {
  id?: number;
  email: string;
  timestamp: Date;
}

export class MyDatabase extends Dexie {
  emails!: Table<Email>;

  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      emails: '++id, email, timestamp'
    });
  }
}

export const db = new MyDatabase();