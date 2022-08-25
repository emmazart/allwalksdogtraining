import React from "react";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from '@mui/material/FormControlLabel';

function RadioList({ formState, setFormState }) {

    const services = [
        "Ask Me Anything",
        "Initial Consult",
        "Online Classes",
        "Outdoor Clinic",
        "General Inquiry",
        "Other"
    ];

    function handleClick(e) {
      e.preventDefault();
      setFormState({...formState, choice: e.target.value })
    }

  return (
    <FormControl sx={{ mt: '1rem' }}
    >
      <FormLabel id="demo-radio-buttons-group-label" 
        sx={{ fontSize: '22px', pb: 1.5 }}
        >What service are you interested in?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="General Inquiry"
        name="radio-buttons-group"
      >
        {services.map((service, index) => {
            return (
                <FormControlLabel key={index} value={service} control={<Radio />} label={service} onChange={handleClick}/>
                )
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioList;
