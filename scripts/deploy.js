// scripts/deploy.js
async function main() {
    // Replace with your actual governance token address
    const governanceTokenAddress = "0x5141A4cEa1e24736426F7aeCC61AcC509119072b";

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the Governor contract
    const Governor = await ethers.getContractFactory("Accused");
    const governor = await Governor.deploy(governanceTokenAddress);
    await governor.deployed();

    console.log("Governor Contract deployed to:", governor.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
