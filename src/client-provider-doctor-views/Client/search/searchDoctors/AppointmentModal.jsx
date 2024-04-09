import './appointmentModal.css';
function AppointmentModal({isOpen, onClose, onConfirm, formData}){
    const handleConfirm = () =>{
        onClose();
    };
    return(         
        <div>
            <div className={`appointment-modal ${isOpen ? 'open':''}`}>
            <div className="appointment-modal-content">
                <label>
                    <p>Thank you, You will be contacted before an appointment is offered.</p>
                </label>
                <div className="appointment-modal-actions">
                    <button onClick={() => onConfirm(formData)}>Confirm</button>
                    <button onClick={onClose} >Modify Appointment Schedule</button>
                </div>
            </div>
            </div>
        </div>
    );

}
export default AppointmentModal;