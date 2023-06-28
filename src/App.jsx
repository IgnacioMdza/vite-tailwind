import Card from "./components/Card"

export default function App() {
  return (
    <>
      <div className='bg-neutral-900 p-8 font-sans h-screen'>
        <header className='max-w-5xl mx-auto flex justify-between items-center mt-5 mb-5'>
          <div className='flex flex-col gap-3 w-2/4'>
            <div>
              <h1 className='inline-block font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 '>Vite</h1>
            </div>
            <h2 className=' text-neutral-300 font-bold text-5xl'>Next Generation Frontend Tooling</h2>
            <h3 className=' text-neutral-500 font-medium text-2xl'>Get ready for a development environment that can finally catch up with you.</h3>
            <div className='flex gap-3 mt-4'>
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
          <div className='w-2/4'>
            <img className='z-10 max-w-sm p-10 absolute' src="https://vitejs.dev/logo-with-shadow.png"></img>
            <img className='rotate-45 opacity-70 p-10 max-w-sm rounded-full bg-gradient-to-r from-blue-400 from-50% to-purple-600 to-50% blur-[45px]' src="https://vitejs.dev/logo-with-shadow.png"></img>
          </div>
        </header>
        <section className='grid grid-cols-3 gap-3.5 max-w-5xl mx-auto'>
          <Card icon='💡' title='Instant Server Start' content='On demand file serving over native ESM, no bundling required!'/>
          <Card icon='⚡️' title='Lightning Fast HMR' content='Hot Module Replacement (HMR) that stays fast regardless of app size.'/>
          <Card icon='🛠️' title='Rich Features' content='Out-of-the-box support for TypeScript, JSX, CSS and more.'/>
          <Card icon='📦' title='Optimized Build' content='Pre-configured Rollup build with multi-page and library mode support.'/>
          <Card icon='🔩' title='Universal Plugins' content='Rollup-superset plugin interface shared between dev and build.'/>
          <Card icon='🔑' title='Fully Typed APIs' content='Flexible programmatic APIs with full TypeScript typing.'/>
        </section>
      </div>
    </>
  )
}


