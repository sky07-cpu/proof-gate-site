type SectionHeadingProps = {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

function SectionHeading({ eyebrow, title, text, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  )
}

export default SectionHeading
