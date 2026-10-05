const jobs = [
  {
    position: 'Фріланс-проєкти',
    company: 'Самозайнятість',
    period: 'січень 2026 – дотепер',
    duties: [
      'Створення односторінкових сайтів для малого бізнесу.',
      'Підтримка та оновлення контенту.',
      'Робота з Git та командою через GitHub.'
    ],
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2>Досвід роботи</h2>
        {jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.position}</h3>
            <p><strong>{job.company}</strong> — {job.period}</p>
            <ul>
              {job.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
}

export default Experience;