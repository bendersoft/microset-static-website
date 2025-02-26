import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
    <header className="border-b-2 border-b-cyan-200 h-16 flex items-center justify-between px-4 sm:px-16 bg-gray-800">
      <div className='flex flex-col justify-between items-start'>
        <h1 className="main-title text-center">Microset</h1>
        <h2 className='text-cyan-50'>Surveillances et pilotages industriels</h2>
      </div>

    </header>
    <main className="flex flex-1 flex-col gap-4 sm:gap-8 py-4 sm:py-8 px-4 sm:px-16">
      <div className="flex flex-col gap-4 sm:gap-8"> 
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-7">

        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">

        </div>
      </div>

    </main>
    <footer className="bg-cyan-500 text-gray-900 h-12 flex items-center justify-end p-4">
      Ceci est le footer
    </footer>
  </div>
  
  )
}

export default App
