import { clearLocalStorage, getLocalStorage, persistLocalStorage } from "./localStorage.utils";

const ITEM_KEY = "item";

describe("Test localStorage utils", () => {
  it("Should persists the data in localStorage.", () => {
    const MOCK_ITEM = {
      id: 1,
      title: "Lorem ipsum.",
    };

    persistLocalStorage(ITEM_KEY, MOCK_ITEM);

    const localData = JSON.parse(`${localStorage.getItem(ITEM_KEY)}`);

    expect(MOCK_ITEM).toStrictEqual(localData);
  });

  it("Should get the data from the localStorage.", () => {
    const MOCK_ITEM = {
      id: 2,
      title: "Lorem ipsum.",
    };

    localStorage.setItem(ITEM_KEY, JSON.stringify(MOCK_ITEM));

    const localData = getLocalStorage(ITEM_KEY);

    expect(MOCK_ITEM).toStrictEqual(localData);
  });

  it("Should remove the data from the localStorage.", () => {
    const MOCK_ITEM = {
      id: 3,
      title: "Lorem ipsum.",
    };

    localStorage.setItem(ITEM_KEY, JSON.stringify(MOCK_ITEM));

    clearLocalStorage(ITEM_KEY);
    const localData = JSON.parse(`${localStorage.getItem(ITEM_KEY)}`);

    expect(null).toStrictEqual(localData);
  });
});
