import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './components/CoffeCard'

function App() {
  const coffees = useLoaderData()

  return (
    <div className='m-20'>
      <p className='text-6xl my-20 text-center text-purple-600'>Total Coffees: {coffees.length}</p>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>)
        }
      </div>


    </div>
  )
}

export default App
