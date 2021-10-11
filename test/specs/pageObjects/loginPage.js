const { default: $ } = require("webdriverio/build/commands/browser/$");

class LoginPage{

//userName=$("input[name='userName']")

get userName(){

    return $("input[name='userName']")

}


get password(){


return $("input[name='password']")

}

get signIn(){



return $("submit")


}


get textInfo(){



    return $("p")
}

Login(userName,password){

this.userName.setValue(userName)
this.password.setValue(password)
this.signIn.click();

}


}

module.exports= new LoginPage()

