import { useState } from 'react'

export type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  items: FAQItem[]
}

function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list reveal">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <i aria-hidden="true" />
            </button>
            <div className="faq-answer" id={`faq-answer-${index}`}>
              <p>{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default FAQ
