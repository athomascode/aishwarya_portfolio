import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input({ input, meta, placeholder, label }) {
  const showError = meta.error && meta.touched;
  return(
    <>
      {input.type === 'textarea' ? (
        <InputGroup>
          <InputGroup.Text>{label}</InputGroup.Text>
          <Form.Control
            as="textarea"
            {...input}
            placeholder={placeholder}
          />
        </InputGroup>
      ) : (
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              {label}
            </InputGroup.Text>
            <Form.Control
              {...input}
              placeholder={placeholder || "Default"}
            />
          </InputGroup>
      )}
      {showError &&
        <div style={{textAlign: "left"}}>
          <span style={{color: "red"}}>{meta.error}</span>
        </div>
      }
    </>
  )
}

export default Input;