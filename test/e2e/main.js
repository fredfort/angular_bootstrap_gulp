'use strict';

describe('angularjs homepage todo list', function() {

	var link1,link2, link3;
	beforeEach(function() {
		//init test

	});

	it('should automatically redirect to /welcome when location hash is empty', function() {
    	browser.get('http://localhost:9003/');
    	expect(browser.getLocationAbsUrl()).toBe("/welcome");
  	});

	it('should have a title', function() {
	    expect(browser.getTitle()).toEqual('Angular bootstrap');
	});

	it('should initialize the data variable', function(){
		var environmentSpan = element(by.binding('data.environment'));
		expect(environmentSpan.getText()).toContain('dev');
	});

	it('should go to page 1', function() {
		link1 = element(by.css('.module1Link'));
		link1.click();
		expect(browser.getLocationAbsUrl()).toBe("/module1");
	});

	it('should resolve the module1Data', function(){
		var data = element.all(by.repeater('data in module1.module1Data'));
		expect(data.count()).toBe(3);
	});

	it('should go to page 2', function() {
		link2 = element(by.css('.module2Link'));
		link2.click();
		expect(browser.getLocationAbsUrl()).toBe("/module2");
	});

	it('should stay on the current page', function() {
		link3 = element(by.css('.module3Link'));
		link3.click();
		expect(browser.getLocationAbsUrl()).toBe("/module2");
	});

});