// @mui is react collection of react components like Bootstrap in CSS
// Box Work as a Div
// TextField Standard
// Styled is to Style the component
// Typography p tag replecment
import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

//Outer Container
const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    margin-top:15px;
`

// To Style Image
const Image = styled('img')({
    width: 200,
    margin: 'auto',
    display: 'flex',
    padding: '25px 0 25px 0'
})

//To Wrap Textfield
const Wrapper = styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & > button, & > p{
        margin-top:20px;
    }
`

//Login Button Styles
const LoginButton = styled(Button)`
    text-tranform: none;
    background: #7843E6;
    height: 48px;
    border-radius: 2px;
`
//Sign-Up Button Styles
const SignUpButton = styled(Button)`
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%)
`

//Paragraph Styles
const OrText = styled(Typography)`
    color: #878787;
    font-size:16px;
`

// signup Intial Values Object
const signUpInitialValues = {
    name: '',
    username: '',
    password: ''
}


//Main Component
const Login = () => {

    const [account, setAccount] = useState('login');
    const [signup, setSignup] = useState(signUpInitialValues);

    //Signup Toogle 
    const toogleSignUp = () => {
        account === 'signup' ? setAccount('login') : setAccount('signup');
    }

    // When Text is Added in Registration Form
    // e Stands for Event
    // e.target.value from this we will get the value inserted
    // e.target.name from this we will get the name of the Input Field
    const onInputChange = (e) => {
        console.log(e.target.name + " : " + e.target.value);
    }

    return (
        <Component>
            <Box>
                <Image src="/images/BhuviBlogsT.png" alt='App Icon' />
                {
                    account === 'login' ? (
                        <Wrapper>
                            <TextField variant="standard" label="Enter Username" />
                            <TextField variant="standard" label="Enter Password" />
                            <LoginButton variant="contained" >Login</LoginButton>
                            <OrText style={{ textAlign: 'center' }}>OR</OrText>
                            <SignUpButton onClick={() => toogleSignUp()}>Create an Account</SignUpButton>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField type="text" variant="standard" name="name" label="Enter Name" onChange={(e) => onInputChange(e)} />
                            <TextField type="text" variant="standard" name="username" label="Enter Username" onChange={(e) => onInputChange(e)} />
                            <TextField type="password" variant="standard" name="password" label="Enter Password" onChange={(e) => onInputChange(e)} />
                            <LoginButton variant="contained">Sign Up</LoginButton>
                            <OrText style={{ textAlign: 'center' }}>OR</OrText>
                            <SignUpButton onClick={() => toogleSignUp()}>Already have an Account?</SignUpButton>
                        </Wrapper>
                    )
                }
            </Box>
        </Component >
    )
}
export default Login;