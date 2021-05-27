import styled from "styled-components";
import banner from "./banner@2x.png";

export const SearchContainer = styled.div`
.hero {
background-size: cover;
padding: 70px 0;
min-height: 350px; 
background-image: url(${banner});}

.find-location {
position: relative;
margin-bottom: 70px; }
.find-location input[type="text"] {
width: 100%;
padding: 20px 50px 20px 20px;
background: #1e202b;
color: white; 
border: none;
border-radius: 30px;}
.find-location .form-button {
position: absolute;
top: 5px;
right: 5px;
bottom: 5px;
}

form input[type="submit"]{
border: none;
background: #009ad8;
padding: 10px 30px;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
color: white; 
height: 100%;
}
form input[type="button"] {
border: none;
background: #009ad8;
padding: 10px 30px;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
color: white; 
height: 100%;
margin-right: 4px;
}
input[type="text"]:focus {
outline: none;
}
`