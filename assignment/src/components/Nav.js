import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { TiContacts } from 'react-icons/ti'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { TbArrowGuide } from 'react-icons/tb'

function Nav() {
    const navNames = [
        {
            path: '/',
            name: 'Home',
            icon: <AiFillHome className='mr-3 text-xl' />
        },
        {
            path: '/contact',
            name: 'Contact',
            icon: <TiContacts className='mr-3 text-2xl' />
        },
        {
            path: '/information',
            name: 'Information',
            icon: <IoMdInformationCircleOutline className='mr-3 text-2xl' />
        }, {
            path: '/guide',
            name: 'Guide',
            icon: <TbArrowGuide className='mr-3 text-2xl' />
        }]

    return (
        <div className='w-1/5 bg-gray-100 border border-r h-screen'>
            <nav className='bg-white px-4 py-2'>
                <ul>
                    {
                        navNames.map((ele) => (
                            <li>
                                <NavLink to={ele.path}
                                    className={({ isActive }) => isActive ? 'bg-gray-200 mb-2 py-2 pl-1 flex items-center text-lg text-blue-900' : 'mb-2 py-2 pl-1 flex items-center text-lg'}
                                >
                                    {ele.icon}
                                    {ele.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div >
    )
}

export default Nav