import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contacts = await readContacts()
    console.log(contacts);
    const newContacts = Array.from({ length: number }, createFakeContact);
    const results = [...contacts, ...newContacts];
    await writeContacts(results)
};

generateContacts(5);
