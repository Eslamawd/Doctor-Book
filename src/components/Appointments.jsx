import { useBookingStore } from "../store/bookingStore";
import './appointments.css';

export const Appointments = () => {
    const appointments = useBookingStore((state) => state.bookedAppointments);
  
    return (
      <div className="appoint-list">
        <h2 className="appoint-head">My Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments booked.</p>
        ) : (
          <ul className="appoint-card-list">
            {appointments.map((appt, index) => (
              <li key={index} className="appoint-card">
                <p className="font-semibold">{appt.name} ({appt.specialty})</p>
                <p>Time: {appt.time}</p>
                <p>Location: {appt.location}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };