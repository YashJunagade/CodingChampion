import Subject from './Subject'
import { useState } from 'react'

import { Link } from 'react-router-dom'

function Menu() {
  const [showSubjects, setShowSubjects] = useState(false)

  const toggleVisibility = () => {
    setShowSubjects(!showSubjects) // showing the subjects after clicked.
    console.log('div clicked')
  }
  return (
    <>
      <div className="">
        {/* first year subjects  */}
        <div
          className="bg-primary w-[85%] mx-auto min-h-52 mt-8 p-6 rounded-custom cursor-pointer"
          onClick={toggleVisibility}
        >
          <div
            className={`overflow-hidden transition-[max-height] duration-200 ease-linear ${
              showSubjects ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div
              className={`grid grid-cols-2 gap-10 px-2 py-6 transition-transform duration-300 ease-out ${
                showSubjects ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <Subject
                subRoute="/C Programming/slipList"
                subName="C programming"
              ></Subject>
              <Subject subRoute="/DBMS/slipList" subName="DBMS"></Subject>
              <Subject
                subRoute="/Web Technology/slipList"
                subName="Web Technology"
              ></Subject>
              <Subject subRoute="/RDBMS/slipList" subName="RDBMS"></Subject>
            </div>
          </div>
          {!showSubjects && <div className="text-center">Show Subjects</div>}
        </div>
        <div className="bg-primary w-[85%] mx-auto min-h-52 mt-8">test</div>
        <div className="bg-primary w-[85%] mx-auto min-h-52 mt-8">test</div>

        {/* <Subject
          subRoute="/C Programming/slipList"
          subName="C programming"
        ></Subject>
        <Subject subRoute="/DBMS/slipList" subName="DBMS"></Subject>
        <Subject
          subRoute="/Web Technology/slipList"
          subName="Web Technology"
        ></Subject>
        <Subject subRoute="/RDBMS/slipList" subName="RDBMS"></Subject> */}

        {/* second year subjects  */}
        {/* <Subject
          subRoute="/Data Structure/slipList"
          subName="Data Structures"
        ></Subject>
        <Subject subRoute="/Big Data/slipList" subName="Big Data"></Subject> */}
        {/* <div className="h-60 bg-primary w-full mt-4 p-6 flex justify-evenly">
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Data Structure/slipList">Data Structure</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Big Data/slipList">Big Data</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Php/slipList">Php</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Angular JS/slipList">AngularJS</Link>
          </div>

          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/CPP/slipList">CPP</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Advace Php/slipList">Advace Php</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Node JS/slipList">Node JS</Link>
          </div>
        </div> */}
        {/* third year subjects  */}
        {/* <div className="h-60 bg-primary w-full mt-4 p-6 flex justify-evenly">
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Core Java/slipList">Core Java</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Python/slipList">Python</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/MongoDB/slipList">MongoDB</Link>
          </div>

          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Advance Java/slipList">Advance Java</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Android Programming/slipList">Android Programming</Link>
          </div>
          <div className=" flex flex-col bg-primary2 hadow-md  rounded w-30 md:w-40 h-full   md:h-full">
            <Link to="/Dot Net Framework/slipList">Dot Net Framework</Link>
          </div>
        </div>  */}
      </div>
    </>
  )
}
export default Menu
