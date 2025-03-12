---
date:
  created: 2025-02-28
tags:
  - software-engineering
categories:
  - Thinkoneering
---

# On Creativity in Software Engineering and the Role of Generative AI

If one were to ask people on the street to name creative jobs, I would not expect software development to be mentioned very often.
On the other hand, there are many tasks and activities in the daily work of a software developer that seem very creative to me.
I would also describe myself as creative and developing software can be an outlet for this creativity.

In this article I want to explore if software engineering is creative.
But this is not only a question of categorization.
I want to use this exploration to get a deeper understanding of what creativity is.
But I also want to think about the effect of GenAI on the work of software engineers.

<!-- more -->

## What is creativity?

A very basic definition of creativity involves _originality_ and _effectiveness_[@runcoStandardDefinitionCreativity2012].
So, being creative means coming up with something new that is effective towards a goal.
For example, a random process could come up with something original.
But this would then not be considered creative because it is not effective towards a given goal.
For me this definition makes creativity already more graspable, moving it away from a mysterious property that only artists have towards something that could be useful when developing software.

In psychology this is a well-researched concept.
Researchers often have the implicit or explicit goal of finding out how to improve people's creativity in order to solve big problems of our world.
But before we investigate that, the definition above still feels somewhat simplistic and too broad to capture everything from Leonardo Da Vinci painting the Mona Lisa to me designing the logo for this blog.
Kaufman and Beghetto propose a model to differentiate these[@kaufmanBigLittleFour2009].
They would call one of these _Big-C_ creativity and the other one _little-c_.
They also critique their field for focusing too narrowly: either on _Big-C_ creativity by interviewing top creators in their fields, or on _little-c_ creativity through studies on students and children in everyday contexts.
That's why they introduce two additional forms of creativity:
_Mini-c_, the
> novel and personally meaningful interpretation of experiences, actions, and events[@beghettoBroaderConceptionCreativity2007].

And _Pro-c_, which is the creativity of those that perform a task on a professional level.
This concludes their _Four C Model_[@kaufmanBigLittleFour2009].
For us, thinking about software engineering, this is very useful, because neither _Big-C_ nor _little-c_ seemed to fit what we are interested in.
I think the type of creativity that works for engineers must be _Pro-c_.
So, it is good to learn that psychology research had a bucket for the creativity of us engineers.
But there is also research that explicitly looks at this.

## Creativity in Software Engineering

A qualitative study interviewed engineers to clarify the role and extent of creativity in software engineering.
The participants agree
> that being creative is a requirement to successfully tackle complex problems[@groeneveldExploringRoleCreativity2021]

But they also state, quoting a participant "‘Creativity is the means, not the goal.’"[@groeneveldExploringRoleCreativity2021].

Other authors also used interviews but go deeper in their analysis.
They think about how creativity may be defined specifically in software engineering.
They make the interesting observation on why the word creative is barely used in this context:
> This is perhaps not because software isn’t creative but because creativity in software engineering might look different than in other domains[@inmanDeveloperProductivityHumans2024]

And they identify three key themes of creativity in SWE:

1. Collaboration increases creativity
2. Both individuals and teams do problem-solving by learning and exploration as basis for creativity
3. Reuse and recombination of existing code[@inmanDeveloperProductivityHumans2024]

These are interesting new aspects, that also help when thinking about how to increase creativity.
Note that point 2 aligns with previously introduced _Mini-c_, indicating that my perceived relevance of _Pro-c_ may not be the whole truth.
Very central to that paper is the perception of creativity as reuse.
This may be one of the ways creativity in SWE may look different from commonly perceived creativity.

## Common Sense Understanding of Creativity

Using the background on creativity, I want to look at the initial confusion:
Why do people generally not consider engineers to be creative?

What are occupations that are considered creative?
I assume most of these actually relate to art and artists.
My hypothesis is, that what people think of is primarily _Big-C_.
And going back to Leonardo Da Vinci, while he was a brilliant engineer, the public primarily knows him for his paintings.
But what is the difference between painting and programming?
If both are considered creative, then—as we established—they must involve originality and effectiveness.
And I think the biggest difference here lies in the effectiveness:
While engineering effectiveness is measured against solving a concrete problem, the effectiveness in creative art is harder to grasp for me.
How is art effective?

Firstly, there is an aesthetic aspect.
Art that is successful is considered beautiful by many.
But I doubt that a painting being merely nice to look at would end up being as well known as the Mona Lisa.
That's why secondly, there is artistic expression.
In my opinion, good art must be effective in the sense of conveying a message, evoking emotions or enabling reflection.
Everything else is merely entertainment.

So, the most relevant difference between creativity in art, that also seems to be the common understanding of creativity, and creativity in SWE is the goal.
And with different goals, the effectiveness of the art is measured differently.
While the goal in art is self-expression and beauty, the goal in engineering is solving problems.
This is why in the public; creativity is often associated with art and with a degree of self-expression.

## What Creativity Looks Like in Software Engineering

In the previously quoted paper, the special nature of creativity in SWE was identified as recombination of existing solutions.
I think that this is an important aspect but doubt that it explains the core of this confusion.
However, leaning into this idea, the recombination of existing solutions becomes particularly interesting in the context of [open source software](/tags#open-source).
If innovation is sped up through open source software[@henkelHowPersonalCompany2025], and reuse is central to creativity in SWE, then usage of open source enables innovation through creative reuse.
So, reuse and recombination are central aspects of creativity in SWE.

But I am skeptical that it can explain the difference to creativity in art, though.
If we for example consider improvisation in jazz, then recombination of existing themes, phrases what and what's called _licks_ is crucial.
While a jazz performance can seem random at first sight, it is always a clever recombination and variation of that what others have played before.
This concept is not too different from a software engineer using libraries and implementing pre-defined algorithms to accomplish a specific technical goal.
For example, Adorno sees the strength of technology in its contrast to humanism: technology draws from a predefined set of existing techniques, whereas humanism lacks such a set of typical solutions[@theodorwadornoUberTechnikUnd1953].

So, to summarize, while I agree that recombination is an important aspect of creativity in SWE, it is not the main difference to creativity in other fields or in common sense understanding of the phrase.
The lack of common-sense identification for engineering creative comes from

1. Most people think of creativity predominantly as _Big-C_, the creativity of genius top-of-the-field artists.
2. And from different goals: Artistic creativity follows the goal of aesthetics and self-expression while engineering follows the goal of problem-solving.

Nevertheless, both are creative when considering the typical definition involving _originality_ and _effectiveness_.
And the fact that the public does not consider software engineers to be creative may say more about them not knowing an awful lot about what we do than this question.
This may also be the reason that many people think that all of us will be replaced by AI soon.
Nonetheless, GenAI undoubtedly will have a huge impact on our work.

## The Influence of Generative Artificial Intelligence on Creativity in SWE

A lot has been said about the impact of GenAI on art[@claudiabaxterAIArtEnd2024,@duncancrabtree-irelandHowAICan2025].
And I very much share the feeling that AI doing creative tasks is the wrong direction, because I would much prefer to be creative and have AI take over the chores[@maciejewskaYouKnowWhat2024].
But is this also true for the use in SWE?
Are we at the risk of having GenAI take all the joy out of programming?
From my personal experience, at least with current tools, the opposite is true.
For example, Copilot in Vscode is quite good at the boring parts of programming, like extending a change I have established for the remaining variables.
On the other hand, it is quite bad to see the bigger picture of a software architecture or reason pros and cons about a used implementation.
Reminding ourselves that creativity in SWE involves combining existing solutions, GenAI is good at coming up with a simple implementation using a popular library for one problem but is bad at deliberating what the best tool for given job is or how a given approach could be improved when this involves seeing the bigger picture.

But there is also research exploring the potential impact of GenAI on creativity in SWE[@jacksonCreativityGenerativeAI2024].
To do this, the paper primarily combines two models:

1. The _4P framework of creativity_ that looks at four components to the creative process: Person, Product, Process and Press (the environment). It explains how these components influence creativity, where _Person_ refers to the individual being creative, _Product_ looks at the outcome or artifact, _Process_ considers the methods and techniques used and _Press_ is the wider environment including social, cultural, economic down to physical aspects[@rhodesAnalysisCreativity1961].
2. The _McLuhan tetrad_, designed to think about potential impact of a new technology using 4 questions on how that technology: (i) enhances, (ii) makes obsolete, (iii) retrieves from obsolescence, and (iv) reverses into when pushed to extremes[@mcluhanLawsMedia1977].

The paper then combines these two models in what we engineers would call a cartesian product.
The authors used these scenarios for brainstorming possible effects.
The resulting sixteen consideration fields are all very interesting and allow for a deep and wide consideration of the impacts of GenAI on SWE and I recommend everyone to read the paper[@jacksonCreativityGenerativeAI2024].
But in the context of this discussion most interesting are:

- The 4P field _person_ looked at through the _retrieves_ question:

> _Creative Work_ Today, creativity often takes a backseat to productivity. With GenAI taking the burden of writing code, developers will have more time to engage in fun, creative work.[@jacksonCreativityGenerativeAI2024]

(italic formatting by the authors)

- The 4P field _product_ looked at through the _reverses into_ question:

> _Echo Chamber_ The more new products resemble common products that GenAI "understands", the more GenAI's suggestions could become self-reinforcing, thereby limiting exposure to truly novel ideas.[@jacksonCreativityGenerativeAI2024]

(italic formatting by the authors)

While the first quote goes in the direction that I indicated above, that GenAI can help programmers with those parts of the job that are mundane, the second quote hints at potential risks of self-reinforced patterns.
Considering that these tools today are presumably trained a lot on code that is open source, these same tools help produce new open source code that is used to train tools, again.
And this is just one of the risks that the increased use of GenAI in SWE has.
However, at least for current tools, it seems to me like the creativity of individual programmers could even gain in relevance.

## Takeaways

In this article I tried to shed some light on creativity in software engineering.
The key points are:

- Creativity requires _originality_ and _effectiveness_.
- In SWE, creativity involves a lot of reuse and recombination of components, but it is creativity, nonetheless.
- The public probably thinks about creativity more in terms of art.
- Despite the rise of GenAI, the unique creativity of software engineers in problem-solving and innovation remains irreplaceable for now.

<!-- Abbreviations -->

*[SWE]: Software Engineering
*[GenAI]: Generative Artificial Intelligence
