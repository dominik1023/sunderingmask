import CaseStudy from "./CaseStudy";

export default function CaseStudyList({ caseStudies }) {
  return (
    <div>
      {caseStudies.map((caseStudy, index) => (
        <CaseStudy
          key={index}
          title={caseStudy.title}
          industry={caseStudy.industry}
          businessSize={caseStudy.businessSize}
          duration={caseStudy.duration}
          technology={caseStudy.technology}
          objective={caseStudy.objective}
          background={caseStudy.background}
          approach={caseStudy.approach}
          results={caseStudy.results}
          technologies={caseStudy.technologies}
          image={caseStudy.image}
          imageAlt={caseStudy.imageAlt}
        />
      ))}
    </div>
  );
}
