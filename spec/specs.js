describe('leetspeak', function() {

  it("replaces all instances of the letter 'e' with the number '3'.", function() {
    expect(leetspeak("pea")).to.equal("p3a");
  });

  it("It replaces all instances of the letter 'o' with the number '0'", function() {
    expect(leetspeak("noob")).to.equal("n00b");
  });

});
