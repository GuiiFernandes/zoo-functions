const getOpeningHours = require('../src/getOpeningHours');

jest.mock('../data/zoo_data', () => ({
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 12, close: 10 },
    Sunday: { open: 8, close: 12 },
    Monday: { open: 0, close: 0 },
  },
}));

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao não passar argumento retorna o objeto hours.', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 12, close: 10 },
      Sunday: { open: 8, close: 12 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Verifica se ao passar um dia inválido retorna um Error', () => {
    expect(() => getOpeningHours('invalidDay')).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se ao passar uma hora inválida retorna um Erro', () => {
    expect(() => getOpeningHours('Tuesday', 'XX:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Tuesday', '10:XX-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Tuesday', '10:00-XX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se a hora não estiver entre 0 e 12 e os minutos entre 0 e 59 retorna um Erro', () => {
    expect(() => getOpeningHours('Tuesday', '16:00-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:70-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Verifica se ao passar um dia e hora valida retorna a string correta', () => {
    const expected = ['The zoo is closed', 'The zoo is open'];
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expected[0]);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(expected[1]);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(expected[0]);
    expect(getOpeningHours('Wednesday', '12:00-AM')).toBe(expected[0]);
    expect(getOpeningHours('Wednesday', '12:00-PM')).toBe(expected[1]);
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe(expected[1]);
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe(expected[1]);
  });
});
