import React, { useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent} from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { LearnC, Calendar, Users, UploadLessonData, UploadVideo, Tests, Lessons } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';


const App = () => {

    const { setCurrentColor, setCurrentMode, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

  return (
    <div className={ currentMode === 'Dark' ? 'dark' : ''}>
        <Router>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4 style{{ z-index: "1000" }}'>
                    <TooltipComponent content="Settings" position='Top'> 
                        <button className='text 3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' onClick={ () => setThemeSettings(true) } style={{ background: currentColor, borderRadius: "50%"}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>

                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> 
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}

                <div className={
                      activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen w-full' :  'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2' //w is width, bg background md medium screen
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-bg navbar w-full'>
                        <Navbar />
                    </div>
                    <div>
                        {themeSettings && (<ThemeSettings />)}

                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={ <LearnC/>} />
                            <Route path="/learnc" element={<LearnC />} />

                            {/* Pages */}
                            <Route path="/uploadlessonData" element={<UploadLessonData />} />
                            <Route path="/uploadVideo" element={<UploadVideo />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/tests" element={<Tests />} />
                            <Route path="/lessons" element={<Lessons />} />
                            
                            {/* Apps */}
                            <Route path="/calendar" element={<Calendar />} />
                        
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Router>
    </div>
  )
}

export default App