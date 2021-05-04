import Web3 from "web3";
import metaCoinArtifact from "../../build/contracts/donationT.json";

const App = {
 web3: null,
 account: null,
 meta: null,

 start: async function() {
   const { web3 } = this;

   try {
     // get contract instance
     const networkId = await web3.eth.net.getId();
     const deployedNetwork = metaCoinArtifact.networks[networkId];
     this.meta = new web3.eth.Contract(
       metaCoinArtifact.abi,
       deployedNetwork.address,
     );

     // get accounts
     const accounts = await web3.eth.getAccounts();
     this.account = accounts[0];
     //console.log()

     this.refreshBalance();
   } catch (error) {
     console.error("Could not connect to contract or chain.");
   }
 },
 registerOrganization: async function() {
   const { registerOrganization } = this.meta.methods;
   const orgname = document.getElementById("orgName").value;
   const orgtype = document.getElementById("orgType").value;

   await registerOrganization(orgname, orgtype).send({ from: this.account }).then(function(res){
     console.log(res)
   });
;

 },
 sendDonation: async function() {
   const { donate } = this.meta.methods;
   const campID = document.getElementById("campID").value;
   const Amount = document.getElementById("Amount").value;
   await donate(campID, Amount).send({ from: this.account }).then(function(res){
     console.log(res);
   });
}
,
verifyOrg: async function() {
 const { verifyOrganization } = this.meta.methods;
 await verifyOrganization(1).send({ from: this.account }).then(function(res){
   console.log(res);
 });
},
createCamp: async function() {
 const { createCampaign } = this.meta.methods;

 await createCampaign("Camp1", "camp_Category", 1000000, 1618807133, 1618907133, 1).send({ from: this.account }).then(function(res){
   console.log(res);
 });

},
setExecutor: async function() {
 const { setExecutors } = this.meta.methods;

 await setExecutors(1,  "Aramco", "Oil Company", { from: this.account }).send({ from: this.account }).then(function(res){
   console.log(res);
 });
},

 refreshBalance: async function() {
   const { getBalance } = this.meta.methods;
   const balance = await getBalance(this.account).call();

   const balanceElement = document.getElementsByClassName("balance")[0];
   balanceElement.innerHTML = balance;
 },

 sendCoin: async function() {
   const amount = parseInt(document.getElementById("amount").value);
   const receiver = document.getElementById("receiver").value;

   this.setStatus("Initiating transaction... (please wait)");

   const { sendCoin } = this.meta.methods;
   await sendCoin(receiver, amount).send({ from: this.account });

   this.setStatus("Transaction complete!");
   this.refreshBalance();
 },

 setStatus: function(message) {
   const status = document.getElementById("status");
   status.innerHTML = message;
 },
};

window.App = App;

window.addEventListener("load", function() {
 if (window.ethereum) {
   // use MetaMask's provider
   App.web3 = new Web3(window.ethereum);
   window.ethereum.enable(); // get permission to access accounts
 } else {
   console.warn(
     //"No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
   );
   // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
   App.web3 = new Web3(
     new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
   );
 }

 App.start();

 //import Web3 from "web3";
//import donationT from "../../build/contracts/donationT.json";


function show(shown, hidden) {
 document.getElementById(shown).style.display='block';
 document.getElementById(hidden).style.display='none';
 return false;
}


function register()
 {
   var uname = document.getElementById("username").value;
   var pwd = document.getElementById("password").value;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(uname =='')
   {
     alert("please enter user name.");
   }
   else if(pwd=='')
   {
         alert("enter the password");
   }
   else if(uname=='testuser' && pwd=='password')
   {
     alert("Login done successfully");
   }
   else if(pwd.length < 6 || pwd.length > 6)
   {
     alert("Password min and max length is 6.");
   }
   else
   {
 alert('Login failed due to incorrect username and password');

     }
 }
function login()
 {
   var uname = document.getElementById("username").value;
   var pwd = document.getElementById("password").value;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(uname =='')
   {
     alert("please enter user name.");
   }
   else if(pwd=='')
   {
         alert("enter the password");
   }
   else if(uname=='testuser' && pwd=='password')
   {
     alert("Login done successfully");
   }
   else if(pwd.length < 6 || pwd.length > 6)
   {
     alert("Password min and max length is 6.");
   }
   else
   {
 alert('Login failed due to incorrect username and password');

     }
 }

   $(document).ready(function () {
       //@naresh action dynamic childs
       var next = 0;
       $("#add-more").click(function(e){
           e.preventDefault();
           var addto = "#field" + next;
           var addRemove = "#field" + (next);
           next = next + 1;
           var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_id">Executor Name</label> <div class="col-md-5"> <input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md"> </div></div><br><br> <!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_name">Executor Category</label> <div class="col-md-5"> <input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"> </div></div><br><br><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_address">Executors Address</label> <div class="col-md-5"> <input id="action_address" name="action_address" type="text" placeholder="" class="form-control input-md"> </div></div><br><br>';
           var newInput = $(newIn);
           var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
           var removeButton = $(removeBtn);
           $(addto).after(newInput);
           $(addRemove).after(removeButton);
           $("#field" + next).attr('data-source',$(addto).attr('data-source'));
           $("#count").val(next); 
          
               $('.remove-me').click(function(e){
                   e.preventDefault();
                   var fieldNum = this.id.charAt(this.id.length-1);
                   var fieldID = "#field" + fieldNum;
                   $(this).remove();
                   $(fieldID).remove();
               });
       });
  
   });
});
function show(shown, hidden) {
 document.getElementById(shown).style.display='block';
 document.getElementById(hidden).style.display='none';
 return false;
}


function register()
 {
   var uname = document.getElementById("username").value;
   var pwd = document.getElementById("password").value;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(uname =='')
   {
     alert("please enter user name.");
   }
   else if(pwd=='')
   {
         alert("enter the password");
   }
   else if(uname=='testuser' && pwd=='password')
   {
     alert("Login done successfully");
   }
   else if(pwd.length < 6 || pwd.length > 6)
   {
     alert("Password min and max length is 6.");
   }
   else
   {
 alert('Login failed due to incorrect username and password');

     }
 }
function login()
 {
   var uname = document.getElementById("username").value;
   var pwd = document.getElementById("password").value;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(uname =='')
   {
     alert("please enter user name.");
   }
   else if(pwd=='')
   {
         alert("enter the password");
   }
   else if(uname=='testuser' && pwd=='password')
   {
     alert("Login done successfully");
   }
   else if(pwd.length < 6 || pwd.length > 6)
   {
     alert("Password min and max length is 6.");
   }
   else
   {
 alert('Login failed due to incorrect username and password');

     }
 }

   $(document).ready(function () {
       //@naresh action dynamic childs
       var next = 0;
       $("#add-more").click(function(e){
           e.preventDefault();
           var addto = "#field" + next;
           var addRemove = "#field" + (next);
           next = next + 1;
           var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_id">Executor Name</label> <div class="col-md-5"> <input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md"> </div></div><br><br> <!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_name">Executor Category</label> <div class="col-md-5"> <input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"> </div></div><br><br><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_address">Executors Address</label> <div class="col-md-5"> <input id="action_address" name="action_address" type="text" placeholder="" class="form-control input-md"> </div></div><br><br>';
           var newInput = $(newIn);
           var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
           var removeButton = $(removeBtn);
           $(addto).after(newInput);
           $(addRemove).after(removeButton);
           $("#field" + next).attr('data-source',$(addto).attr('data-source'));
           $("#count").val(next); 
          
               $('.remove-me').click(function(e){
                   e.preventDefault();
                   var fieldNum = this.id.charAt(this.id.length-1);
                   var fieldID = "#field" + fieldNum;
                   $(this).remove();
                   $(fieldID).remove();
               });
       });
  
   });


