import * as path from "node:path";

// методи створення абсолютого шляху
// const contactPAth = path.join(process.cwd(), 'src', 'db', 'db_contacts.json');
// const contactPath = path.resolve('src', 'db', 'db_contacts.json');

export const PATH_DB_CONTACTS = path.resolve('src', 'db', 'db_contacts.json');
