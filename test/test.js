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
      
