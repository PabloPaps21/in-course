import styled from "styled-components";

//home

export const StyledHome = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction:column;
    justify-content: center;
    height:250px;
    margin-top: 150px;
    margin:0 auto;
    padding: 0 50px;
    border: 1px solid black;
    left:50px;
    & h1 {
        color: #638165;
        font-weight:500;
        font-size: 50px;
    }
    & .botones {
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
    & a {
    margin-top: 20px;
    width: 250px;
    height: 40px;
    border: 1px  #2fc3b6 solid;
    background-color: #2fc3b6;
    border-radius: 5px;
    text-align: center;
    font-size:16px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration: none;
    color:#FFF
  }
  a:visited {
    color: #FFF;
  }
   
`;
export const StyledSignupForm = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction:row;
    justify-content: center;
    width: 80%;
    height:500px;
    margin-top: 150px;
    padding: 0 50px;
    input {
    margin-top: 20px;
    margin-bottom:20px;
    border: 1px solid #f6f6f6;
    border-radius: 5px;
    width: 80%;
    height:40px;
    background-color: #f6f6f6;
  }
  label{
    margin-top:10px;
    margin-bottom:10px
  }
  button {
    margin-top: 20px;
    height:30px;
    width: 60%;
    border-radius: 5px;
    border: 1px solid #c0e3be;
    background-color: #c0e3be;
  }
  .radio {
    width: 50px;
  }
  & div:nth-child(1) {
    
    width: 60%;
  }
  & div:nth-child(2) {
    
    width: 40%;   
}
`;
export const StyleProfile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;
    width: 100%;
    height:800px;
    background-color:#FFF;
    padding: 0 50px;
    box-sizing: border-box;
    & h1 {
        color: #638165;
        font-weight:500;
    }
    & h2 {
      font-weight: 500;
    }
    & h4 {
      color:#a1a1a1;
      font-weight: 300;
    }
    a {
    color: red;
    text-decoration: none;
    display:flex;
    justify-content: center;
  }
  a:visited {
    color: red;
  }
  & p {
    width: 60%;
    margin-top: 50px;
    font-size: 13px;
    font-weight: 300;
    color:#a1a1a1;
  }
  & button {
    margin-top: 20px;
    width: 180px;
    border: 1px  #eaebe6 solid;
    background-color: #eaebe6;
    border-radius: 5px;
  }
   & div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction:column;
    width: 100%;
    height:600px;
  } 
`;

export const StyledLoginForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction:row;
  background-image: url('./oval-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 50px;
 
  input {
    margin-top: 10px;
    border: 1px solid #A3FFF6;
    border-radius: 5px;
    width: 100%;
    height:40px;
    background-color: #f6f6f6;
  }
  label{
    margin-top:10px;
  }
  button {
    margin-top: 20px;
    height:30px;
    width: 60%;
    border-radius: 5px;
    border: 1px solid #c0e3be;
    color: #FFF;
    background-image: linear-gradient(to right, #4bccbf, #51d2bb, #5ad7b5, #65dcaf, #73e1a7);
  }
  h1 {
    color: #00C9A7
  }
`;

export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background-color: #48689a;
  img {
    width: 90px;
    height:15px;
  }
  & a {
    padding: 5px;
    color: black;
    text-decoration: none;
  }
  & a.navbar-active {
    color: #0f4c81;
  }
`
export const AnchorName = styled.a`
  color:#FFF;
`;

export const FormAddProject = styled.form`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width: 60%;
  
  
  input{
    width:100%;
    height:40px;
  }
  & .description {
    height:90px;
  }
  button {
    margin-top: 20px;
    height:30px;
    width: 60%;
    border-radius: 5px;
    border: 1px solid #c0e3be;
    background-color: #c0e3be;
  }
`;

export const backBtn = styled.button`
  width:60px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #f5b87a;
  background-color:#f5b87a;
`;

export const FormAddInvest = styled.form`

  display:flex;
  justify-content:center;
  flex-direction:column;
  width: 60%;
  
`;

export const ProjectCards = styled.div`
  width: 40%;
  height: 500px;
  margin: 5% auto;
  box-sizing: border-box;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  
  img {
    width:150px;
  }
`;

export const AddInvestForm = styled.form`  
  width: 150px;
  
  input {
    width: 150px;
  }

`;
export const InvCards = styled.div`
  background-image: linear-gradient(to bottom, #2871e3, #3f7be4, #5286e6, #6290e6, #729ae7, #6ea2e3, #70a9de, #78afd8, #7db2ca, #89b3bd, #99b2b3, #a9b0af);
  width:25%;
  height:650px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  border-radius:10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  & img {
    max-width:150px;
    min-width:150px;
    border-radius: 15px;
  }
  h1 {
    color: #FFF;
    font-size: 18px;    
  }
`;

export const ComoFunciona = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color:#FFF;
    padding: 0 50px;
    box-sizing: border-box;
    height:350px;
    margin-top:150px;
  & div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction:column;
    width: 50%;
    height:600px;
  } 
  
`;