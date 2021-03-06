import { Maybe, Just, Nothing } from '../src/maybe';

describe('Maybe', () => {
  describe('Nothing', () => {
    describe('map', () => {
      test('it disregards the mapper and returns a Nothing', () => {
        expect(Nothing<number>().map((x: number) => x + 2)).toEqual(Nothing());
      });
    });

    describe('flatMap', () => {
      describe('with a mapper that returns Nothing', () => {
        test('it disregards the mapper and returns a Nothing', () => {
          expect(Nothing<number>().flatMap((x: number) => Nothing())).toEqual(
            Nothing()
          );
        });
      });

      describe('with a mapper that returns Just', () => {
        test('it disregards the mapper and returns a Nothing', () => {
          expect(Nothing<number>().flatMap((x: number) => Just(2))).toEqual(
            Nothing()
          );
        });
      });
    });
  });

  describe('Just', () => {
    describe('map', () => {
      test('it runs the mapper and re-wraps in a Just', () => {
        expect(Just(3).map((x: number) => x + 2)).toEqual(Just(5));
      });
    });

    describe('flatMap', () => {
      describe('with a mapper that returns Nothing', () => {
        test('it returns a Nothing', () => {
          expect(Just(3).flatMap((x: number) => Nothing())).toEqual(Nothing());
        });
      });

      describe('with a mapper that returns Just', () => {
        test('it returns the Just from the mapper', () => {
          expect(Just(3).flatMap((x: number) => Just(16))).toEqual(Just(16));
        });
      });
    });
  });
});
