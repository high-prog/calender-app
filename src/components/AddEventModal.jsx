import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import '../App.scss'


function AddEventModal({ newEvent, setNewEvent, setShowModal, setAllEvents}) {

    const handleSubmit= () => {

        console.log(newEvent);
        setAllEvents(prevState => ([...prevState,newEvent]))
        setNewEvent({
            title: "",
            description:"",
            start:"",
            end:""
        })
        setShowModal(false);
    }

  return (
    <div className='modal'>
        <div className='container'>
            <img src="https://www.svgrepo.com/show/135247/multiply.svg" alt="" className='cross' onClick={() => setShowModal(false)} />
            <h3>Add Event Details</h3>
            <form  onSubmit={handleSubmit}>
                
                <input type="text" id="title" placeholder='Add Title' value={newEvent.title} onChange={(e) => setNewEvent({...newEvent,title:e.target.value})}/>
                
                <input type="text" id="description" placeholder='Description' value={newEvent.description} onChange={(e) => setNewEvent({...newEvent,description:e.target.value})} />
                <DatePicker
                placeholderText='Start Date and time'
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent,start})}
                showTimeSelect
                />
                <DatePicker
                placeholderText='End Date and time'
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent,end})}
                showTimeSelect
                />

                <button>Add Event</button>
                
            </form>

        </div>
    </div>
  )
}

export default AddEventModal