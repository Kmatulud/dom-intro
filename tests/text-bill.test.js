describe('The Text-Bill widget', function(){
     it('should update both the call total and the overall total with call cost if string typed is call', function(){
         let textBillWidget = TextBillFactory();
         textBillWidget.check('call');
        assert.equal(2.75, textBillWidget.getCallPriceTotal());
        assert.equal(2.75, textBillWidget.getOverallTotal())

    })
     it('should update both the call total and the overall total with call cost if string typed is sms', function(){
         let textBillWidget = TextBillFactory();
         textBillWidget.check('sms');
        assert.equal(0.75, textBillWidget.getSmsPriceTotal());
        assert.equal(0.75, textBillWidget.getOverallTotal())
    })
    describe('Warning and Critical levels', function(){
        it('should return class name of "warning" if overall total is 30', function(){
            let textBillWidget = TextBillFactory();
            assert.equal('warning', textBillWidget.checkLevels(30));
        }) 
        it ('should return class name of "warning" if overall total is greater than 30 but less that 50',function(){
            let textBillWidget = TextBillFactory();
            assert.equal('warning', textBillWidget.checkLevels(39));
        })
        it ('should return class name of "danger" if overall total is 50', function(){
            let textBillWidget = TextBillFactory();
            assert.equal('danger', textBillWidget.checkLevels(50));
        })
        it ('should return class name of "danger" if overall total is greater that 50', function(){
            let textBillWidget = TextBillFactory();
            assert.equal('danger', textBillWidget.checkLevels(70));
        })
    })
});