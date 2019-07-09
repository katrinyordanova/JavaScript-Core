describe('rgbToHexColor', function () {
    it('should be undefined', function () {
        let red="g";
        let green="f";
        let blue="S";

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,undefined);
    });

    it('should be undefined', function () {
        let red=5;
        let green=0;
        let blue="g";

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,undefined);
    });

    it('should be undefined', function () {
        let red=-255;
        let green=250;
        let blue=-569;

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,undefined);
    });

    it('should be undefined', function () {
        let red=-1;
        let green=0;
        let blue=9;

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,undefined);
    });

    it('should be undefined', function () {
        let red=266;
        let green=0;
        let blue=9;

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,undefined);
    });

    it('should return correct result', function(){
        let red = 250;
        let green = 250;
        let blue = 250;

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, '#FAFAFA');
    });

    it('should be undefined', function () {
        let red=255;
        let green=255;
        let blue=255;

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,"#ffffff");
    });

    it('should be valid', function () {
        let red=0;
        let green=0;
        let blue=0;

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,"#000000");
    });

    it('should be valid', function () {
        let red=1;
        let green=2;
        let blue=3;

        let result=rgbToHexColor(red,green,blue);
        assert.equal(result,"#010203");
    });
});