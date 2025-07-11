function TechCard({ tech }) {
  return (
    <li>
      <img src={tech.icon} alt={tech.name} />
      <p>{tech.name}</p>
    </li>
  );
}

export default TechCard;
