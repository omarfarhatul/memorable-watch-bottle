import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles]=useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data));
    }, [])

    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;