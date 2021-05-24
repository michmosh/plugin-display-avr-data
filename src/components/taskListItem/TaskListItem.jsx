import React from 'react';
import { CustomTaskItemComponentStyles , CustomTaskItemIconStyles } from './CustomTaskItem.Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale , faFemale } from '@fortawesome/free-solid-svg-icons'
// It is recommended to keep components stateless and use redux for managing states
const CustomTaskItem = (props) => {
  debugger
  return (
    <CustomTaskItemComponentStyles>
        {
        props.variables.gender === 'male'?  
        <FontAwesomeIcon style={{marginRight:"1rem",marginLeft:"1rem"}} className="icon-list-item" icon={faMale} /> :  
        <FontAwesomeIcon style={{marginRight:"1rem",marginLeft:"1rem"}} className="icon-list-item" icon={faFemale} />
        }
        <span className='brand'>{props.variables.brand}</span>
    </CustomTaskItemComponentStyles>
  );
};

export default CustomTaskItem;
