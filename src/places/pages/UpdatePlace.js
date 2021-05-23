import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

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
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);
    
    if(!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    } 
    
    return (
        <form>
            <input 
                id="title" 
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Title"
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <input 
                id="description" 
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid Description (min 5 characters)."
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button 
                type="submit"
                disabled={true}
            >
                UPDATE PLACE
            </Button>
        </form>
    )
}
 
export default UpdatePlace;