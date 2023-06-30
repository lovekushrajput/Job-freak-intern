import React from 'react';
import Contact from './Contact';
import Guide from './Guide';
import Home from './Home';
import Information from './Information';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom'
import '../style/index.css'

const routes = [
    {
        path: '/',
        main: <Home />
    },
    {
        path: '/contact',
        main: < Contact />
    },
    {
        path: '/information',
        main: <Information />
    },
    {
        path: '/guide',
        main: <Guide />
    }
]



function App() {
    return (
        <>
            <div className='flex justify-between'>
                <Nav />
                <div className="w-4/5 h-screen">
                    <Routes>
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.main}
                                >

                                </Route>
                            ))
                        }
                    </Routes>
                </div>
            </div>


        </>
    )
}

export default App