import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Dolne Miasto",
        description: 'Najlepsze miejsce w wałczu!',
        imageUrl: "https://lh3.googleusercontent.com/proxy/njSxHhEShgkkAO5hcdm5Q4C8VUgnbg8SW9Tk3_Di9h3CPKXv-iUF_wNHsWH4Q8dHSdWzUgyfz54dZuFgGuFbDds-1PBjZ5ej4w",
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