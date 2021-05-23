import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 1,
        image: 'https://picsum.photos/500/500',
        name: 'Piter',
        places: 10,
    }];

    return ( 
        <UsersList items={USERS}/>
     );
}
 
export default Users;