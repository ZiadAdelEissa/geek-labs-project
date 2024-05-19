import './App.css';
import Alerts from './Components/Alerts';
import Filters from './Components/Filters';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <main className='flex h-screen relative'>
      <Sidebar className='navbar absolute h-full overflow-y-hidden w-1/8 z-20' />
      <div className="flex-1 bg-[#202020] overflow-y-auto ">
        <Alerts className='ml-24 alert h-full' />
      </div>
      <div className='w-1/4 h-screen bg-[#202020] py-4'>
        <Filters />
      </div>

    </main>
  );
}

export default App;
