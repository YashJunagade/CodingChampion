import ExpandingDiv from './ExpandingDiv'

function Menu() {
  const fySubjects = [
    { sName: 'C Programming' },
    { sName: 'DBMS' },
    { sName: 'Web Technology' },
    { sName: 'RDBMS' },
  ]
  const sySubjects = [
    { sName: 'Data Structure' },
    { sName: 'Big Data' },
    { sName: 'Php' },
    { sName: 'CPP' },
    { sName: 'Angular JS' },
    { sName: 'Advance Php' },
    { sName: 'Node JS' },
  ]
  const tySubjects = [
    { sName: 'Core Java' },
    { sName: 'Python' },
    { sName: 'MongoDB' },
    { sName: 'Advance Java' },
    { sName: 'Android Programming' },
    { sName: 'Dot Net Framework' },
  ]

  return (
    <>
      <div>
        <ExpandingDiv subjects={fySubjects} title="FY Subjects" />
        <ExpandingDiv subjects={sySubjects} title="SY Subjects" />
        <ExpandingDiv subjects={tySubjects} title="TY Subjects" />
      </div>
    </>
  )
}
export default Menu
