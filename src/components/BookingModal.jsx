import { useState } from "react";
import { useBookingStore } from "../store/bookingStore";
import './booking-modal.css'

import { Dialog , DialogTitle} from "@headlessui/react";

 export const BookingModal = () => {
    const { selectedDoctor, isModalOpen, closeModal, bookAppointment } = useBookingStore();
    const [selectedTime, setSelectedTime] = useState("");
  
    if (!selectedDoctor) return null;
  
    return (
      <Dialog open={isModalOpen} onClose={closeModal} className="modal-overlay">
        <div className="modal-content">
        <DialogTitle className="modal-title">Book with {selectedDoctor.name}</DialogTitle>
          <div className="space-y-2">
            {selectedDoctor.availability.map((time) => (
              <label key={time} className="block">
                <input
                  type="radio"
                  name="timeSlot"
                  value={time}
                  onChange={() => setSelectedTime(time)}
                /> {time}
              </label>
            ))}
          </div>
          <div className="modal-actions">
            <button className="cancel-button" onClick={closeModal}>Cancel</button>
            <button
              className="confirm-button"
              onClick={() => bookAppointment({ ...selectedDoctor, time: selectedTime })}
              disabled={!selectedTime}
            >
              Confirm
            </button>
          </div>
        </div>
      </Dialog>
    );
  };