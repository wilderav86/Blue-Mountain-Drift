import styles from "../styles/Faq.module.css";

const Faq = () => {
  const heading = "FREQUENTLY ASKED QUESTIONS";

  const questions = [
    {
      q: "Do I have to have any fishing experience?",
      a: "No. We welcome anglers of any experience level",
    },
    {
      q: "Do you only guide fly fishing anglers?",
      a: "No, we welcome conventional, tackle anglers.  We have great tackle and provide all baits and lures on our trips.",
    },
    {
      q: "Do I need to bring any fishing gear?",
      a: "Orvis rods and reels will be provided if needed. All tippet, leaders, and flies are provided on all trips.",
    },
    {
      q: "What should I bring on the trip?",
      a: "A valid Virginia fishing license, polarized sunglasses, rain coat, hat, and sunscreen. Waders, if needed, and rod and reel if you have one you like to use.",
    },
    {
      q: "Should I bring food?",
      a: "Picnic-style lunch and drinks are provided on full-day trips. On half-day trips, drinks and snacks are provided. You are welcome to bring any additional snacks that you may want.",
    },
    {
      q: "What should I wear?",
      a: "Winter can range from 60° to 30° degrees F for daytime highs.  Spring daytime highs 50° to 80° degrees. Summer daytime highs range from 75° to 90° degrees. Fall daytime highs range from 50° to 70° degrees. Cool to cold temps, dressing in layers is best so you can easily remove or add clothing. Warm to hot temps, quick dry light clothing is best.",
    },
    {
      q: "Which weight fly rod for the different species?",
      a: "For musky, a 9’, 11 wt. with intermediate sinking line and 350 to 450 grain sinking lines.  For trout, 9’, 3, 4, and 5 wt. rods for most trout fishing with a floating line. If the day is going to be on a small stream, 8’, 2 or 3 wt. will be great. Freshwater stripers, 9’ 8 wt. or 9 wt. with a 250-350 grain sinking line. For smallmouth bass, 9’, 6 or 7 wt. rods with a floating line.",
    },
  ];

  const renderQuestions = questions.map((question, id) => {
    return (
      <div className={styles.questions} key={`questions${id}`}>
        <div className={styles.question}>
          <h3 className="heading dark" key={`heading${id}`}>
            {question.q}
          </h3>
        </div>
        <div className={styles.answer}>
          <p className="body dark" key={`body${id}`}>
            {question.a}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h2 className="banner dark">{heading}</h2>
      {renderQuestions}
    </div>
  );
};

export default Faq;
