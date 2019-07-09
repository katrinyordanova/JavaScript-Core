let assert=require('chai').assert;
let HolidayPackage=require('./solution');

describe("HolidayPackage", function(){
    let chai;
    before(() => {
        chai = require("chai");
    });

    it("should should intanciate propery", function () {
        let testObj = new HolidayPackage("Sofia", "Summer");

        let result = testObj.destination === "Sofia" && testObj.season === "Summer" && testObj.vacationers !== undefined && testObj.insuranceIncluded === false;

        chai.assert.isTrue(result);
    });

    it("insuranceIncluded should setter should throw when invalid type is suplied", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        chai.assert.throw(function(){
            testObj.insuranceIncluded = "invalid type";
        }, "Insurance status must be a boolean");
    });

    it("insuranceIncluded should setter should work properly", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        testObj.insuranceIncluded = true;

        let result = testObj.insuranceIncluded;

        chai.assert.equal(testObj.insuranceIncluded, result);
    });

    it("addVacationer should throw when invalid type is provided", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        chai.assert.throw(function(){
            testObj.addVacationer(1);
        }, "Vacationer name must be a non-empty string");
    });

    it("addVacationer should throw when ' ' is provided", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        chai.assert.throw(function(){
            testObj.addVacationer(" ");
        }, "Vacationer name must be a non-empty string");
    });

    it("addVacationer should throw when invalid count of names is provided", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        chai.assert.throw(function(){
            testObj.addVacationer("Pesho Kirilov Ivanov");
        }, "Name must consist of first name and last name");
    });

    it("addVacationer should add when valid parameter is provided", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        testObj.addVacationer("Pesho Ivanov");

        let result = testObj.vacationers[0];

        chai.assert.equal(result, "Pesho Ivanov");
    });

    it("showVacationers should return 'No vacationers are added yet' when no vacationers are added", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        chai.assert.equal(testObj.showVacationers(), "No vacationers are added yet");
    });

    it("showVacationers should return propers tring vacationers are added", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");
        testObj.addVacationer("Pesho Ivanov");
        testObj.addVacationer("Georgi Petkov");
        testObj.addVacationer("Kiril Petrov");

        let result = testObj.showVacationers();

        let expectedResult = "Vacationers:\n" + "Pesho Ivanov\nGeorgi Petkov\nKiril Petrov";

        chai.assert.equal(testObj.showVacationers(), expectedResult);
    });

    it("generateHolidayPackage should throw when no vacationers are added", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");

        chai.assert.throw(function(){
            testObj.generateHolidayPackage()
        }, "There must be at least 1 vacationer added");
    });

    it("generateHolidayPackage without insurance in the Autumn", function(){
        let testObj = new HolidayPackage("Sofia", "Autumn");
        testObj.addVacationer("Pesho Ivanov");
        testObj.addVacationer("Georgi Petkov");
        testObj.addVacationer("Kiril Petrov");

        let actualResult = testObj.generateHolidayPackage();

        let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + "Sofia\n" + "Vacationers:\n"
            + "Pesho Ivanov\nGeorgi Petkov\nKiril Petrov"
            + "\n" + "Price: 1200";

        chai.assert.equal(actualResult, expectedResult);
    });

    it("generateHolidayPackage without insurance in the Summer", function(){
        let testObj = new HolidayPackage("Sofia", "Summer");
        testObj.addVacationer("Pesho Ivanov");
        testObj.addVacationer("Georgi Petkov");
        testObj.addVacationer("Kiril Petrov");

        let actualResult = testObj.generateHolidayPackage();

        let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + "Sofia\n" + "Vacationers:\n"
            + "Pesho Ivanov\nGeorgi Petkov\nKiril Petrov"
            + "\n" + "Price: 1400";

        chai.assert.equal(actualResult, expectedResult);
    });

    it("generateHolidayPackage with insurance in the Spring", function(){
        let testObj = new HolidayPackage("Sofia", "Spring");
        testObj.insuranceIncluded = true;
        testObj.addVacationer("Pesho Ivanov");
        testObj.addVacationer("Georgi Petkov");
        testObj.addVacationer("Kiril Petrov");

        let actualResult = testObj.generateHolidayPackage();

        let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + "Sofia\n" + "Vacationers:\n"
            + "Pesho Ivanov\nGeorgi Petkov\nKiril Petrov"
            + "\n" + "Price: 1300";

        chai.assert.equal(actualResult, expectedResult);
    });

    it("generateHolidayPackage with insurance in the Winter", function(){
        let testObj = new HolidayPackage("Sofia", "Winter");
        testObj.insuranceIncluded = true;
        testObj.addVacationer("Pesho Ivanov");
        testObj.addVacationer("Georgi Petkov");
        testObj.addVacationer("Kiril Petrov");

        let actualResult = testObj.generateHolidayPackage();

        let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + "Sofia\n" + "Vacationers:\n"
            + "Pesho Ivanov\nGeorgi Petkov\nKiril Petrov"
            + "\n" + "Price: 1500";

        chai.assert.equal(actualResult, expectedResult);
    });
});