import firebase from '../firebase';
import React from 'react';

function StateWise() {
    return (
        <div>
            <h1>
                StateWise
            </h1>
        </div>
    )
}


const db = firebase.firestore();

const getDetails = () => {
    return (
        db.collection("students")
        .get()
        .then((querySnapShot) => {
            querySnapShot.forEach((doc)=>{
                //console.log(doc.data().state)
                console.log("StateWise => ", doc.id);
            })
        }))
}



export { getDetails}
export default StateWise
