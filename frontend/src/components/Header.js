function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Smart Goal Planner</h1>
      <p style={styles.subtitle}>Track your savings. Achieve your dreams.</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    padding: "1rem",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "1.5rem",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
  subtitle: {
    marginTop: "0.5rem",
    fontSize: "1rem",
    fontStyle: "italic",
  },
};

export default Header;
