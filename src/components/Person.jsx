import React, { Fragment } from 'react';

const Person = ({info, hobbies, bio, render, children}) => {

    console.log(children)

    if(render) {
        return(
        <Fragment>
            <p>
                Soy {info.name} y tengo {info.age} años. Naci en {info.birthday.getFullYear()}.
                Mis hobbies son {hobbies.join(' ')}.
            </p>
            {bio}
        </Fragment>
        )
    } else {
        return <p>No hay persona</p>
    }
}

export default Person;

/*


*/