import {classNames} from "./classNames";

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['test'])).toBe('someClass test');
  });

  test('with mods', () => {
    expect(classNames('someClass', {hovered: true, scrollable: true}, ['test'])).toBe('someClass test hovered scrollable');
  });

  test('with mods false', () => {
    expect(classNames('someClass', {hovered: true, scrollable: false}, ['test'])).toBe('someClass test hovered');
  });

  test('with mods undefined', () => {
    expect(classNames('someClass', {hovered: true, scrollable: undefined}, ['test'])).toBe('someClass test hovered');
  });
});
