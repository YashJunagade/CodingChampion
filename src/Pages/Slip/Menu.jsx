import Subject from './Subject'

import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <div className="">
        {/* first year subjects  */}
        <div className="bg-primary w-[85%] mx-auto min-h-60 mt-8">test</div>
        <div className="bg-primary w-[85%] mx-auto min-h-60 mt-8">test</div>
        <div className="bg-primary w-[85%] mx-auto min-h-60 mt-8">test</div>

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
