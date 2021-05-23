import React from 'react';
import { CustomTaskItemComponentStyles , CustomTaskItemIconStyles } from './CustomTaskItem.Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale , faFemale } from '@fortawesome/free-solid-svg-icons'
// It is recommended to keep components stateless and use redux for managing states
const CustomTaskItem = (props) => {
  return (
    <CustomTaskItemComponentStyles>
     <div key="test" className='test'>
        {
        props.variables.gender === 'male'?  
        <FontAwesomeIcon style={{marginRight:"1rem",marginLeft:"1rem"}} icon={faMale} /> :  
        <FontAwesomeIcon style={{marginRight:"1rem",marginLeft:"1rem"}} icon={faFemale} />
        }
        <span className='brand'>{props.variables.brand}</span>
        
     </div>
    </CustomTaskItemComponentStyles>
  );
};

export default CustomTaskItem;
