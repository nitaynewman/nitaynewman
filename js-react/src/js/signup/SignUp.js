import React from "react";
import * as Components from './Components.js';

const SignUp = () => {
    const [signIn, toggle] = React.useState(true);
    return(
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Imput type='text' placeholder='Name' />
                    <Components.Imput type='email' placeholder='your Email Account' />
                    <Components.Imput type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Imput type='text' placeholder='Name' />
                    <Components.Imput type='email' placeholder='your Email Account' />
                    <Components.Imput type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your Password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>
            <Components.OverLayContainer signinIn={signIn}>
                <Components.OverLay signIn={signIn}>
                    <Components.LeftOverLayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back</Components.Title>
                        <Components.paragraph>
                            To keep connected with us please login with your personal info
                        </Components.paragraph>
                        <Components.GostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GostButton>
                    </Components.LeftOverLayPanel>

                    <Components.RightOverLayPanel signinIn={signIn}>
                        <Components.Title>Hello, Frinds</Components.Title>
                        <Components.paragraph>
                            Enter your personal details and start your journy to become a KnowItAll
                        </Components.paragraph>
                            <Components.GostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GostButton>
                        
                    </Components.RightOverLayPanel>
                </Components.OverLay>
            </Components.OverLayContainer>
        </Components.Container>
    )
}