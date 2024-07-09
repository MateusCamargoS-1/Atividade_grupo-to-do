import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({children }: HeaderProps) => {
    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    );
}

export default Header;