import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {Appstate} from '../App'

const Header = () => {
  const usercontext=useContext(Appstate);
  return (
    <div className=' sticky z-10 header top-0 text-red-500 flex justify-between font-bold text-2xl md:text-3xl p-3 border-b-2 border-gray-400'>
        <Link  to={"/"}><span>Filmy<span className=' text-white'>Verse</span></span></Link>
        {Appstate.login ?
       <Link to={"/addmovie"}> <h1 className=' text-lg flex items-center cursor-pointer'>
            <Button><AddIcon className=' mr-1' color='secondary'/>
            <span className=' text-white'>Add new</span></Button></h1>
            </Link>
            :
            <Link to={"/login"}> <h1 className=' text-lg rounded-md hover:bg-green-700 bg-green-600 flex items-center cursor-pointer'>
            <Button>
            <span className=' text-white font-medium'>Login</span></Button></h1>
            </Link>
}
    </div>
  )
}

export default Header;