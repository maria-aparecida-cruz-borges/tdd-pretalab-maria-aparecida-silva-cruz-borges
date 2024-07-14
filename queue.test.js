const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
      expect(queue.size()).toEqual()
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    expect(queue.add('item1')).toEqual(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
      expect(queue.peek()).toEqual(0)
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
      expect(queue.dequeue()).toEqual(0);
      expect(queue.size()).toEqual(0);
  })
})
