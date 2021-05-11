describe('The Radio Bill Widget', function(){
    it('should update both the call total and the overall with call cost if call radio button is selected', function(){
        let theRadioFactory = RadioFactory();
        theRadioFactory.checkCheckedBill('call');
        assert.equal(2.75, theRadioFactory.callTotal());
        assert.equal(2.75, theRadioFactory.overallTotal());
    })
    it('should update both the sms total and the overall total with sms cost if sms radio button is selected', function(){
        let theRadioFactory = RadioFactory();
        theRadioFactory.checkCheckedBill('sms');
        assert.equal(0.75, theRadioFactory.smsTotal());
        assert.equal(0.75, theRadioFactory.overallTotal());
    })
    describe('Warning and Critical levels', function(){
        it('should return class name of "warning" if overall total is 30', function(){
            let theRadioFactory = RadioFactory();
            assert.equal('warning', theRadioFactory.checkAllLevels(30));
        }) 
        it ('should return class name of "warning" if overall total is greater than 30 but less that 50', function(){
            let theRadioFactory = RadioFactory();
            assert.equal('warning', theRadioFactory.checkAllLevels(39));
        })
        it ('should return class name of "danger" if overall total is 50', function(){
            let theRadioFactory = RadioFactory();
            assert.equal('danger', theRadioFactory.checkAllLevels(50));
        })
        it ('should return class name of "danger" if overall total is greater that 50', function(){
            let theRadioFactory = RadioFactory();
            assert.equal('danger', theRadioFactory.checkAllLevels(70));
        })
    }) 
})