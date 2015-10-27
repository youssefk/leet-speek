describe('leetspeak', function() {

  it("replaces all instances of the letter 'e' with the number '3'", function() {
    expect(leetspeak("pea")).to.equal("p3a");
  });

  it("It replaces all instances of the letter 'o' with the number '0'", function() {
    expect(leetspeak("noob")).to.equal("n00b");
  });

  it("replaces all capital instances of the letter 'I' with the number '1'", function() {
    expect(leetspeak("Ink")).to.equal("1nk");
  });

  it("replaces all instances of the letter 't' with the number '7'", function() {
    expect(leetspeak("tree")).to.equal("7r33");
  });

  it("replaces all instances of the letter 's' with the letter 'z' except when it is the first letter in a word", function() {
    expect(leetspeak("sss")).to.equal("szz");
  });

});
