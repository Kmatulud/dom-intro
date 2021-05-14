describe('The Bill With Settings Factory function', function(){
    describe('Set The Values', function(){
        it('should be able to set the call cost',function(){
            let settingsFactory = SettingsBillFactory();
            let settingsFactory2 = SettingsBillFactory();

            settingsFactory.setCallCost(2.55);
            settingsFactory2.setCallCost(1.99);
            assert.equal(2.55, settingsFactory.getCallCost());
            assert.equal(1.99, settingsFactory2.getCallCost());
        })
        it('should be able to set the sms cost', function(){
            let settingsFactory = SettingsBillFactory();
            let settingsFactory2 = SettingsBillFactory();

            settingsFactory.setSmsCost(0.25);
            settingsFactory2.setSmsCost(0.88);
            assert.equal(0.25, settingsFactory.getSmsCost());
            assert.equal(0.88, settingsFactory2.getSmsCost());
        })
        it('should be able to set the call and sms costs', function(){
            let settingsFactory = SettingsBillFactory();

            settingsFactory.setSmsCost(0.25);
            settingsFactory.setCallCost(1.88);
            assert.equal(0.25, settingsFactory.getSmsCost());
            assert.equal(1.88, settingsFactory.getCallCost());
        })
        it('should be able to set the warning value', function(){
            let settingsFactory = SettingsBillFactory();
            let settingsFactory2 = SettingsBillFactory();

            settingsFactory.setWarningLevel(30);
            settingsFactory2.setWarningLevel(45);
            assert.equal(30, settingsFactory.getWarningLevel());
            assert.equal(45, settingsFactory2.getWarningLevel());
        })
        it('should be able to set the critical value', function(){
            let settingsFactory = SettingsBillFactory();
            let settingsFactory2 = SettingsBillFactory();

            settingsFactory.setCriticalLevel(55);
            settingsFactory2.setCriticalLevel(72);
            assert.equal(55, settingsFactory.getCriticalLevel());
            assert.equal(72, settingsFactory2.getCriticalLevel());
        })
        it('should be able to set the critical and warning values', function(){
            let settingsFactory = SettingsBillFactory();
            settingsFactory.setWarningLevel(55);
            settingsFactory.setCriticalLevel(72);
            assert.equal(55, settingsFactory.getWarningLevel());
            assert.equal(72, settingsFactory.getCriticalLevel());
        })
    })
    describe('Use The Values', function(){
        it('should be able to make 2 calls at at R2.75 each and update overall total', function(){
            let settingsFactory = SettingsBillFactory();
            settingsFactory.setCriticalLevel(10);

            settingsFactory.setCallCost(2.75);
            settingsFactory.setSmsCost(0.25);

            settingsFactory.updateCallTotal();
            settingsFactory.updateCallTotal();

            assert.equal(5,5, settingsFactory.getCallTotal());
            assert.equal(0.00, settingsFactory.getSmsTotal());
            assert.equal(5.5, settingsFactory.getOverallTotal());
        })
        it("should be able to send 3 sms's at at 0.75c each and update overall total", function(){
            let settingsFactory = SettingsBillFactory();
            settingsFactory.setCriticalLevel(10);

            settingsFactory.setCallCost(0.25);
            settingsFactory.setSmsCost(0.75);

            settingsFactory.updateSmsTotal();
            settingsFactory.updateSmsTotal();
            settingsFactory.updateSmsTotal();

            assert.equal(2.25, settingsFactory.getSmsTotal());
            assert.equal(0.00, settingsFactory.getCallTotal());
            assert.equal(2.25, settingsFactory.getOverallTotal());

        })
          it("should be able to send 2 sms's at at 1.75c each and make 3 calls at R2.00 each and update overall total", function(){
            let settingsFactory = SettingsBillFactory();
            settingsFactory.setCriticalLevel(10);

            settingsFactory.setCallCost(2.00);
            settingsFactory.setSmsCost(1.75);

            settingsFactory.updateSmsTotal();
            settingsFactory.updateSmsTotal();
            settingsFactory.updateCallTotal();
            settingsFactory.updateCallTotal();
            settingsFactory.updateCallTotal();

            assert.equal(3.50, settingsFactory.getSmsTotal());
            assert.equal(6.00, settingsFactory.getCallTotal());
            assert.equal(9.50, settingsFactory.getOverallTotal());

        })
        describe('Warning and Critical Levels', function(){
            it('should return class name of "warning" if warning level is reached', function(){
                let settingsFactory = SettingsBillFactory();
                settingsFactory.setCallCost(5);
                settingsFactory.setWarningLevel(30);
                settingsFactory.setCriticalLevel(50);
                

                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();

                assert.equal('warning', settingsFactory.checkTheLevels())
            })
            it('should return class name of "danger" if critical level is reached', function(){
                let settingsFactory = SettingsBillFactory();
                settingsFactory.setCallCost(5);
                settingsFactory.setSmsCost(1);

                settingsFactory.setWarningLevel(20);
                settingsFactory.setCriticalLevel(45);

                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateCallTotal();
                settingsFactory.updateSmsTotal();
                settingsFactory.updateSmsTotal();
                settingsFactory.updateSmsTotal();
                settingsFactory.updateSmsTotal();
                settingsFactory.updateSmsTotal();                

                assert.equal('danger', settingsFactory.checkTheLevels())
            })
        })
    })
})