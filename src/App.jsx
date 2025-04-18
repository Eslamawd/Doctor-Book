
import './App.css'
import { Appointments } from './components/Appointments'
import { BookingModal } from './components/BookingModal'
import { DoctorCard } from './components/DoctorCard'
import NavBar from './components/NavBar'
import { doctors } from './data/mockData'

function App() {

  return (
    <>
   
      <div className=" main-content">
      <h1 className="text-2xl font-bold mb-4">Doctor Booking</h1>
      <div className="doctor-list">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
      <BookingModal />

      <Appointments />
    </div>
  
    </>
  )
}

export default App
