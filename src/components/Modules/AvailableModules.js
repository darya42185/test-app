import React, { useState, useEffect } from "react";
import ModuleItem from './ModuleItem/ModuleItem';
import Card from '../UI/Card';
import classes from './AvailableModules.module.css';

const AvailableModules = () => {
    const apiUrl = 'https://testtask.twnty.de/';

    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(apiUrl)
        .then((res) => res.json())
        .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    console.log(data);

    const moduleList = Object.keys(data).map(key => ({ 
        name: key,
        id: Math.floor(Math.random() * 1000000),
        ...data[key] 
      })).map(item => (
        <ModuleItem 
            id={item.id}
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            price={item.price} />
      ))

    console.log(moduleList);

    return <section className={classes.modules}>
        <Card>
            <ul>{moduleList}</ul>
        </Card>
    </section>
}

export default AvailableModules;