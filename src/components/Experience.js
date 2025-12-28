import React from 'react';

const Experience = () => {
  const jobs = [
    {
      company: "CCR Technologies",
      role: "Technical Lead Developer",
      period: "2013 - Present",
      highlights: [
        [span_5](start_span)"Led migration of legacy systems to React.js + .NET Core 9[span_5](end_span).",
        [span_6](start_span)"Reduced delivery cycle time by 20% through agile optimization[span_6](end_span).",
        [span_7](start_span)"Managed teams of 5-8 developers[span_7](end_span)."
      ]
    },
    {
      company: "Smart Soft Tech Solution",
      role: "Senior Software Engineer",
      period: "2009 - 2013",
      highlights: [
        [span_8](start_span)"Improved response times by 15% with optimized SQL queries[span_8](end_span).",
        [span_9](start_span)"Developed automation tools for GIS data[span_9](end_span)."
      ]
    }
  ];

  return (
    <section style={{ padding: '40px' }}>
      <h2>Professional Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{job.role} - {job.company}</h3>
          <small>{job.period}</small>
          <ul>
            {job.highlights.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
