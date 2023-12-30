import React, { useEffect, useState } from 'react';
import { NavStyled, StyledLink } from './NavigationStyled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { toast } from 'react-hot-toast';

export const Nav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isLoginSuccessNotified, setIsLoginSuccessNotified] = useState(false);

    useEffect(() => {
        if (isLoggedIn && !isLoginSuccessNotified) {
            toast.success('You are logged in!');
            setIsLoginSuccessNotified(true);
        } else if (!isLoggedIn && isLoginSuccessNotified) {
            toast.error('You are logged out!');
            setIsLoginSuccessNotified(false);
        }
    }, [isLoggedIn, isLoginSuccessNotified]);

    return (
        <NavStyled>
            {isLoggedIn ? (
                <>
                    <StyledLink to="/contacts">Contacts</StyledLink>
                    <UserMenu />
                </>
            ) : (
                <>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/register">Register</StyledLink>
                    <StyledLink to="/login">Login</StyledLink>
                </>
            )}
        </NavStyled>
    );
};