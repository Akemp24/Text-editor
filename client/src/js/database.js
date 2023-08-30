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
  const db = await initdb();
  // start a transaction with read-write access
  const tx = db.transaction('jate', 'readwrite');
  // get the object store
  const store = tx.objectStore('jate');
  // add content to the object store
  await store.add({ content });
  // complete transcation
  await tx.complete;
  console.log('Content added to the database');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // initialize database
  const db = await initdb();
  // start transaction with read only access
  const tx = db.transaction('jate', 'readonly');
  // get object store
  const store = tx.objectStore('jate');
  // get all content from object store
  const content = await store.getAll();
  // complete transaction
  await tx.complete;
  return content;
}

initdb();
