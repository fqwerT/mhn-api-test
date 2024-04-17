import styled from "styled-components";


export const StyledDashboardWrap = styled.div`
width:96%;
max-width:96%;
border-radius:7px;
padding:10px;
display:flex;
flex-direction:column;
overflow-x:auto;
//justify-content: center;

`

export const StyledAvailbibleChanges = styled.div`
border:1px solid lightgray;
height:300px;
width:99%;
display:flex;
border-radius: 7px;
margin: 5px;
flex-direction: column;
p {
    padding-top: 10px;
 padding-left: 5px;
}
h1 {
 padding-left: 5px;
 font-size: 17px;
 border-bottom:1px solid lightgray;
 padding-bottom:5px;
}
`


export const StyledLatestChanges = styled(StyledAvailbibleChanges)`
height:400px;

`