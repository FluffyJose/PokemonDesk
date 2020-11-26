import toCapitalizeFirstLetter from './capitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку и возвращать строку с первой заглавной и остальными прописными буквами', () => {
    const result = toCapitalizeFirstLetter('TEST');
    expect(result).toEqual('Test');
  });

  test('Должна принимать строку и возвращать строку с первой заглавной и остальными прописными буквами', () => {
    const result = toCapitalizeFirstLetter('test');
    expect(result).toEqual('Test');
  });

  test('Должна принимать строку и возвращать строку с первой заглавной и остальными прописными буквами', () => {
    const result = toCapitalizeFirstLetter('tEST');
    expect(result).toEqual('Test');
  });
});
