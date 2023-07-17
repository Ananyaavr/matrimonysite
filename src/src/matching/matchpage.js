import React from 'react'
import Matchnav from './matchnav';
import MatchPage from './match';

function Match() {
  return (
    <>
        <div className='matchnav'>
            <Matchnav/>
        </div>
        <div className='matchprof'>
            <MatchPage/>
        </div>
    </>
  )
}

export default Match;