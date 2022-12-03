import React from 'react'
import dashboard from '../../../assets/icons/dashboard.png'
import event from '../../../assets/icons/event.png'
import transaction from '../../../assets/icons/transaction.png'
import chat from '../../../assets/icons/chat.png'
import settings from '../../../assets/icons/settings.png'
import logout from '../../../assets/icons/logout.png'
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
    <div className='text-sm font-bold text-[#1d4c417d] h-[100%] flex flex-col justify-between py-7'>
      <div>
        <ul className='flex flex-col gap-7 m-5'>
          <li className='flex items-center gap-2 text-black bg-blue-50 h-12 rounded-lg justify-center'>
            <img className='h-4 ' src={dashboard} />
            <a href='#'>Dashboard</a>
          </li>

          <li className='flex items-center gap-2 h-12  justify-center'>
            <img className='h-4 ' src={event} />
            <button onClick={eventClick}>My Event</button>
          </li>

          <li className='flex items-center gap-2 h-12  justify-center'>
            <img className='h-4 ' src={transaction} />
            <button onClick={transactionClick}>Transaction</button>
          </li>

          <li className='flex items-center gap-2 h-12  justify-center'>
            <img className='h-4 ' src={chat} />
            <button onClick={chatClick}>Chat</button>
          </li>

          <li className='flex items-center gap-2 h-12  justify-center'>
            <img className='h-4 ' src={settings} />
            <button onClick={settingsClick}>Settings</button>
          </li>

        </ul>
      </div>

      <div>
        <ul className='flex flex-col gap-10 m-5'>
          <li className='flex items-center gap-2 text-[#F30505] h-12 justify-center'>
            <img className='h-4 ' src={logout} />
            <button className=''>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
