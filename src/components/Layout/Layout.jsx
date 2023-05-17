
import { Outlet } from "react-router-dom";
import { Header, List, Item ,StyledNavLink} from "./Layout.styled";

const Layout = () => {
    return (
       
        <>
             <Header>
            <List>
                <Item>
        <StyledNavLink to='/'>Home</StyledNavLink></Item>
                <Item>
                    <StyledNavLink to='/movies'>Movies</StyledNavLink>
                </Item>
        
               </List>
                </Header>
            <main>
                <Outlet />
                </main>
            </>
    )
    
};
export default Layout;