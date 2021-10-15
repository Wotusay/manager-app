import { v4 } from 'uuid';

class User {
  id: string;
  name: string;
  group: string | undefined;
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
    group: string | undefined;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.group = group;
  }
}

export default User;
