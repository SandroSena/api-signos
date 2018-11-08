require("mocha");
const expect = require("chai").expect;
const getSigno = require("./signoController").getSigno;

describe("signoController", function() {
  describe("getSigno", function() {
    it("Capricornio", function() {
      const result = getSigno("06-01-1992");
      expect(result).equals("Capricornio");
    });

    it("Aquário", function() {
      const result = getSigno("18-02-1992");
      expect(result).equals("Aquário");
    });

    it("Peixes", function() {
      const result = getSigno("20-03-1992");
      expect(result).equals("Peixes");
    });

    it("Áries", function() {
      const result = getSigno("19-04-1992");
      expect(result).equals("Áries");
    });

    it("Áries", function() {
      const result = getSigno("19-04-1992");
      expect(result).equals("Áries");
    });

    it("Touro", function() {
      const result = getSigno("04-05-1992");
      expect(result).equals("Touro");
    });

    it("Gêmeos", function() {
      const result = getSigno("21-05-1992");
      expect(result).equals("Gêmeos");
    });

    it("Câncer", function() {
      const result = getSigno("22-06-1992");
      expect(result).equals("Câncer");
    });

    it("Leão", function() {
      const result = getSigno("23-07-1992");
      expect(result).equals("Leão");
    });

    it("Virgem", function() {
      const result = getSigno("23-08-1992");
      expect(result).equals("Virgem");
    });

    it("Libra", function() {
      const result = getSigno("30-09-1992");
      expect(result).equals("Libra");
    });

    it("Escorpião", function() {
      const result = getSigno("25-10-1992");
      expect(result).equals("Escorpião");
    });

    it("Sagitário", function() {
      const result = getSigno("25-11-1992");
      expect(result).equals("Sagitário");
    });
  });
});
