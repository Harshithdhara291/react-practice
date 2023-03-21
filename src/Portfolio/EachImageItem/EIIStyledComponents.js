import styled from "styled-components";

export const ListItem = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    list-style-type:none;
    cursor:pointer;
    width:16rem;
    margin:25px;
    height:${props=>props.height};
    border:1px solid #b4b9fa;
    border-radius:5px;
    @media (max-width:768px){
        margin:10px;
    }
`

export const Image = styled.img`
    width:16rem;
    &:hover{
        opacity:40%;
    }
`
export const Anchor = styled.a`
    text-decoration:none;
`

export const HoverHead = styled.h1`
    font-size: 1.2rem;
    font-weight:500;
    color:#212124;
    &:hover{
        color:#797a8a;
    }
`