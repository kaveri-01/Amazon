function register(event) {
    event.preventDefault();
  
    var userName = document.getElementById("name").value;
    var userNumber = document.getElementById("number").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var conformPassword = document.getElementById("conform-password").value;
  
    var userData = {
      name: userName,
      number: userNumber,
      email: userEmail,
      password: userPassword,
    };
  
    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
  
    var flang = false;
    for (var i = 0; i < dataFromLS.length; i++) {
      if (dataFromLS[i].email === userEmail) {
        flang = true;
      }
    }
  
    if (flang) {
      alert("Email Already existed, Please enter another email");
      document.getElementById("email").value="";
    }
  
    else if(userPassword.length <6){
      alert("password Must be greater than 8 characters");
      document.getElementById("password").value = "";
      document.getElementById("conform-password").value = "";
    }
  
    else if( userPassword !== conformPassword){
      alert("Password does not match please enter similiar conform password");
      document.getElementById("password").value = "";
      document.getElementById("conform-password").value = "";
    }
  
    else{
      dataFromLS.push(userData);
      localStorage.setItem("userData",JSON.stringify(dataFromLS));
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("conform-password").value = "";
      window.location.href ="/login.html";
      alert("registration done");
    }
  }

  function login(event){
    event.preventDefault();

    var userInput =document.getElementById("name").value;
    var userPassword =document.getElementById("password").value;
    var dataFromLS =JSON.parse(localStorage.getItem("userData"));

    var flag = false;
    for(var i=0; i<dataFromLS.length; i++){
      if((dataFromLS[i].email === userInput || dataFromLS[i].number == userInput) && dataFromLS[i].password === userPassword){
        flag =true;
      }
    }

    if(flag){
      document.getElementById("name").value ="";
      document.getElementById("password").value ="";

      var user ={};
      user["currentUserEmail"] =userInput;
      localStorage.setItem("currentUser" ,JSON.stringify(user));
       
      window.location.href ="/homepage.html";
      alert("Loged in Sucessfully");
    }
    else{
      alert("Please Check Enter data again");
      document.getElementById("name").value ="";
      document.getElementById("password").value ="";
    }
  }
  var gettingEmail ="";
  function verify(event){
    event.preventDefault();

    var dataFromLS =JSON.parse(localStorage.getItem("userData"));
    var emailFromUser =document.getElementById("email").value;
    gettingEmail =emailFromUser;

    var flag= false;

    for(i=0; i<dataFromLS.length; i++){
      if(dataFromLS[i].email === emailFromUser){
        flag =true;
      }
    }

    if(flag){
      var divFromHtml =document.getElementById("change");
      var newCode=`<div class="log-in-form"><label class="log-label">New Password </label><br><input type="password" id="password" placeholder="Enter New Password" class="form-input log-input height" required><br><button onclick="resetPassword()" class="log-input form-btn height">Reset Password</button></div>`;

      divFromHtml.innerHTML =newCode;

      alert("Please Continue");
    }
    else{
      document.getElementById("email").value ="";
      alert("Please Enter Register Email Id");
    }

  }

  function resetPassword(){
    var dataFromLS =JSON.parse(localStorage.getItem("userData"));
    var userPassword = document.getElementById("password").value;

    for(var i=0;i<dataFromLS.length; i++){
      if(dataFromLS[i].email === gettingEmail){
        dataFromLS[i].password =userPassword;
      }
      
    }
    localStorage.setItem("userData",JSON.stringify(dataFromLS));
    gettingEmail="";
    alert("Password Reset");
    window.location.href ="/login.html";

  }
  function addProduct(event){
    event.preventDefault();

    var dataFromLS = JSON.parse(localStorage.getItem("product")) || [];
    var productName =document.getElementById("name").value;
    var produtImage =document.getElementById("image").value;
    var productPrice =document.getElementById("price").value;

    var addProduct ={name:productName, image:produtImage, price:productPrice};

    dataFromLS.push(addProduct);

    localStorage.setItem("product",JSON.stringify(dataFromLS));
    document.getElementById("name").value="";
    document.getElementById("image").value ="";
    document.getElementById("price").value ="";
    alert("Product Added");
    window.location.href ="/displayproduct.html";
  }