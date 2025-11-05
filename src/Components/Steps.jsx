import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {addResumeAPI} from '../services/allApi'
import swal from 'sweetalert';



function Steps({userInput,setUserInput,setFinish,setResumeId}) {
  console.log(userInput);
  
  // array
  const steps = ['Basic information', 'contact details', 'educational details',
    'work experience','skill & certificates','review & submit'];

    const suggestionSkills=['React','ANGULAR','NODE','EXPRESS','MONGODB','JAVASCRIP','GIT','UI/UX']
 
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const userSkillRef=React.useRef()

  const isStepOptional = (step)=> {
    return step === 1;
  };
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
 const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
   const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

const removeskill=(skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
}



  // add skill
  const addSkill=(inputSkill)=>{
   if(inputSkill){
    if(userInput.skills.includes(inputSkill)){
      alert("Skill already exist..Add another")
    } 
    else{
     setUserInput({...userInput,skills:[...userInput.skills,inputSkill]})
    }
   }
  }

  // for checking if it works
  const handleAddResume=async()=>{
          // alert('Api called')
  const{name,email}=userInput.personalDetails

      if (name  && email) {
    // alert('api called')
   try{ 
    const result=await addResumeAPI(userInput)
    console.log(result);
    swal({title: "SUCCESS ",text: "RESUME ADDED!",icon: "success",});
    setFinish(true)
    setResumeId(result.data.id)
  }
    catch(err){
      console.log(err);
        swal({title: "ERROR ", text: "RESUME FAILED!",icon: "error",});
    
    }
    
  } else {
     alert('pls fill missing fields')
  }

  }


const renderStepContent =(steps)=>{
  switch(steps){
    case 0:return(
      <div>
        <h3>Personal Details</h3>
        <div className='d-flex row p-3'>
          <TextField id="standard-basic" label="Full name" variant="standard"
           onChange={e=>setUserInput ({ ...userInput,personalDetails: {...userInput.personalDetails,name:e.target.value}})} 
           value={userInput.personalDetails.name} />
          <TextField id="standard-basic" label="Job Title" variant="standard" 
            onChange={e=>setUserInput ({ ...userInput,personalDetails: {...userInput.personalDetails,jobTitle:e.target.value}})}
             value={userInput.personalDetails.jobTitle}/>
          <TextField id="standard-basic" label="Location" variant="standard"
           onChange={e=>setUserInput ({ ...userInput,personalDetails: {...userInput.personalDetails,location:e.target.value}})}
             value={userInput.personalDetails.location} />

        </div>
      </div>

    )
    case 1:return(
      <div>
        <h3>Contact Details</h3>
        <div className='d-flex row p-3'>
          <TextField id="standard-basic" label="E mail" variant="standard"
          onChange={e=>setUserInput ({ ...userInput,personalDetails : {...userInput. personalDetails,email:e.target.value}})}
                 value={userInput.personalDetails.email}  />
          <TextField id="standard-basic" label="Phone Number" variant="standard" 
           onChange={e=>setUserInput ({ ...userInput,personalDetails : {...userInput. personalDetails,phone:e.target.value}})}
                  value={userInput.personalDetails.phone} />
          <TextField id="standard-basic" label="GitHub profile link" variant="standard"
           onChange={e=>setUserInput ({ ...userInput,personalDetails : {...userInput. personalDetails,github:e.target.value}})}
                  value={userInput.personalDetails.github}  />
          <TextField id="standard-basic" label="Linkedin profile" variant="standard" 
           onChange={e=>setUserInput ({ ...userInput,personalDetails : {...userInput. personalDetails,linkedIn:e.target.value}})}
                  value={userInput.personalDetails.linkedIn} />
          <TextField id="standard-basic" label="portfolio Link" variant="standard" 
           onChange={e=>setUserInput ({ ...userInput,personalDetails : {...userInput. personalDetails,portfolio:e.target.value}})}
                  value={userInput.personalDetails.portfolio} />

        </div>
      </div>

    )
    case 2:return(
       <div>
        <h3>Education details</h3>
        <div className='d-flex row p-3'>
          <TextField id="standard-basic" label="course name" variant="standard"
                     onChange={e=>setUserInput ({ ...userInput,education : {...userInput. education,course:e.target.value}})}  
                            value={userInput.education.course} />
          <TextField id="standard-basic" label="college name" variant="standard"
                               onChange={e=>setUserInput ({ ...userInput,education : {...userInput. education,college:e.target.value}})} 
                                      value={userInput.education.college}  />
          <TextField id="standard-basic" label="university" variant="standard"
                               onChange={e=>setUserInput ({ ...userInput,education : {...userInput. education,university:e.target.value}})} 
                                      value={userInput.education.university}  />
          <TextField id="standard-basic" label="year of passout" variant="standard"
                               onChange={e=>setUserInput ({ ...userInput,education : {...userInput. education,year:e.target.value}})} 
                                      value={userInput.education.year}  />
         
        </div>
      </div>

    )
    case 3:return(
      <div>
        <h3>professional details</h3>
        <div className='d-flex row p-3'>
          <TextField id="standard-basic" label="job or intership" variant="standard" 
                     onChange={e=>setUserInput ({ ...userInput,experience : {...userInput. experience,job:e.target.value}})}
                      value={userInput.experience.job} />

          <TextField id="standard-basic" label="company name" variant="standard" 
                     onChange={e=>setUserInput ({ ...userInput,experience : {...userInput. experience,company:e.target.value}})}
                     value={userInput.experience.company} />

          <TextField id="standard-basic" label="location" variant="standard" 
                     onChange={e=>setUserInput ({ ...userInput,experience : {...userInput. experience,location:e.target.value}})}
                     value={userInput.experience.location} />

          <TextField id="standard-basic" label="duration" variant="standard"
                     onChange={e=>setUserInput ({ ...userInput,experience : {...userInput. experience,duration:e.target.value}})}
                     value={userInput.experience.duration} />

        

        </div>
      </div>
    )
    case 4:return(
      <div>
        <h3>skills</h3>
        <Box sx={{width:'100%'}}>
          <Stack spacing={2}>
            {/* <TextField id="standard-basic" label="Add skill" variant="standard" /> */} 
            {/* instesd of textfild we use html inputbox */}
            <input ref={userSkillRef} type="text" className='form-controll' placeholder='add skills'/>
            <Button onClick={()=>addSkill(userSkillRef.current.value)} className='me-3' variant='text' sx={{maxWidth:'400px'}}>Add</Button>
     
          </Stack>
        

        <div >
          <h5>Suggestion :</h5>
          <div className="d-flex flex-wrap justify-content-between">
            {
              suggestionSkills.map(userSkill=>(
                <Button onClick={()=>addSkill(userSkill)} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
        </div>
        <div>
          {/* instead of x we can use <RxCross2/> from reacticons */}
          <h5>Added Skills :</h5> 
            <div className="d-flex  justify-content-between">
              {
              userInput.skills.length>0?userInput.skills.map(skill=>(
              <span className='btn btn-primary d-flex align-item-center justify content-center'>{skill}
                <button onClick={()=>removeskill(skill)} className='btn text-light fs-5'>x</button>
              </span>)): <p>nothing to display</p>
               }                       

            </div>
          </div>
          </Box>
      </div>
    )
    case 5: return(
      <div>
        <h3>Professional summary</h3>
        <div className='d-flex row p-3'>
          <TextField 
          id="standard-multiline-static"
          label="Write a short summary of your self"
          multiline
          rows={4}
          defaultValue="eg: I'm a passionate full stack developer
           with hands-on experience in react,node...."
           variant='standard'
       value={userInput.summary}
                               onChange={e=>setUserInput ({ ...userInput,summary:e.target.value}) }/>

          
        </div>
      </div>
    )


  }
}


  return (
    <div>
       <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>

              {renderStepContent(activeStep)}
          
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            { activeStep === steps.length - 1 ?
            < Button onClick={handleAddResume}>Finish</Button>:
            < Button onClick={handleNext}>Next</Button>
            }
          
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}

export default Steps