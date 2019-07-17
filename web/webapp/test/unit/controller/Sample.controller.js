/*global QUnit*/

sap.ui.define([
	"com/autobots/web/controller/Sample.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Sample Controller");

	QUnit.test("I should test the Sample controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});