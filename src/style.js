import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif; 
}
ol, ul{
    list-style: none;
}
a{
    text-decoration: none;
	color: #fff;
}
html {
    font-size: 14px; }
  
body {
    color: #bfc1c8;
    font-family: "Roboto", "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    background: #1e202b; }
  
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 0 0 20px;
    line-height: normal; }
  
hr {
    border: none;
    border-bottom: 1px solid #777; }
p {
    margin-top: 0; }
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    *zoom: 1; }
.container:after {
    content: " ";
    clear: both;
    display: block;
    overflow: hidden;
    height: 0; }
@media (min-width: 768px) {
    .container {
    width: 750px; } }
@media (min-width: 992px) {
    .container {
    width: 970px; } }
@media (min-width: 1200px) {
    .container {
    width: 1170px; } }
button,
input,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
    vertical-align: baseline; }
button,
input {
    line-height: normal; }
button,
select {
    text-transform: none; }
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer; }
`
