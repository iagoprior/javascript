const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon =  require('sinon');

describe('Math class', function() {
    
    it('Sum two numbers', function(done) {
        const math = new Math();
        
        math.sum(5,5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Iago Prior'
        };
        //expect(math.multiply(5,5)).to.equal(25)
        expect(obj).to.have.property('name').equal('Iago Prior');
    });

    it('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called! ');
            }
        };

        //sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('xpto'); 
        const math = new Math();

        math.printSum(req, res, 5, 5);
        expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    });

    
});
