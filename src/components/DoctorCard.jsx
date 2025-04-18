import { useBookingStore } from "../store/bookingStore";
import './doctor-card.css';



 export const DoctorCard = ({ doctor }) => {
    const openModal = useBookingStore((state) => state.openModal);
    return (
      <div className="doctor-card">
        <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
        <h2 className="doctor-name">{doctor.name}</h2>
        <p>{doctor.specialty}</p>
        <p>Rating: {doctor.rating}</p>
        <p>Location: {doctor.location}</p>
        <button
          className="book-button"
          onClick={() => openModal(doctor)}
        >
          Book Appointment
        </button>
      </div>
    );
  };
  