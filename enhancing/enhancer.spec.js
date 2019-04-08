const enhancer = require('./enhancer.js');
// test away!
const davina = {
  name: 'Davina',
  enhancement: 15,
  durability: 90
}

describe('enhancer.js', () => {
  describe('repair(item)', () => {
    it('should return a new item with the durability restored to 100.', () => {
      //assertions
      const {name, enhancement} = davina
      expect(enhancer.repair(davina)).toEqual({
        name: name,
        enhancement: enhancement,
        durability: 100
      })
    })
  })

  describe('succeed(item)', () => {
    const {name, durability, enhancement} = davina
    if(enhancement < 20) {
      it('should return a new item object modified', () => {
        expect(enhancer.succeed(davina)).toEqual({
          name: name,
          enhancement: enhancement + 1,
          durability: durability
        })
      })
    } else{
      it('should return unchanged if enhancement is greater than 20', () => {
        expect(enhancer.succeed(davina)).toEqual({
          name: name,
          enhancement: enhancement,
          durability: durability
        })
      })
    }
  })

  describe('fail(item)', () => {
    const {name, enhancement, durability} = davina
    if(enhancement < 15) {
      it('should return an object with a durability less than 5', () => {
        expect(enhancer.fail(davina)).toEqual({
          name: name,
          enhancement: enhancement,
          durability: durability -= 5
        })
      })
    } else {
      it('should return unchanged if enhancement is greater than 5', () => {
        expect(enhancer.fail(davina)).toEqual({
          name: name,
          enhancement: enhancement,
          durability: durability
        })
      })
    }
  })
})
