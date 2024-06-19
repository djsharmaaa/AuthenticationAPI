// import express
import express from 'express';
import  UserController  from './user.controller.js';


// initialize express router

const userRouter = express.Router();

const userController = new UserController();


//all the paths to the controller methods

userRouter.post('/signup', userController.signUp);
userRouter.post('/signin', userController.signIn);



export default userRouter;