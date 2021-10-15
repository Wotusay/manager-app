import { getDatabase, set, ref, get, child } from 'firebase/database';

class UserService {
  db: any;
  constructor(firebase: any) {
    this.db = getDatabase(firebase);
  }

  isRegisterd = async (username: string, sendData: any): Promise<any> => {
    const dbRef = ref(this.db);
    return await get(child(dbRef, `users/${username}`))
      .then(async snapshot => {
        if (snapshot.exists()) {
          return sendData(snapshot.val());
        } else {
          return false;
        }
      })
      .catch(error => {
        return console.error(error);
      });
  };

  create = async (user: any): Promise<void> => {
    set(ref(this.db, `users/${user.name}`), {
      username: user.name,
      id: user.uid,
      email: user.email,
      group: user.group,
    });
  };
}

export default UserService;
