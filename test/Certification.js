const { time, loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs');
const { expect } = require('chai');
const { ethers } = require('hardhat');

let Certification, certi;

describe('Certification Deployment', async function () {
  // Contracts are deployed using the first signer/account by default
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    Certification = await ethers.getContractFactory('Certification');
    certi = await Certification.deploy();

    return { certi, owner, otherAccount };
  }

  it('Deployment successful', async function () {
    const { certi, owner } = await loadFixture(deployOneYearLockFixture);
    expect(certi).to.not.be.null;
  });

  it('Should set the right owner', async function () {
    const { certi, owner } = await loadFixture(deployOneYearLockFixture);
    expect(await certi.owner()).to.equal(owner.address);
  });
});
