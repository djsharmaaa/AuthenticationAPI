export default class UserModel{
    constructor(name, email, password, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    static SignUp(name,email,password){
        const newUser = new UserModel(
            name,
            email,
            password
        );
        newUser.id = users.length + 1;
        users.push(newUser);   
        return newUser;     
    }


    static SignIn(email,password){
        const user = users.find(
            (u) => 
                u.email == email && u.password == password
        );
        return user;
    }
}


var users = [
    {   
        id: 1,
        name: 'seller User',
        email: 'seller@ecom.com',
        password: 'password123',
       
        
    },
];