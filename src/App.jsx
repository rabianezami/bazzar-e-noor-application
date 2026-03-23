
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts} from "./features/products/productsSlice"
import Navbar from "./components/Navbar"
import CategoryFilter from './components/CategoryFilter'
import Toolbar from './components/Toolbar'

function App() {
 const dispatch = useDispatch()
 const status = useSelector((s) => s.products.status)

 useEffect(() => {
  if (status === "idle") dispatch(fetchProducts())
 }, [dispatch, status])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <CategoryFilter />
      <Toolbar />
    </div>
  )
}

export default App
