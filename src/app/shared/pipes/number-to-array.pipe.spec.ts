import { NumberToArrayPipe } from './number-to-array.pipe';

describe('NumberToArrayPipe', () => {

  let pipe: NumberToArrayPipe;

  beforeEach(() => {
    pipe = new NumberToArrayPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an array of 10 elements', () => {
    expect(pipe.transform(10).length).toEqual(10);
  });
});
