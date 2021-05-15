import { Greeter } from '../src/index';

describe("Simple expression tests", () => {
  test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
  });
});