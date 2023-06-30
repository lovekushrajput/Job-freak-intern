import { NavLink } from 'react-router-dom'

function Home() {
    const navs = ['contact', 'information', 'guide']
    return (
        <div className='bg-[#D1EFEF] h-screen w-full'>
            <div className='ml-8'>
                <p className='text-2xl mt-3 mb-4'>🚀 Welcome to Homepage!</p>
                <ul className='flex mt-10'>
                    {
                        navs.map((nav) => (
                            <li>
                                <NavLink to={'/' + nav} className='bg-white mr-6 py-4 pr-20 pl-4 font-bold text-xl border-b underline uppercase rounded drop-shadow'>{nav}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home