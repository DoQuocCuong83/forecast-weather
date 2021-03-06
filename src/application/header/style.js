import styled from "styled-components";

export const ClockContainer = styled.div`
.branding{
float: left;
font-size: 23px;
font-weight: 600;
padding: 3px 10px;
}
`

export const HeaderContainer = styled.div`
.site-header {
    padding: 50px 0; }
.main-navigation {
    float: right; }
.main-navigation .menu-toggle, .main-navigation .menu {
    vertical-align: middle; }
.main-navigation .menu-toggle {
    background: none;
    border: 2px solid transparent;
    color: white;
    padding: 20px;
    border-radius: 40px;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    display: none;
    outline: none; }
@media screen and (max-width: 990px) {
    .main-navigation .menu-toggle {
    display: inline-block; } }
.main-navigation .menu-toggle:hover, .main-navigation .menu-toggle:active {
    border-color: #009ad8;
    color: #009ad8; }
.main-navigation .menu {
    list-style: none;
    display: inline-block;
    *zoom: 1; }
.main-navigation .menu:after {
    content: " ";
    clear: both;
    display: block;
    overflow: hidden;
    height: 0; }
.main-navigation .menu .menu-item {
    float: left;
    margin-left: 10px; }
.main-navigation .menu .menu-item a {
    padding: 5px 25px;
    border: 2px solid transparent;
    border-radius: 30px;
    color: white;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    cursor: pointer;
    font-weight: 400; }
.main-navigation .menu .menu-item.current-menu-item a, .main-navigation .menu .menu-item:hover a {
    border-color: #009ad8;
    color: #009ad8; }
`