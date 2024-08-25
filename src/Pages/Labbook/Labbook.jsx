import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import Menu from "./Menu";
import "./Labbook.css";

function Labbook() {
  return (
    // <section className="labbookPageSection">
    //   <Navbar />
    //   <div className="labbookMainContainer">
    //     <SideBar />
    //     <Menu />
    //   </div>
    // </section>
    <div style={styles.container}>
      <h1 style={styles.header}>🚧 Our team is working on this feature!</h1>
      <p style={styles.message}>Please try again after some time.</p>
      <a href="/" style={styles.link}>
        Go Back To Home
      </a>
    </div>
  );
}

export default Labbook;

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "40px",
    color: "#333",
    marginBottom: "20px",
  },
  message: {
    fontSize: "20px",
    color: "#666",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    textDecoration: "none",
    color: "#007bff",
    borderRadius: "4px",
    border: "1px solid #007bff",
  },
};
