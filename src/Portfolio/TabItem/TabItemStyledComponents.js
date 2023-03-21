import styled from "styled-components";

export const TabListItem = styled.li`
    list-style-type:none;
    cursor: pointer;
    margin:0 20px 0 20px;
`
export const ButtonListItem = styled.button`
    background-color:#d1ab43;
    border:none;
    border-radius:7px;
    padding:17px;
    color:#ffffff;
    cursor: pointer;
    font-weight:550;
    &:hover{
        color:#aeaeb5;
    }
    @media (max-width:768px){
        width:300px;
        margin:20px 0 20px 0;
    }
`