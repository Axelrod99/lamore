import React from 'react'
import Logo from '../../../assets/icons/Logo.png'
import search from '../../../assets/icons/search.png'
import bell from '../../../assets/icons/bell.png'
import Avatar from '../../../assets/icons/Avatar.png'



const Header = () => {
  return (
    <div className='h-16 flex items-center justify-between px-10'>
        <img className='h-8' src={Logo} alt="" />
        <p className='text-[16px] font-bold text-[#1D4C41]'>Wedding {'>'} <span className='text-[#1d4c417d]'>Dollarz$2022</span></p>

        <div className='flex items-center gap-2 p-1 bg-[#F6FBF6] rounded-xl w-60'> 
            <img className='h-3 ml-2' src={search} alt="" />
            <input className='text-sm font-bold rounded-sm bg-[#F6FBF6] p-1 w-60' placeholder='search'/>
        </div>

        <div className='flex items-center mr-6 space-x-2 gap-5'>
          <div className='flex'>
            <div><img src={bell} className='w-6 h-6'/></div>
            <div className='w-3.5 h-3.5 -ml-2 -mt-0.5 rounded-full bg-red-500 text-white text-center text-[10px]'>9</div>
          </div>

          <img src={Avatar} className='w-8 h-8'/>
          
        </div> 
        
    </div>
  )
}

export default Header
