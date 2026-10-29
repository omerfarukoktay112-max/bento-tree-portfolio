import { Award, Briefcase, GraduationCap, Languages } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { SkillsCard } from './SkillsCard'
import { useLanguage } from '../context/language'

function Block({ icon: Icon, title, children }) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 font-medium text-white">
        <Icon size={16} className="text-fuchsia-300" />
        {title}
      </h3>
      {children}
    </div>
  )
}

export function AboutSection() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <BentoCard className="flex flex-col gap-8">
        <Block icon={Briefcase} title={about.experienceTitle}>
          {about.experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-sm font-medium text-white/90">
                  {job.role} · {job.company}
                </p>
                <p className="text-xs text-white/50">{job.period}</p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/65 marker:text-fuchsia-300/60">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </Block>

        <Block icon={GraduationCap} title={about.educationTitle}>
          {about.education.map((item) => (
            <div key={item.school}>
              <p className="text-sm font-medium text-white/90">{item.school}</p>
              <p className="text-sm text-white/65">{item.degree}</p>
              <p className="mt-0.5 text-xs text-white/50">{item.period}</p>
            </div>
          ))}
        </Block>

        <Block icon={Award} title={about.certificatesTitle}>
          <ul className="flex flex-col gap-2">
            {about.certificates.map((cert) => (
              <li key={cert.name}>
                <p className="text-sm text-white/85">{cert.name}</p>
                <p className="text-xs text-white/50">
                  {cert.issuer} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={Languages} title={about.languagesTitle}>
          <ul className="flex flex-wrap gap-2">
            {about.spokenLanguages.map((language) => (
              <li key={language.name} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                {language.name} <span className="text-white/45">· {language.level}</span>
              </li>
            ))}
          </ul>
        </Block>
      </BentoCard>

      <SkillsCard />
    </div>
  )
}
