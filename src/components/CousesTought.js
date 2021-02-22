import React from 'react'
import { PropTypes } from 'prop-types';
import { CheckIcon } from '../icons/common';

const courses = [
  {
    "title": "Languages",
    "description": "Java, Python, Scala"
  },
  {
    "title": "JEE",
    "description": "JDBC, Servlets, JSP"
  },
  {
    "title": "Frameworks",
    "description": "Hibernate , Spring"
  },
  {
    "title": "Spring MicroServices",
    "description": "Spring Boot Stack, Spring Cloud Stack"
  },
  {
    "title": "Messaging",
    "description": "Rabbit MQ,  Apache Kafka,JMS"
  },
  {
    "title": "Web",
    "description": "HTML5, CSS3, Java Script , Bootstrap"
  },
  {
    "title": "MEAN Stack",
    "description": "MongoDB, Express JS, Angular7, NodeJS"
  },
  {
    "title": "MERN Stack",
    "description": "MongoDB, Express JS, React JS 16, NodeJS"
  },
  {
    "title": "Distributed",
    "description": "EJB and RESTful Services"
  },
  {
    "title": "BigData",
    "description": "HDFS ,Hadoop, Spark, Sqoop, Hive, Pig ,Impala"
  },
  {
    "title": "NOSQL DB",
    "description": "HBase, MongoDB"
  },
  {
    "title": "RDBMS",
    "description": "SQL/PLSQL  with Oracle, MySQL"
  },
  {
    "title": "Mobile",
    "description": "Android"
  },
  {
    "title": "Tools",
    "description": "ANT, SL4j,Log4J,Junit,GIT,Maven"
  },
  {
    "title": "Servers",
    "description": "Tomcat, Jetty, JBoss, WebLogic"
  }
];

const CoursesChipList = ({ description }) => {
  const chips = description.split(',').map(token => token.trim())

  return ( 
    <div className="flex border border-gray-300 p-2 pb-0 flex-wrap">
      {chips.map((chip, idx) => (
        <CourseChip key={idx} name={chip}/>
      ))}
    </div>
  );
}

CoursesChipList.propTypes = {
  description: PropTypes.string.isRequired
}

const CourseChip = ({ name }) => {

  return ( 
    <div className="pr-2 pb-2 text-sm font-light">
      <div className="flex items-center bg-gray-200 hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out rounded-full px-4 py-1 pl-2 text-blue-500">
        <CheckIcon className="h-5 w-5"/>
        <span className="inline-block text-gray-700">{name}</span>
      </div>
    </div>
  );
}

CourseChip.propTypes = {
  name: PropTypes.string.isRequired
}

const CoursesTought = () => {
  return ( 
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Courses trained by Srinivas Dande</h1>
      <div className="w-full">
        {courses.map(({ title, description }, idx) => (
          <div className="w-full mb-6" key={idx}>
            <h3 className="text-lg mb-2 uppercase">{title}</h3>
            <CoursesChipList description={description}/>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default CoursesTought;