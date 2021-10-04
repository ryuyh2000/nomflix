import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:white;
    position:flex;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display:flex;
    aligin-items:center;
    padding:0px 10px;
    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
  display: flex;
  }
`;

const Item = styled.li`
  margin-left:10px;
  width:80px;
  height:50px;
  text-align:center;
  border-bottom:5px solid ${props => (props.current ? "white":"transparent")};
  transition:border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height:50px;
  display: flex;
  align-items:center;
  justify-content:center;
`;



export default withRouter(({location:{pathname}},props) =>(
    <Header>
      {console.log(props)}
        <List>
        <Item current={pathname==="/"}>
            <SLink to="/">Movies</SLink>
        </Item>

        <Item current={pathname==="/tv"}>
            <SLink to="/tv">TV</SLink>
        </Item>
        
        <Item current={pathname==="/search"}>
            <SLink to="/search">Search</SLink>
        </Item>
        </List>
    </Header>
));