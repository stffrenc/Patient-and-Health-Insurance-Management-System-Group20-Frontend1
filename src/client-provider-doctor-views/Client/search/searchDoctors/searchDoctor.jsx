import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './searchDoctor.css';

function SearchDoctor() {
  const [searchValue, setSearchValue] = useState('');
  const [searchSpecialty, setSearchSpecialty] = useState('');
  const [searchCondition, setSearchCondition] = useState('');
  const [searchAll, setSearchAll] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = async () => {
    try { 
      const response = await axios.post('http://localhost:8000/search_doctor/', { searchValue });
      console.log("response...",response?.data);
      navigate('/search-doctor-results', { state: { results: response?.data} });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAllSearch = async () => {
    try {
      const response = await axios.post('http://localhost:8000/view_all_doctors/', { searchAll});
      navigate('/view-all-doctors', { state: { results: response?.data } });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleConditionSearch = async() => {
    try {
      const response = await axios.post('http://localhost:8000/search_doctor/', { searchCondition });
      navigate('/search-doctor-results', { state: { results: JSON.parse(response?.data) } });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const handleSpecialtySearch = async() => {
    try {
      const response = await axios.post('http://localhost:8000/search_by_specialization/', { searchSpecialty });
      navigate('/search-doctor-results', { state: { results: JSON.parse(response?.data) } });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className='search-doctor-container'>
      <h1>Find your doctor here</h1>
      <div className='search-container'>
        <input 
          type="text"
          placeholder="Search by name or specialization"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>
      <div className='browse-container'>
        <input 
          type="text"
          placeholder="browse by condition"
          value={searchCondition}
          onChange={(e) => setSearchCondition(e.target.value)}
        />
        <button type="submit" onClick={handleConditionSearch}>+</button>
        <input 
          type="text"
          placeholder="browse by specialty"
          value={searchSpecialty}
          onChange={(e) => setSearchSpecialty(e.target.value)}
        />
        <button type="submit" onClick={handleSpecialtySearch}>+</button>
      </div>
      <div className='view_all_container'>
        <button type="submit" onClick={handleAllSearch}>View All </button>
      </div>
    </div>
  );
}
export default SearchDoctor;