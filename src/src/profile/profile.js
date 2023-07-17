import React, { useState } from 'react';
import "./profile.css";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MatrimonyProfile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [about, setAbout] = useState('');
  const [partnerPreferences, setPartnerPreferences] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('');
  const [status, setStatus] = useState('');
  const [mobile, setMobile] = useState('');
  const [mothertongue, setMothertongue] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [edu, setEducation] = useState('');
  const [email, setEmail] = useState('');


  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form submission or save the data
    // Here, you can make an API call to send the form data to a server or perform any desired action
    console.log('Form submitted:', {
      name,age,gender,about,partnerPreferences,photoPreview,religion,caste,status,mobile,mothertongue,country,city,
      email,height,weight
    });
  };

  return (
    <div className='profile'>
    <div className="profilemain">
      <h1 className='profhead'>My Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='proffont'>Name:</label>
        <input
          type="text" className='proftext'
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="age" className='proffont'>Age:</label>
        <input
          type="text" className='proftext'
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

<label htmlFor="height" className='proffont'>Height:</label>
        <input
          type="text" className='proftext'
          id="height"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <label htmlFor="weight" className='proffont'>Weight:</label>
        <input
          type="text" className='proftext'
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        

<label htmlFor="mothertongue" className='proffont'>Mother Tongue:</label>
        <input
          type="text" className='proftext'
          id="mothertongue"
          name="mothertongue"
          value={mothertongue}
          onChange={(e) => setMothertongue(e.target.value)}
          required
        />

        <label htmlFor="gender" className='proffont'>Gender:</label>
        <select
          id="gender" className='proftext'
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        
        <label htmlFor="religion" className='proffont'>Religion:</label>
        <input
          type="text" className='proftext'
          id="religion"
          name="religion"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
          required
        />

<label htmlFor="caste" className='proffont'>Caste:</label>
        <input
          type="text" className='proftext'
          id="caste"
          name="caste"
          value={caste}
          onChange={(e) => setCaste(e.target.value)}
          required
        />

<label htmlFor="country" className='proffont'>Country:</label>
        <input
          type="text" className='proftext'
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

<label htmlFor="city" className='proffont'>City:</label>
        <input
          type="text" className='proftext'
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

<label htmlFor="mobile" className='proffont'>Mobile Number:</label>
        <input
          type="text" className='proftext'
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />


<label htmlFor="email" className='proffont'>Email Id:</label>
        <input
          type="text" className='proftext'
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
<label htmlFor="status" className='proffont'>Marital Status:</label>
        <input
          type="text" className='proftext'
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />

<label htmlFor="edu" className='proffont'>Education & Career:</label>
        <textarea
          id="edu" className='proftext'
          name="edu"
          value={edu}
          onChange={(e) => setEducation(e.target.value)}
        ></textarea>

        <label htmlFor="about" className='proffont'>About Me:</label>
        <textarea
          id="about" className='proftext'
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>

        <label htmlFor="partner" className='proffont'>Partner Preferences:</label>
        <textarea
          id="partner" className='proftext'
          name="partner"
          value={partnerPreferences}
          onChange={(e) => setPartnerPreferences(e.target.value)}
        ></textarea>

        <div className="photo-upload">
          <label htmlFor="photo" className='proffont'>Upload Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handlePhotoUpload}
          />
          <img
            id="photo-preview"
            src={photoPreview}
            alt="Photo Preview"
          />
        </div>

        <div className="clearfix">
          <button type="submit" className='profbut'>Save</button>
        </div>
        <div className='backbut'>
          <Button className="profbut1" variant="contained" component={Link} to="/landing">Home</Button>
          </div>
      </form>
    </div>
    </div>
  );
};

export default MatrimonyProfile;
