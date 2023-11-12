import React from 'react'
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
        <div className="typewriter">
            <h1> Pack. Send. Collect. </h1>
        </div>
        <div className="text-center mt-2">
            <Link to="/login">
                <button type="button" className="btn btn-success btn-lg custom-button mx-2 px-4">Log in</button>
            </Link>
            <Link to="/signup">
                <button type="button" className="btn btn-success btn-lg custom-button mx-2">Sing up</button>
            </Link>
        </div>
    </div>
  )
}

export default StartPage