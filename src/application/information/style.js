import styled from "styled-components";

export const InformationContainer = styled.div`
.more-information {
float: right;
padding: 30px 20px;
width: 650px;
height: 243.3px;
margin-right: 60px;
}
.information {
background-color: #262936;
border-radius: 15px;
height: 100%;

}
.list-information {
display: inline-block;
width: 200.9px;
padding-left: 50px;
}
.item-information {
height: 91.64px;
line-height: 91.64px;
vertical-align: middle;
font-weight: 400;
color: rgba(255, 255, 255, 0.822);
}

.forecast-container {
width: 100%;
background: #323544;
display: table;
table-layout: fixed;
width: 100%;
overflow: hidden;
border-radius: 10px;
margin-top: -150px;
margin-bottom: 50px; }
.forecast-container .forecast {
display: table-cell;
vertical-align: top; }
.forecast-container .forecast:nth-child(even) {
background-color: #262936; }
@media screen and (max-width: 990px) {
.forecast-container .forecast {
display: block;
width: 16.6667%;
float: left; } }
.forecast-container .forecast.today {
width: 420px; }
.forecast-container .forecast.today .forecast-header {
*zoom: 1; }
.forecast-container .forecast.today .forecast-header:after {
content: " ";
clear: both;
display: block;
overflow: hidden;
height: 0; }
.forecast-container .forecast.today .forecast-header .day {
float: left; }
.forecast-container .forecast.today .forecast-header .more-day {
font-weight: 400;
background-color: #009ad8;
color: white;
border-radius: 20px;
border: none;
padding: 5px 20px;
}
.forecast-container .forecast.today .forecast-header .date {
float: right; }
.forecast-container .forecast.today .forecast-content {
width: 420px;
text-align: left;
padding-top: 30px;
padding-bottom: 30px; 
display: inline-block;}
.forecast-container .forecast.today .location {
font-size: 18px;
font-size: 1.2857142857em;
font-weight: 400; }
.forecast-container .forecast.today .degree .num, .forecast-container .forecast.today .degree .forecast-icon {
display: inline-block;
vertical-align: middle; }
.forecast-container .forecast.today .degree .num {
font-size: 90px;
font-size: 6.4285714286rem;
margin-right: 30px; }
.forecast-container .forecast.today span {
margin-right: 20px; }
.forecast-container .forecast.today span img {
margin-right: 5px;
vertical-align: middle; }
@media screen and (max-width: 990px) {
.forecast-container .forecast.today {
display: block;
width: 100%; } }
.forecast-container .forecast .forecast-header {
background: rgba(0, 0, 0, 0.1);
padding: 10px;
text-align: center;
font-weight: 400; }
.forecast-container .forecast .forecast-icon {
height: 50px; }
.forecast-container .forecast .forecast-content {
padding: 50px 20px 10px;
text-align: center; }
.forecast-container .forecast .forecast-content .forecast-icon {
margin-bottom: 20px; }
.forecast-container .forecast .forecast-content .degree {
font-size: 24px;
font-size: 1.7142857143em;
color: white;
font-weight: 700; }
.forecast-container .forecast .forecast-content small {
font-size: 16px;
font-size: 1.1428571429em; }
`
