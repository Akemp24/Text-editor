import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // initialize database
  const db = await openDB('jate', 1);
  // start a transaction with read-write access
  const tx = db.transaction('jate', 'readwrite');
  // get the object store
  const store = tx.objectStore('jate');
  // add content to the object store
  const request = await store.put({ id:1, value: content });
  // complete transcation
  const result = await request;
  console.log('Content added to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // initialize database
  const db = await openDB('jate', 1);
  // start transaction with read only access
  const tx = db.transaction('jate', 'readonly');
  // get object store
  const store = tx.objectStore('jate');
  // get all content from object store
  const request =store.getAll();
  const result = await request;
  // complete transaction
  console.log('content read from database', result)
  return result.map((item) => item.value);
  // return result;
}

initdb();
