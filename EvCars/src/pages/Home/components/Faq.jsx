import Accordion from "./Accordion";

export default function Faq() {
    const faqs = [
        {
            "id": 1,
            "question": "How long does it take to charge an electric car?",
            "answer": "Charging time depends on the charger type. Fast chargers can take 20 to 30 minutes, while home chargers may take 6 to 12 hours."
        },
        {
            "id": 2,
            "question": "What is the average range of an electric vehicle?",
            "answer": "Most modern EVs offer a range between 200 to 350 miles on a full charge, with some models exceeding 400 miles."
        },
        {
            "id": 3,
            "question": "Are electric cars really better for the environment?",
            "answer": "Yes! EVs produce zero tailpipe emissions and have a lower carbon footprint, especially when charged with renewable energy."
        },
        {
            "id": 4,
            "question": "Do electric cars require a lot of maintenance?",
            "answer": "No! EVs have fewer moving parts than gas cars, meaning less maintenance—no oil changes, fewer brake replacements, and longer-lasting components."
        }
    ];

    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    )
}
