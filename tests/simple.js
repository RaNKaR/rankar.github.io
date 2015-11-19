describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains spec with an not expectation", function() {
        expect(true).toBe(false);
    });
});

describe("Something new", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains not expectation", function() {
        expect(flase).toBe(false);
    });
});