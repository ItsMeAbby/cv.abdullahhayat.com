import * as React from "react";
import { Links, Page, PageSubTitle, PageTitle, PrintCV, Section, SectionList, SectionTitle } from "./components";
import { data } from "./data";

export default function CV() {
  return (
    <>
      <main id="cv" className="p-6 print:p-0">
        <Page>
          <PageTitle text={data.name} />
          <PageSubTitle text={data.position} />
          <Links links={data.links} />

          <SectionTitle text="Summary" />
          <p className="text-justify">{data.summary}</p>

          <SectionTitle text="Experience" />
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <Section line1={exp.company} line1End={exp.location} line2={exp.position} line2End={exp.period} />
              <SectionList items={exp.details} />
            </div>
          ))}
        </Page>
        <Page>
          <SectionTitle text="Education" />
          {data.education.map((edu, idx) => (
            <Section
              key={idx}
              line1={edu.institution}
              line1End={edu.location}
              line2={edu.degree}
              line2End={edu.period}
            />
          ))}

          <SectionTitle text="Certifications" />
          {data.certifications.map((cert, idx) => (
            <Section
              key={idx}
              line1={cert.name}
              line1End={cert.issued}
              line2={`${cert.provider}${cert.certificationId ? ` (Certification ID: ${cert.certificationId})` : ""}`}
            />
          ))}

          <SectionTitle text="Conferences" />
          {data.conferences.map((conf, idx) => (
            <div key={idx} className="mb-4">
              <Section line1={conf.name} line1End={conf.acr} line2={conf.location} line2End={conf.period} />
              <SectionList items={conf.details} />
            </div>
          ))}

          <SectionTitle text="Skills" />
          {data.skills.map((skill, idx) => (
            <div key={idx} className="mb-0">
              <Section line1={skill.title} compact />
              <SectionList items={skill.details} />
            </div>
          ))}
        </Page>
      </main>
      <PrintCV />
    </>
  );
}
