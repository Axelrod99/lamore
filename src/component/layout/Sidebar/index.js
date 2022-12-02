import React from 'react'
import dashboard from '../../../assets/icons/dashboard.png'
import event from '../../../assets/icons/event.png'
import transaction from '../../../assets/icons/transaction.png'
import chat from '../../../assets/icons/chat.png'
import settings from '../../../assets/icons/settings.png'


const Sidebar = () => {
  return (
    <div className=''>
      <ul className='flex flex-col gap-16 m-5'>
        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={dashboard}/>
            <a href='#'>Dashboard</a>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={event}/>
            <a href='#'>My Event</a>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={transaction}/>
            <a href='#'>Transaction</a>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={chat}/>
            <a href='#'>Chat</a>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={settings}/>
            <a href='#'>Settings</a>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
