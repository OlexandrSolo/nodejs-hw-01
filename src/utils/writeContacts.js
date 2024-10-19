import { PATH_DB_CONTACTS } from '../constants/contacts.js';
import { writeFile } from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {
    return writeFile(PATH_DB_CONTACTS, JSON.stringify(updatedContacts, null, 2))
};

// JSON.stringify(updatedContacts, null, 2) другим аргументом виступає що на що ми хочемо замінити одні символи на інші
// у нашому випадку ми замінювати нічого не бажаємо тому null, і третій аргумент це відступи, якщо буде 1 або більше то відповідно будуть відступи і форматування