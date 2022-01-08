import { useEffect, useState } from 'react'
import {getDetails} from './StateWise';
import './StudDetail.css';
import firebase from '../firebase';
import StateWise from './StateWise';
import React from 'react';


function StudDetail() {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [branch, setBranch] = useState('');
    const [college, setCollege] = useState('');
    const [stateName, setStateName] = useState('');
    const [city, setCity] = useState('');
    const [clickedSubmit, setClickedSubmit] = useState(0);

    const db = firebase.firestore()

    const submitDetails = () => {

        if(!fname.valueOf()){
            alert("Enter First Name !");
        }
        else if(!lname.valueOf()){
            alert("Enter Last Name !");
        }
        else if(!branch.valueOf()){
            alert("Enter Branch Name !");
        }
        else if(!college.valueOf()){
            alert("Enter College Name !");
        }
        else if(!stateName.valueOf()){
            alert("Enter Name of the State !");
        }
        else if(!city.valueOf()){
            alert("Enter City Name !");
        }
        else{
            db.collection("students").add({
                firstname: fname,
                lastname: lname,
                branch: branch,
                college: college,
                state: stateName,
                city: city
            })
            .then((docRef)=>{
                console.log("Document written with ID: ",docRef.id);
            })
            .catch((error)=>{
                console.log("Error adding documnet: ",error)
            })
            
            getDetails();
        }
    }

    const clearDetails = () => {
        setfname('')
        setlname('')
        setBranch('')
        setCollege('')
        setStateName('')
        setCity('')
    }

    useEffect(() => {
        setClickedSubmit(1);
        getDetails();
    },[])
    

    return (
        <div>
        <div className="Container">
            <h1>StudDetail</h1>
            <div className="rowfeild">
                <p>First Name: </p>
                <input type="text" name="fname" onChange={e => setfname(e.target.value)} value={fname} />
            </div>
            <div className="rowfeild">
                <p>Last Name: </p>
                <input type="text" name="lname" onChange={e=> setlname(e.target.value)} value={lname} />
            </div>
            <div className="rowfeild">
                <p>Branch: </p>
                <input type="text" name="branch" onChange={e=> setBranch(e.target.value)} value={branch} />
            </div>
            <div className="rowfeild">
                <p>College Name: </p>
                <input type="text" name="clgname" onChange={e=>setCollege(e.target.value)} value={college} />
            </div>
            <div className="rowfeild">
                <p>State: </p>
                <input type="text" name="statename" onChange={e=>setStateName(e.target.value)} value={stateName} />
            </div>
            <div className="rowfeild">
                <p>City: </p>
                <input type="text" name="city" onChange={e=>setCity(e.target.value)} value={city} />
            </div>
            <div className="rowfeild">
                <button onClick={submitDetails} >Submit</button>
                <button onClick={clearDetails} >Clear</button>
            </div>
            <div>
                {clickedSubmit?<StateWise fname={fname} lname={lname} branch={branch} college={college} stateName={stateName} city={city} />: <div></div>}
            </div>
        </div>
        </div>
    )
}

export default StudDetail
