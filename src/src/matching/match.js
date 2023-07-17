import React from 'react';
import "./match.css";

const MatchPage = () => {
  const profiles = [
    {
      id: 1,
      name: 'Bharath',
      age: 25,
      location: 'Coimbatore, India',
      about: 'Hi, I am a kind-hearted and family-oriented person with a passion for cooking and traveling. I believe in mutual respect and open communication in a marriage. I am looking for an honest, caring partner with similar values. I value family traditions and am excited to start my family with someone special.',
      preferences: 'I am a family-oriented girl looking for a life partner who values relationships and has a strong sense of responsibility towards his family. I prefer someone who is well-educated, ambitious, and financially stable and who shares my values of honesty, kindness, and respect. Physical appearance is not the most important factor for me, but I appreciate someone who cares for their health and appearance. ',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_U.S_Consulate_Chennai_celebrated_its_two-year_anniversary_on_Facebook_with_U.S._Consul_General_Jennifer_McIntyre%2C_actors_Bharath_Srinivasan_and_Jeyam_Ravi20_%28cropped%29.jpg/640px-thumbnail.jpg',
      matchingpercentage: '98%',
    },
    {
      id: 2,
      name: 'Arun',
      age: 28,
      location: 'Trichy,India',
      about: 'I am a confident and independent woman, currently working for the government. I value honesty, hard work, and a good sense of humor. In my free time, I enjoy reading books, traveling, and exploring new cuisines. I am looking for a partner who shares my values and is supportive of my career aspirations. Someone who is kind, understanding, and has a positive outlook on life would be an ideal match for me.',
      preferences: 'I am looking for an honest, kind, and family-oriented partner. Education and career are important, so I prefer an ambitious, hardworking, and financially stable partner. I value good communication and emotional intelligence in a partner, and I want to find someone who can express their feelings and listen to mine. Physical appearance is not my top priority, but I appreciate a partner who takes care of themselves and is physically fit. ',
      photo: 'https://im.rediff.com/movies/2020/jul/21namit-das4.jpg',
      matchingpercentage: '93%',
    },
  ];

  const handleConnect = (profileId) => {
    // Perform action when the "Connect" button is clicked
    console.log(`Connect clicked for profile with id ${profileId}`);
  };

  return (
    <div className="match">
        <div className='matching'>
        <h1 className='matchh1'>EliteLoveMatrimony Matching </h1>
         {profiles.map((profile) => (
        <div className="profilecard" key={profile.id}>
          <img src={profile.photo} alt={profile.name} />
          <div className="details">
            <h2 className='matchname'>{profile.name}</h2>
            <p className='matchside'>Age: </p>
            <p className='matchcontent'>{profile.age}</p>
            <p className='matchside'>Location:</p><p className='matchcontent'> {profile.location}</p>
            <p className='matchside'>About Me:</p><p className='matchcontent'> {profile.about}</p>
            <p className='matchside'>Partner Preferences:</p><p className='matchcontent'>{profile.preferences}</p>
            <p className='matchside'>Matching Percentage:</p><p className='matchcontent'>{profile.matchingpercentage}</p>
          </div>
          <div className="button-container">
            <button
              className="buttonmatch"
              onClick={() => handleConnect(profile.id)}
            >
              Connect
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MatchPage;
