import { Link } from 'react-router-dom'

function Dsa() {
  return (
    <div style={styles.container} className="md:mt-16">
      <h1 style={styles.header}>🚧 Our team is working on this feature!</h1>
      <p style={styles.message}>Please try again after some time.</p>
      <a href="/" style={styles.link}>
        Go Back To Home
      </a>
    </div>
  )
}

// Define some basic styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '40px',
    color: '#333',
    marginBottom: '20px',
  },
  message: {
    fontSize: '20px',
    color: '#666',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#007bff',
    borderRadius: '4px',
    border: '1px solid #007bff',
  },
}

export default Dsa
