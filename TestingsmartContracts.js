const assert = require('assert');
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

class Car{
  park(){
    return 'stopped';
  }
  drive(){
    return 'vroom';
  }
}
let car;
// now we need to run test on the class Car

beforeEach(()=>{
  car = new Car();
});
describe('Car',() =>{
  it('car can park',()=>{
    assert.equal(car.park(),'stopped');
  });
  it('can drive',() =>{
    assert.equal(car.drive(),'vroom');
  })
});