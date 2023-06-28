import Card from "./components/Card"
import {viteFeatures} from "./data/viteFeatures"

export default function App() {
  return (
    <>
      <div className='bg-neutral-900 p-8 font-sans min-h-screen'>
        <header className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-8 mb-12'>
          <div className='flex flex-col gap-3 md:w-2/4 md:items-start items-center'>
            <div>
              <h1 className='inline-block font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 '>Vite</h1>
            </div>
            <h2 className='text-center md:text-left text-neutral-300 font-bold text-5xl'>Next Generation Frontend Tooling</h2>
            <h3 className='text-center md:text-left text-neutral-500 font-medium text-2xl'>Get ready for a development environment that can finally catch up with you.</h3>
            <div className='flex justify-around sm:justify-center md:justify-start sm:gap-3 mt-4 w-full'>
              <button className='text-sm font-medium text-white bg-neutral-600 pt-2 pb-2 pl-3 pr-3 rounded-3xl hover:bg-indigo-500'>
                Get Started
              </button>
              <button className='text-sm font-medium text-white bg-neutral-600 pt-2 pb-2 pl-3 pr-3 rounded-3xl hover:bg-indigo-500'> 
                Why Vite?
              </button>
              <button className='text-sm font-medium text-white bg-neutral-600 pt-2 pb-2 pl-3 pr-3 rounded-3xl hover:bg-indigo-500'>
                View on Github
              </button>
            </div>
          </div>
          <div className='w-2/4 relative'>
            <img className='inset-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[300px] z-10 absolute' src="https://vitejs.dev/logo-with-shadow.png"></img>
            <div className='mx-auto rotate-45 opacity-70 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 from-50% to-purple-600 to-50% blur-[45px]'></div>
          </div>
        </header>
        <section className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3.5 max-w-5xl mx-auto'>
          {viteFeatures.map((feature, index) =>
            <Card
              key={`feature-card-${index}`}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          )}
        </section>
      </div>
    </>
  )
}


