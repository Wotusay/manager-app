import { v4 } from 'uuid';

class User {
  id: string;
  name: string;
  group: string;
  email: string;

  constructor({
    id = v4(),
    name,
    email,
    group,
  }: {
    id?: string;
    name: string;
    email: string;
    group: string;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.group = group;
  }
}

export default User;
