import { preload } from "../model/fetchQuestions";

jest.mock('../model/fetch')

describe("preloaded fetch", () => {
  test("does not preload if preload count is zero", async () => {
    const fn = jest.fn(async () => {});
    const load = preload(fn, 0);

    expect(fn).not.toHaveBeenCalled();

    await load();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("preloads", async () => {
    let callCount = 0;
    const fn = jest.fn(async () => ++callCount);
    const load = preload(fn, 1);

    expect(fn).toHaveBeenCalledTimes(1);

    await Promise.resolve();

    expect(await load()).toEqual(1);

    expect(fn).toHaveBeenCalledTimes(2);

    expect(await load()).toEqual(2);
  });
});
