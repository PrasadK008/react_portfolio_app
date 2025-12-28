import React from 'react';

const Skills = () => {
  const skills = ["ASP.NET MVC", ".NET Core (6 & 9)", "React.js", "C#", "SQL", "Generative AI", "Python"];
  
  return (
    <section style={{ padding: '40px', backgroundColor: '#282c34', color: 'white' }}>
      <h2>Technical Skills & Certifications</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map(skill => (
          <span key={skill} style={{ border: '1px solid white', padding: '5px 15px', borderRadius: '20px' }}>
            {skill}
          </span>
        ))}
      </div>
      <p style={{ marginTop: '20px' }}>
        [span_11](start_span)<strong>Certifications:</strong> Agentic AI (2025), Prompt Engineering, Python Master[span_11](end_span).
      </p>
    </section>
  );
};

export default Skills;
