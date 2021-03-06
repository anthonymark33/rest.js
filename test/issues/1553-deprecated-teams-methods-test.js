const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/1553", () => {
  it("octokit.teams.removeMember()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.teams.removeMember).to.equal("function");
  });
  it("octokit.teams.removeMembership()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.teams.removeMembership).to.equal("function");
  });
  it("octokit.teams.listMembers()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.teams.listMembers).to.equal("function");
  });
  it("octokit.teams.listMembers.endpoint()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.teams.listMembers.endpoint).to.equal("function");
  });
  it("octokit.teams.listMembersLegacy.endpoint()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.teams.listMembersLegacy.endpoint).to.equal(
      "function"
    );
  });
});
