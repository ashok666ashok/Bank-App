const homelogin = () => {
  window.location = "./login.html";
};
const homeregister = () => {
  window.location = "./register.html";
};

const register = () => {
  Acno = acno.value;
  Name = userName.value;
  Password = password.value;

  // 2.create an account dtails object
  accountDetails = {
    Acno,
    Name,
    Password,
    Balance: 0,
  };
  if (acno.value !== "" && userName.value !== "" && password.value !== "") {
    err.innerHTML = "";

    if (Acno in localStorage) {
      alert(`user already registered`);

    } else {
      localStorage.setItem(Acno, JSON.stringify(accountDetails));
      alert("registration successful");
      window.location = "./login.html";
      acno.value = "";
      userName.value = "";
      password.value = "";
    }
  } else {
    err.innerHTML = `<div class='text-danger'>please fill the form</div>`;
  }
};
// in register page login button
const Registerlogin = () => {
  window.location = "./login.html";
};
// home button in navbar of register page
const home = () => {
  window.location = "./home.html";
};

// need to do login first
// login page login button
const login = () => {
  Acno = loginAcno.value;
  pswd = loginPswd.value;
  if (loginAcno.value !== "" && loginPswd.value !== "") {
    loginerr.innerHTML = "";
    if (Acno in localStorage) {
      accountDetails = JSON.parse(localStorage.getItem(Acno));
      if (pswd == accountDetails.Password) {
        alert("login successful");
        window.location = "./dash.html";
        loginAcno.value = "";
        loginPswd.value = "";
        loginerr.innerHTML = "";
      } else {
        loginerr.innerHTML = `<div class='text-danger'>incorrect password</div>`;
      }
    } else {
      loginerr.innerHTML = `<div class='text-danger'>Enter Valid Account Number</div>`;
    }
  } else {
    loginerr.innerHTML = `<div class='text-danger'>Please Fill The Form</div>`;
  }
};

let amount = 0;
let withdrawal = 0;
let totalBalance = 0;
const deposit = () => {
  amnt = dAmount.value;
  acno = dAcno.value;
  amnt = Number(Math.floor(amnt));
  if(dAmount.value!==''&&dAcno.value!==''){
    dBal.innerHTML=''

  if (acno in localStorage) {
    accountDetails = JSON.parse(localStorage.getItem(acno));
    if (acno == accountDetails.Acno && amnt <= 0) {
      dBal.innerHTML=''
      derr.innerHTML=`<div class='text-danger'>You can't Deposit Empty or Negative Amount</div>`;
    } else {
      derr.innerHTML=''
      accountDetails.Balance += amnt;
      amount = amnt;
      alert("your amount successfully deposited");
      dAmount.value = "";
      dAcno.value = "";

      dBal.innerHTML = `<div class="text-success fw-bolder">your Deposited ${amount}$</div><div class="text-dark fw-bolder">your current balance is ${accountDetails.Balance}$</div>`;
      localStorage.setItem(acno, JSON.stringify(accountDetails));
    }
  }else {
    dBal.innerHTML=''
    derr.innerHTML=`<div class='text-danger'>incorrect account number</div>`
  }
 }
 else{
  dBal.innerHTML=''
  derr.innerHTML=`<div class='text-danger'>Please Fill The Form</div>`
 }
  
};
const withdraw=()=>{
  amnt=Wamnt.value;
  acno=Wacno.value;
  amnt=Number(Math.floor(amnt));
  if(Wacno.value!==''&&Wamnt.value!==''){
    Wbal.innerHTML=''
  if(acno in localStorage){
    accountDetails=JSON.parse(localStorage.getItem(acno));
    if(acno==accountDetails.Acno && amnt<=0){
      werr.innerHTML=`<div class="text-danger">you cant withdraw with empty or negative Amount</div>`
    }
    else if(amnt>accountDetails.Balance){
      werr.innerHTML=`<div class='text-danger'>Your Amount is not sufficient</div>`
      
    }
    else{
      werr.innerHTML=''
      accountDetails.Balance-=amnt;
      withdrawal=amnt
      localStorage.setItem(acno,JSON.stringify(accountDetails));
      alert("your amount successfully Withdrawed")
      Wamnt.value='';
      Wacno.value='';
      Wbal.innerHTML=`<div class="text-danger fw-bolder">your Withdrawed ${withdrawal}$</div><div class="text-dark fw-bolder">your current balance is ${accountDetails.Balance}$</div>`
    }
  }
  else{
    Wbal.innerHTML=''
    werr.innerHTML=`<div class='text-danger'>incorrect account number</div>`
  }
}else{
  Wbal.innerHTML=''
  werr.innerHTML=`<div class='text-danger'>Please Fill The Form</div>`
}

}


const logout=()=>{
  window.location='./login.html'
}

