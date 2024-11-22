const faqs = [
  {
    question: "Do I need technical experience?",
    answer: "Not at all. We handle all the technical details so you can focus on ministry."
  },
  {
    question: "How long does setup take?",
    answer: "Most churches are up and running within a week."
  },
  {
    question: "What if I need help?",
    answer: "Our support team understands ministry and is available when you need them."
  },
  {
    question: "Can I transfer our existing content?",
    answer: "Yes, we&apos;ll help move your content and set everything up for you."
  }
]

export function FAQ() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Common Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[48rem] space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 