import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Dolne Miasto",
        description: 'Najlepsze miejsce w wałczu!',
        imageUrl: "https://lh3.googleusercontent.com/proxy/t_4E1gPJ-vaOHgZL9Ns7PJH4T1kC1nJ_HgP-FRQwUZU86g6feuT_7hpwQjimVb0Bu_-flVS7Fxe24kmTmSg6Lm9tgn0xERBO3Q",
        address: 'Dolne Miasto',
        location: {
            lat: 53.26420251530558,
            lon: 16.466715052971434
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: "Wałcz",
        description: 'Warto wracać!',
        imageUrl: "https://www.walcz.pl/images/slider6/1_3.jpeg",
        address: 'Wałcz z lotu ptaka',
        location: {
            lat: 53.27133540326477,
            lon: 16.466888716289418
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return ( 
        <PlaceList items={loadedPlaces} />
    );
}
 
export default UserPlaces;