import { beepBoop } from './../src/beepboop.js';

describe('beepBoop', function() {

  it('should retrun false', function() {
    var number = beepBoop(0);
    expect(number).toEqual(false);
  });
  it('should retrun true', function() {
      var number = beepBoop(1);
      expect(number).toEqual(true);
    });
    it('should retrun true', function() {
        var number = beepBoop(11);
        expect(number).toEqual(true);
      });
});
