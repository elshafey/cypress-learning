import LoginPage from './PageObjects/LoginPage'

function login(username,password){
    const loginPage= new LoginPage();

        loginPage.navigate()
                 .enterUsername(username)
                 .enterPassword(password)
                 .submit();
}

export default login 