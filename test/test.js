const donationT = artifacts.require("donationT");
 
contract("donationT", async function(accounts){
  it (
    "should add Organization", async function(){
    let instance = await donationT.deployed()
    await instance.registerOrganization( "ong", "u");//.send({from: this.account });
  // orgRegister[regCounter]  
    });

     it('should execute only by the owner', async()=>{
        let instance = await donationT.deployed()
        await instance.verifyOrganization(1);// {'from': accounts[0]});
        await instance.getPastEvents("allEvents", function(error, events){ console.log(events[0].returnValues.orgName, events[0].returnValues.orgCategory, events[0].returnValues.verificationTime);})
        //const value = await instance.verifyOrg(); //or getorg
     //_verifyOrganization(string  orgName, string  orgCategory, uint verificationTime);
      //  assert.equal(value, 'modifier');
      });

    });;
      
    it('set Executor', async()=>{
      let instance = await donationT.deployed()
      await instance.setExecutors(1, "Exec1", "Tech Company", 0x350E7690d21dE8d6D0042063B28481169c835b13 );// {'from': accounts[0]});
      await instance.getPastEvents("allEvents", function(error, events){ console.log(events[0].returnValues.orgName, events[0].returnValues.orgCategory, events[0].returnValues.verificationTime);})
    });
 

 
    
//function createCampaign(string memory campName, string memory campCategory, uint fundTarget, uint startDate, uint endDate, uint ExecNumbers) public registered { // only verfied Orgs
//function setExecutors(uint campID, string memory executName, string memory executCategory, address executAddress) public mycamp(campID){ //verifyOrg(campId =  address)
