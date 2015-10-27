describe('leetspeak', function() {
  it("remains the same when no rules are applied.", function() {
    expect(leetspeak("java")).to.equal("java");
  });

  it("replaces all instances of the letter 'e' with the number '3'.", function() {
    expect(leetspeak("pea")).to.equal("p3a");
  });

});
