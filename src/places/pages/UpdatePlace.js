import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { 
    VALIDATOR_REQUIRE, 
    VALIDATOR_MINLENGTH 
} from '../../shared/util/validators';
import{ useForm } from '../../shared/hooks/form-hook';
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
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console
        .log(formState.inputs);
    };
    
    if(!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    } 
    
    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id="title" 
                element="input"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Title"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id="description" 
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid Description (min 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button 
                type="submit"
                disabled={!formState.isValid}
            >
                UPDATE PLACE
            </Button>
        </form>
    )
}
 
export default UpdatePlace;