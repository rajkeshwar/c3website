
import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { PropTypes } from 'prop-types';
import { ArrowUp, ArrowDown } from '../icons/common';
import { AccordionContext } from 'react-bootstrap';
import clsx from 'clsx';

const accordionHeaders = [
  "Getting Started", 
  "Building APIs Using ASP.NET Core", 
  "Building Forms with Angular and Bootstrap", 
  "Implementing CRUD Operations", 
  "Refactoring Towards the Clean Architecture", 
  "Populating and Submitting Forms", 
  "Filtering, Sorting and Pagination", 
  "Uploading Files", 
  "Authentication and Authorization", 
  "Final Improvements"
];

function CustomToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey, 
    () => callback && callback(eventKey)
  );

  const isExpanded = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className="w-full h-full p-4 flex flex-col md:flex-row justify-between"
      onClick={decoratedOnClick}
    >
      <div className="flex items-center">
        <ArrowUp className={clsx('h-4 w-4 transform origin-center transition ease-in-out', { 'rotate-180': isExpanded })}/>
        <span className="block pl-2 text-left">{children}</span>
      </div>
      <div className="text-sm font-light pl-8 md:pl-0">
        18 lectures <span> . 1hr 1min</span>
      </div>
    </button>
  );
}

CustomToggle.propTypes = {
  children: PropTypes.node,
  callback: PropTypes.func,
  eventKey: PropTypes.string
}

function CourseAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      {accordionHeaders.map((header, idx) => (
        <Card key={idx}>
          <Card.Header className="p-0">
            <CustomToggle eventKey={String(idx)}>{header}</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={String(idx)}>
            <Card.Body>{`Hello! I'm the body`}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default CourseAccordion;
