const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se não for passado parametro a função retorna undefined.', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se o parâmetro não é uma string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(10)).toBe(expected);
    expect(handlerElephants(true)).toBe(expected);
    expect(handlerElephants(null)).toBe(expected);
  });

  it('Verifica se ao passar como parâmetro "count" retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se ao passar como parâmetro "names" retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = [
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ];
    expect(handlerElephants('names')).toEqual(expected);
  });

  it('Verifica se ao passar como parâmetro "averageAge" retorna a média de idade dos elefantes', () => {
    const expected = 10.5;
    expect(handlerElephants('averageAge')).toBe(expected);
  });

  it('Verifica se ao passar como parâmetro "averageAge" retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    expect(handlerElephants('location')).toBe(expected);
  });

  it('Verifica se ao passar como parâmetro "popularity" retorna a popularidade dos elefantes', () => {
    const expected = 5;
    expect(handlerElephants('popularity')).toBe(expected);
  });

  it('Verifica se ao passar como parâmetro "availability" retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expected);
  });

  it('Verifica se ao passar como parâmetro uma string inválida retorna null', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
