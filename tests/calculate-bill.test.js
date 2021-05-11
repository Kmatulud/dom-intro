describe('The Calculate-Bill widget', function(){
    it('should update the overall total with the call cost', function(){
        let calculatedFactory = CalculateFactory();
        calculatedFactory.checkTheBill('call');
        assert.equal(2.75, calculatedFactory.allTotals());
    })
     it('should update the overall total with the sms cost', function(){
        let calculatedFactory = CalculateFactory();
        calculatedFactory.checkTheBill('sms');
        assert.equal(0.75, calculatedFactory.allTotals());
    })
    it ('should add the call and sms cost and update the overall total', function(){
        let calculatedFactory = CalculateFactory();
        calculatedFactory.checkTheBill('sms,call');
        assert.equal(3.5, calculatedFactory.allTotals());
    })
    describe('Warning and Critical levels', function(){
        it('should return class name of "warning" if overall total is 20', function(){
            let calculatedFactory = CalculateFactory();
            assert.equal('warning', calculatedFactory.checkTheLevels(20));
        })
        it('should return class name of "warning" if overall total is greater than 20 but less that 30', function(){
            let calculatedFactory = CalculateFactory();
            assert.equal('warning', calculatedFactory.checkTheLevels(25));
        })
        it('should return class name of "danger" if overall total is 30', function(){
            let calculatedFactory = CalculateFactory();
            assert.equal('danger', calculatedFactory.checkTheLevels(30));
        })
        it('should return class name of "danger" if overall total is greater than 30', function(){
            let calculatedFactory = CalculateFactory();
            assert.equal('danger', calculatedFactory.checkTheLevels(40));
        })
    })
});