/**
 * Woden
 * Specification for Woden REST API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Woden);
  }
}(this, function(expect, Woden) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Woden.Body();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Body', function() {
    it('should create an instance of Body', function() {
      // uncomment below and update the code to test Body
      //var instane = new Woden.Body();
      //expect(instance).to.be.a(Woden.Body);
    });

    it('should have the property oldPassword (base name: "oldPassword")', function() {
      // uncomment below and update the code to test the property oldPassword
      //var instane = new Woden.Body();
      //expect(instance).to.be();
    });

    it('should have the property newPassword (base name: "newPassword")', function() {
      // uncomment below and update the code to test the property newPassword
      //var instane = new Woden.Body();
      //expect(instance).to.be();
    });

  });

}));
