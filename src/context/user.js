import React, { useState } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
	const currentUser = {
		name: 'Duane',
		interests: ['Coding', 'Biking', "Words ending in 'ing'"],
	};
	const [user, setUser] = useState(currentUser);
    const [theme, setTheme] = useState('dark')
	return <UserContext.Provider  value={{user, setUser, theme, setTheme}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
