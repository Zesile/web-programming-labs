const skills = [
  'HTML5',
  'Git та GitHub',
  'Python(базовий рівень), C#(базовий рівень)',
  'Англійська — C1',
];

function Skills() {
  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;