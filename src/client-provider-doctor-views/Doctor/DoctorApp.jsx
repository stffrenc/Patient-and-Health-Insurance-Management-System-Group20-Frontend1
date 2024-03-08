import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import doctor from './homepage/doctor.jpg';
import './App.css';
import Calender from './homepage/calender.jsx';
import MessageList from './message/messageList.jsx';
import SendMessageForm from './message/sendMessageForm.jsx';

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to the Doctor central page</h1>
      <div className="page-content">
        <Calender />
        <img src={doctor} alt="doctor" />
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className='message'>
      <div className='message-header'>
        <h1>Messages</h1>
        <MessageList />
      </div>
      <div className='message-send'>
        <SendMessageForm />
      </div>
    </div>
  );
}

function DoctorApp() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>MediApp</h1>
          <nav>
            <ul>
              <li><Link to="">Home</Link></li>
              <li><Link to="message">Messages</Link></li>
            </ul>
          </nav>
          <div className="logout">
            <a href="/">Logout</a>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="message" element={<Message />} />
          </Routes>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2024 Insurance Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default DoctorApp;