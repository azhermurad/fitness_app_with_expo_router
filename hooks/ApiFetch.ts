import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Iprops = {
    url: string;
    method?: string;
};
type IExcrise = {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
};

const BASEURL: string = 'https://exercisedb.p.rapidapi.com/';

const useFetchApi = ({ url, method = 'GET' }: Iprops) => {
    const [data, setData] = useState<IExcrise[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const options = {
        method: method,
        url: BASEURL + url,
        params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': '1f1e359d79msh2da30647274a4c6p13c7cejsnf6c7e41b4b5b',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    console.log(options)

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true)
                const response = await axios.request(options);
               setData(response.data)
               setIsLoading(false)
            } catch (error) {
                console.log(error)
               setError("Something went wrong! Try again")
               setIsLoading(false)
               
            }
        })();
    }, [url,method]);

    return [data, isLoading, error];
};

export default useFetchApi;
