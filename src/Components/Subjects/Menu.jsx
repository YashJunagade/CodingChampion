import ExpandingDiv from './ExpandingDiv'

function Menu() {
  const fySubjects = [
    {
      sName: 'C Programming',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250358/c_tt1awa.png',
    },
    {
      sName: 'DBMS',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250358/dbms_ukdkrp.png',
    },
    {
      sName: 'Web Technology',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/webTechnology_swhuko.png',
    },
    {
      sName: 'RDBMS',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250650/rdbms_yjo2mj.png',
    },
  ]
  const sySubjects = [
    {
      sName: 'Data Structure',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/dsa_osrfzs.png',
    },
    {
      sName: 'Big Data',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250358/bigdata_ayn9dr.png',
    },
    {
      sName: 'Php',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/php_zueeqn.png',
    },
    {
      sName: 'CPP',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250358/cpp_o1qad6.png',
    },
    {
      sName: 'Angular JS',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250358/angularjs_irsaij.png',
    },
    {
      sName: 'Advance Php',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/php_zueeqn.png',
    },
    {
      sName: 'Node JS',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/nodejs_prhzw5.png',
    },
  ]
  const tySubjects = [
    {
      sName: 'Core Java',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/java_tkndrw.png',
    },
    {
      sName: 'Python',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725554364/python_dgl5mb.png',
    },
    {
      sName: 'MongoDB',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/mongodb_kkewlx.png',
    },
    {
      sName: 'Advance Java',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/java_tkndrw.png',
    },
    {
      sName: 'Android Programming',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250358/androidprogramming_o7tafk.png',
    },
    {
      sName: 'Dot Net Framework',
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725250359/dotnetframework_gavryb.png',
    },
  ]

  return (
    <>
      <div className="md:mt-32">
        <ExpandingDiv subjects={fySubjects} title="FY Subjects" />
        <ExpandingDiv subjects={sySubjects} title="SY Subjects" />
        <ExpandingDiv subjects={tySubjects} title="TY Subjects" />
      </div>
    </>
  )
}
export default Menu
