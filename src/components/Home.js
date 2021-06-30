import React from 'react'
 
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Home() {
    return (
        <Container>
            <Header>
            <Link to='/'>
                
                <HeaderIcon>
                    <img
                         
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                        alt=""
                    />
                </HeaderIcon>
                
            </Link>
           
            <HeaderCenter>
                <button>Location <span>where are you going?</span></button>
                
                <button>Check in  <span>Add guests</span></button>
                <button>Check out  <span>Add guests</span></button>
                <button>Guests   <span>Add dates</span></button>
                 
                <SearchIcon style={{padding: 3}}/>
                 
            </HeaderCenter>

            <HeaderRight>
                <p>Become a host</p>
                <LanguageIcon />

                <div  style={{display: 'flex', padding:2, borderRadius: 101, backgroundColor: 'grey', alignItems: 'center'}}>
                    <MenuIcon style={{padding: 2}} />
                    <Avatar style={{padding: 2}}  />
                </div>
                    

            </HeaderRight>


        </Header>

        <>
            <SignUp>Explore nearby stays</SignUp>
        </>
        
        </Container>
        
        
    )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
 
  position: relative;
  overflow-x: hidden;
  &:before{
      background : url('https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg') center center / cover no-repeat fixed;
      content : "";
      position: absolute;
      top: 0;
      left:0;
      right:0;
      bottom:0;
      z-index: -1;
  }
`

const Header = styled.div`
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
   
    z-index: 100;
    width: 100%;
   
    
 
`

const HeaderIcon = styled.div`
    img{
        height: 100px;
        object-fit : contain;
        margin-left:20px;
    }

`

const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    padding: 10px;
    height: 36px;
    border: 1px solid lightgray;
    border-radius : 999px;
    background-color: white;

     button{
         display: flex;
         flex-direction: column;
         top: 2px;
         height: 44px;
         width: 120px;
         cursor:pointer;
         border: none;
         background-color: white;
         position: relative;
     
     
            span{
                position: absolute;
                font-size: 10px;
                top: 20px;
                left: 2px;
        
                &:after{
                     
                    content: "";
                    
                    
                     
                }
            }

        
     
    

`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18vw;
    margin-right: 80px;

`

const SignUp = styled.div`
    position : absolute;
    margin-top: 250px;
    margin-left: 100px;
    width: 200px;
    
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align : center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing : 1.5px;
    top : 100px;
    margin-bottom: 12px;
    &: hover{
        background-color : #0483ee;
    }
`