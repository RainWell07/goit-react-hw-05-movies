import styled from "@emotion/styled";

const StyledDetails = styled.div`
display: flex;
gap: 20px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
padding: 25px;
border-radius: 10px;
margin-bottom: 20px;
color:white;
h2,h3,h4,{
margin:0;
}
p{
font-size:20px;
}
`;


const StyledInformation = styled.div`
display:flex;
gap:20px;
justify-content: start;
`;

export {StyledInformation, StyledDetails};