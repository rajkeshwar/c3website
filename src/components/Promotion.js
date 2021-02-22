import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const PromotionalBar = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="-mb-4">
        <Alert variant="warning text-center text-yellow-900" onClose={() => setShow(false)} dismissible>
          <p>
            <strong>New student deal </strong>  
            | Sign up now to get courses for as low as €14.99 each. New users only.
          </p>
          <Alert.Heading>Ends in 5h 58m 57s.</Alert.Heading>
      </Alert>
      </div>
    );
  }
  return <Button onClick={() => setShow(true)}>Show promotional banner</Button>;
}
 
export default PromotionalBar;