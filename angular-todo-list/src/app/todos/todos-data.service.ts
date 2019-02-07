import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  public getTodosKeys(tableName: string) {
    const query = this.db.database.ref(tableName).orderByKey();
    query.once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          // key will be "ada" the first time and "alan" the second time
          const key = childSnapshot.key;
          // childData will be the actual contents of the child
          const childData = childSnapshot.val();
          console.log(key, childData);
        });
      });
  }

  public getTodosData(tableName: string) {
    const todosData = this.db.list(tableName);
    /*this.getTodosKeys(tableName);*/
    /*this.db.database.ref('todos').push({id: '1', name: 'aaa'});*/
    return todosData.valueChanges();
  }
}
