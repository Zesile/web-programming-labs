import Section from './Section';

const skills = [
  'HTML5',
  'Git та GitHub',
  'Python (базовий рівень), C# (базовий рівень)',
  'Англійська — C1',
];

function Skills() {
  return (
    <Section id="skills" title="Навички">
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-full border border-emerald-700 px-4 py-1.5">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
