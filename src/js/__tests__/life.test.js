import characterLife from '../life';

test('life critical', () => {
  const result = characterLife({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});
test('life wounded fracture', () => {
  const result = characterLife({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});
test('life wounded', () => {
  const result = characterLife({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});
test('life wounded fracture 2', () => {
  const result = characterLife({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});
test('life healthy', () => {
  const result = characterLife({ name: 'Маг', health: 70 });

  expect(result).toBe('healthy');
});
