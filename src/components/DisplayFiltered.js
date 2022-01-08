import React, { useState } from 'react';
import Firebase from '../firebase';


function DisplayFiltered() {

    const [ filter, setFilter ] = useState('');

    const db = Firebase.firestore();

    db.collection("students")
    .get()
    .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
            console.log(doc.data())
        })
    })

    return (
        <div>
            <h1>DisplayFiltered</h1>
            <input type="text" onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}

export default DisplayFiltered
