import React, { useEffect} from 'react';

import {auth, provider} from '../firebase'
import styled from 'styled-components';

import { selectUserName, setUserLogin, selectUserPhoto, setSignOut} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

function Header() {

    const userName = useSelector(selectUserName) ;
    const userPhoto = useSelector(selectUserPhoto);

    const dispatch = useDispatch()

    const history = useHistory()


    useEffect(() => {
        
        auth.onAuthStateChanged( async(user) => {
            if(user){
                dispatch(setUserLogin({
                    name : user.displayName,
                    email: user.email,
                    photo : user.photoURL,
                }))
                history.push('/home')
            }
        })

    }, [])

    const signIn = () => {

        auth.signInWithPopup(provider)
        .then((result) => {

            let user = result.user

            console.log(result);

            dispatch(setUserLogin({
                name : user.displayName,
                email: user.email,
                photo : user.photoURL,
            }))

            history.push('/home')

        })

    }


    const signOut = () => {
        auth.signOut()
        .then( ()=> {

            dispatch( setSignOut() )
            history.push("/")

        })
    }

    return (
      <Nav>
        <Logo  src='https://assets.entrepreneur.com/content/3x2/2000/1405612741-airbnb-why-new-logo.jpg' />         
          { !userName ? (
                  <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                  </LoginContainer> ) :

              < >
   
              </ >
          }

      </Nav>
    )
}

export default Header

 


const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items:center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;  
`

const NavMenu = styled.div`
    
    display: flex;
    flex : 1;
    margin-left: 20px;
    align-items: center;
    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: " ";
                height: 2px;
                background: white;
                position : absolute;
            
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition:  all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-origin: left center;
                transform: scaleX(0);
            }
        }
        &: hover{
            span: after{
                transform : scaleX(1);
                opacity: 1;
            }
        }
    }
`

 

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

const Login = styled.div`
    border : 1px solid #f9f9f9;
    padding : 8px 16px;
    border-radius : 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    color: white;
    &:hover{
        background-color: #f9f9f9;
        color : #000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    display: flex;
    flex:1;
    justify-content: flex-end;
`