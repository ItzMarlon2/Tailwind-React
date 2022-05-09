import './App.css';
import homero from './assets/img/homero.webp'
import git from './assets/img/git.png'

function App() {
  return (
    <div className="sm:w-screen h-screen flex  justify-center items-center">
      <div className="w-10/12 h-full flex flex-col justify-between items-center">
        <div className='w-full h-2/6 flex justify-center items-center border-b-2'>
          <img src={homero} alt="" className="transition-all w-full h-5/6 object-contain hover:scale-110"/>
        </div>
        <div className='w-full h-2/6 flex flex-col items-center border-b-2 '>
          <button className='botones'>About Us</button>
          <button className='botones'>Projects</button>
          <button className='botones'>Contact</button>
        </div>
        <div className='w-full h-2/6 flex flex-col justify-center items-center border-b-2'>
          <a href="https://github.com/ItzMarlon2/Tailwind-React" className='w-full flex justify-center items-center '><img src={git} alt="" className='transition-all w-5/12 object-contain hover:scale-110'/></a>
        </div>
        <div className='w-full h-2/6 flex flex-col justify-center items-center'>
          <p>Marlon Campo</p>
        </div>
      </div>
    </div>
  );
}

export default App;
