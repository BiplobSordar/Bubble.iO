
import React, { createContext, useContext, useState, useEffect } from "react";


const DataContext = createContext();


export const DataProvider = ({ children }) => {


    const [data, setData] = useState(() => {

    const storedData = localStorage.getItem("appData");

    return storedData ? JSON.parse(storedData) : {};
  });

    useEffect(() => {

        const storedData = localStorage.getItem("appData")

        if (storedData) setData(JSON.parse(storedData))


    }, []);

    useEffect(() => {

        localStorage.setItem("appData", JSON.stringify(data))

    }, [data]);


    const setItem = (id, obj) => {

        setData((prev) => (
            { ...prev, [id]: obj }
        ))
    };


    const getItem = (id) => {
        return data[id] || null
    };


    const deleteItem = (id) => {
        setData((prev) => {

            const newData = { ...prev }

            delete newData[id]

            return newData
        });
    };


    const clearAll = () => setData({})

    return (
        <DataContext.Provider value={{ data, setItem, getItem, deleteItem, clearAll }}>

            {children}

        </DataContext.Provider>
    );
};


export const useData = () => useContext(DataContext);
