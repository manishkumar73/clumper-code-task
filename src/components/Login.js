import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
            <Container>
                 <CTA>
                     

                    <SignUp>SEARCH ALL HERE</SignUp>

                    <Description>
                    Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb.
                    </Description>

                     
                </CTA>
            </Container>
    )
}

export default Login

const Container = styled.div`
    position : relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
  
    &: before{
        background-position : top;
        background-size : cover;
        background-repeat : no-repeat;
        background-image : url('https://news.airbnb.com/wp-content/uploads/sites/4/2020/04/Airbnb_Bali_Bamboo_House.jpg?w=1000') ;
       
    
        position: absolute;
        content: " ";
        top: 0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        opacity: 0.7;
        
    }
`

const CTA = styled.div`
    max-width : 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

 

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align : center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing : 1.5px;
    margin-top : 8px;
    margin-bottom: 12px;
    &: hover{
        background-color : #0483ee;
    }
`

const Description = styled.p`
    font-size: 16px;
    letter-spacing : 1.5px;
    text-align : center;
    line-height: 1.5;
`
 