import Section from './Section';

function Experience() {
  return (
    <Section id="experience" title="Досвід роботи">
      <article className="border-l-4 border-emerald-700 pl-5">
        <h3 className="font-serif text-xl font-bold">Фріланс-проєкти</h3>
        <p className="mb-2 text-emerald-700">
          <strong>Самозайнятість</strong> — січень 2026 – дотепер
        </p>
        <ul className="list-disc pl-5">
          <li>Створення односторінкових сайтів для малого бізнесу.</li>
          <li>Підтримка та оновлення контенту.</li>
          <li>Робота з Git та командою через GitHub.</li>
        </ul>
      </article>
    </Section>
  );
}

export default Experience;
