import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactStars from 'react-stars';
import { TailSpin } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from './FirebaseConfig';
import { Link } from 'react-router-dom';

const Card = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getData() {
            setLoading(true);
            const _data = await getDocs(moviesRef);
            _data.forEach((doc) => {
                setData((prev) => [...prev, { ...(doc.data()), id: doc.id }])
            })

            setLoading(false);

        }
        getData();

    }, [])
    return (
        <div className=' flex flex-wrap mt-2 px-3 justify-between mr-1'>
            {loading ? <div className=' w-full flex justify-center items-center min-h-screen'><TailSpin height={80} color='white' /></div> :
                data.map((e, i) => {
                    return (
                        <Link to={`/detail/${e.id}`}> <div key={i} className='card shadow-lg p-2 hover:-translate-y-3 cursor-pointer font-medium mt-6 transition-all duration-500'>
                            <img className=' h-60 md:h-72 w-50' src={e.image} />
                            <h1><span className=' text-gray-500'>Name:</span>{e.Title}</h1>
                            <h1><span className=' text-gray-500'>Year:</span>{e.Year}</h1>
                            <h1 className=' flex items-center'><span className=' text-gray-500 mr-2'>Rating:</span>
                                <ReactStars
                                    value={e.rating / e.rated}
                                    edit={false}
                                    half={true}
                                    size={20} />

                            </h1>
                        </div></Link>

                    )
                })}

        </div>
    )
}

export default Card