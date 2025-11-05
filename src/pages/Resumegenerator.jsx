import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { LiaFileAlt } from 'react-icons/lia'
import { LiaFileDownloadSolid } from 'react-icons/lia'

function Resumegenerator() {
  return (
    <div className="container my-5">
      <h3 className="text-center my-5">Create a job resume in minutes</h3>

      {/* Step 1 */}
      <div className="row d-flex justify-content-center text-center ">
        <div className="col-md-4  mx-5 border shadow p-5 rounded">
          <LiaFileAlt className="fs-1 my-3  text-primary" />
          <h3>Add your information</h3>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>
    

      {/* Step 2 */}
   
        <div className="col-md-4 border shadow p-5 rounded">
          <LiaFileDownloadSolid className="fs-1 my-3 text-danger" />
          <h4>Download your resume</h4>
          <p>Download & start applying</p>
          <h5>Step 2</h5>
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center">
        <Link to="/form">
          <Button
            variant="contained"
            sx={{ backgroundColor: 'rgb(53,4,99)', color: 'white' }}
            className="my-3"
          >
            Let’s Start
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Resumegenerator
