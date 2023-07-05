export const persistLocalStorage = <T>(ITEM_KEY: string, value: T) => localStorage.setItem(ITEM_KEY, JSON.stringify(value));

export const clearLocalStorage = (ITEM_KEY: string) => localStorage.removeItem(ITEM_KEY);

export const getLocalStorage = (ITEM_KEY: string) => JSON.parse(`${localStorage.getItem(ITEM_KEY)}`);
