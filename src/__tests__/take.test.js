import take from '../take';

describe('take', () => {
  it('takes the specified number of elements from the input array', () => {
    expect(take(['apple', 'orange', 'banana'], 2)).toEqual(['apple', 'orange']);
  });
  it('starts at the beginning of the input array when the specified number is larger than the number of elements', () => {
    expect(take(['apple', 'orange', 'banana'], 4)).toEqual(['apple', 'orange', 'banana', 'apple']);
  });
  it('iterates over multiple circular iterations of the array', () => {
    const expected = ['apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple'];
    expect(take(['apple', 'orange', 'banana'], 7)).toEqual(expected);
  });
});
