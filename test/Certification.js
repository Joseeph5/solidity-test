const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
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
    const { certi } = await loadFixture(deployOneYearLockFixture);
    expect(certi).to.not.be.null;
  });

  it('Should set the right owner', async function () {
    const { certi, owner } = await loadFixture(deployOneYearLockFixture);
    expect(await certi.owner()).to.equal(owner.address);
  });

  it('Should validate a student if called from the owner', async function () {
    const { certi, otherAccount } = await loadFixture(deployOneYearLockFixture);
    const validate = await certi.validateStudent([otherAccount.address]);
    expect(validate).to.have.property('hash');
  });

  it('Should revert with the right error if called from another account', async function () {
    const { certi, otherAccount } = await loadFixture(deployOneYearLockFixture);
    await expect(
      certi.connect(otherAccount).validateStudent([otherAccount.address])
    ).to.be.revertedWith('Ownable: caller is not the owner');
  });
});
