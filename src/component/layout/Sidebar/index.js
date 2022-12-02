import React from 'react'
import dashboard from '../../../assets/icons/dashboard.png'
import event from '../../../assets/icons/event.png'
import transaction from '../../../assets/icons/transaction.png'
import chat from '../../../assets/icons/chat.png'
import settings from '../../../assets/icons/settings.png'
import { useNavigate } from 'react-router'


const Sidebar = () => {
  const navigate = useNavigate();

  const eventClick = () => {
    navigate(
      `/Event`
    )
  }

  const transactionClick = () => {
    navigate(
      `/Transaction`
    )
  }

  const chatClick = () => {
    navigate(
      `/Chat`
    )
  }

  const settingsClick = () => {
    navigate(
      `/Settings`
    )
  }


  return (
    <div className='text-sm'>
      <ul className='flex flex-col gap-10 m-5'>
        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={dashboard}/>
            <a href='#'>Dashboard</a>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={event}/>
            <button onClick={eventClick}>My Event</button>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={transaction}/>
            <button onClick={transactionClick}>Transaction</button>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={chat}/>
            <button onClick={chatClick}>Chat</button>
        </li>

        <li  className='flex items-center gap-2'>
            <img className='h-4 ' src={settings}/>
            <button onClick={settingsClick}>Settings</button>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
