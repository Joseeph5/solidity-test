# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

### Features

1. Validate students who passed the examen.
2. Check if student has passed the examen.
3. Get a list of all passed students.

### Built using

- **Solidity**: Smart Contracts
- **HardHat**: Development environment

### Function
- **validateStudent:**
Store passed students' addresses in a state on the blockchain, only the owner can call this function.
- **checkStudent:**
Check if student has passed(return true if the student has passed the examen and false if not).
- **getPassedStudents:**
  Return list of all the passed students.
- **owner:**
  Return the owner's address
- **transferOwnership:**
  Transfers ownership of the contract to a new account, only be called by the current owner
- **renounceOwnership:**
  Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.
