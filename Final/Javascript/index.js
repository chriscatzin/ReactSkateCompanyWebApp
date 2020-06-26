function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var radioYes = document.getElementById("receiveMailYes").checked;
    var radioNo = document.getElementById("receiveMailNo").checked;
    var service = document.getElementById("service").checked;
    var exchange = document.getElementById("exchange").checked;
    var returnProduct = document.getElementById("returnProduct").checked;
    var radio;
    var offeringService;
    

    if(service===true){
        offeringService = "Customer Service";
    }
    if(exchange===true){
        offeringService = "Return Product";
    }
    if(returnProduct===true){
        offeringService = "Exchange or Refund";
    }


    if(radioYes==true){
        radio = "Yes";
    }else if(radioNo==true){
        radio = "No";
    }else{
        radio = "Not Selected";
    }

    
    var information = "Name: "+ name  + " Email: " + email + " Subject: " +  subject + " Message: "+ message + " Radio: " + radio + " Service: " + offeringService;

    var node = document.createElement("p");
    var textnode = document.createTextNode(information);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    
    

  }


 
