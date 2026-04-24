---
date:
  created: 2026-03-01
tags:
  - philosophy
categories:
  - Thinkoneering
---

# Simplicity is Complicated

The best things in life are simple.
But, so are the worst ones.
Simplicity is a concept that is surprisingly difficult to grasp.
<!-- more -->

It fascinates me because it's really hard to properly define simplicity and I am not sure how I feel about it.
On one hand, I admire simple things.
When an previously complicated topic becomes apparent and clear, it fills me with genuine joy.
On the other hand, things that appear too simple can feel wrong, and sometimes I even feel like they are not worth my attention or that who introduced this simplification has some hidden agenda.

For example, I think that the ideal engineering-science paper is based on _one simple idea_.
Being an engineering paper, it must demonstrate effectiveness at solving the addressed problem compared to previous solutions.
But I think the best papers describe a solution that is as simple as possible, such that adding additional parts could not make it any better.
Additionally, since we talk about research papers, it will be easier to fit on the limited pages and a reader will be more likely to understand the paper.

I remember a conversation with a colleague about my appreciation for papers based on simple ideas.
But after confessing this love for simplicity, they warned me, saying that scientific reviews can be challenging.
This caught me off guard, and I was confused.
It appeared as they would think for something to be good, it must also be complicated.
But unfortunately, I think the reverse often happens, when ideas are presented more wordy and complicated than they actually are.
Which can be a way to hide the fact that the idea is not very good.
I guess it hadn't occurred to me before that simplicity could be seen as low quality.
There is of course the problem that some people just like to use jargon and express themselves in a way that seems sophisticated in order to come across as intelligent.
It must be noted that this may not be done with bad intentions but just because it is incredibly hard to make say something as simply as possible.

This illustrates the main confusion I would like to work through in this post:
Why is simplicity so hard to achieve?
Underneath that, there are further questions:
Is simplicity a desirable property?
And, how can something be so simple that it is wrong?

## What is simplicity

In the literature, simplicity is often discussed in the context of theories.
When comparing two theories, the one containing fewer concepts is called _simpler_ [@bakerSimplicity2004].
This essence is captured in Occam's razor, which says that
> entities should not be multiplied beyond necessity.[@bakerSimplicity2004]

In theories, the entities are the concepts or aspects thereof used to explain observed phenomena.
And more precisely, there are two types of simplicity that are often discussed:

- **Syntactic simplicity**: the number and complexity of basic principles and their relationships used within the theory. This is often also called _elegance_.
- **Ontological simplicity**: the number of kinds of fundamental entities that the theory refers to. This is often also called _parsimony_.[@bakerSimplicity2004]

So the former is based on the inner workings of a theory, while the latter also takes into account how the theory refers to the structure of reality.

A commonly cited example is Einstein's special relativity.
Before its introduction, the Lorentz-Poincaré theory could explain the same phenomena but required the ether as a physical medium for light propagation and auxiliary constructs, namely local time and length contraction to explain the results of the Michelson-Morley experiment.
Einstein's theory, built on two postulates: the principle of relativity and the constancy of the speed of light, renders the ether logically superfluous, making it more ontologically parsimonious[@bakerSimplicity2004].

And Einstein himself is often quoted as appreciating simplicity in theories:

> [T]he grand aim of all science…is to cover the greatest possible number of empirical facts by logical deductions from the smallest possible number of hypotheses or axioms (Einstein, quoted in [@nashNatureNaturalSciences1963])

This gives us a good basis to understand simplicity as a property of theories, but it is still not clear why it is desirable and how it applies to other aspects.

## Simple explanations

Firstly, let's think about the validity of our understanding outside of theories.
If we consider explanations, the transfer is relatively straightforward:
An explanation for an observed event can be described as an ad-hoc theory.
If we witness someone making a negative remark about us, we may worry about the explanation.
Our negativity bias[@baumeisterBadStrongerGood2001] may lead us to form the theory that the person hates us.
However, this explanation isn't very simple, because it would also entail that all previous times they were nice to us, they were just pretending.
A simpler explanation would be that they had a bad day, or their negative comment only applies to one thing we did, not to us as a person.
In this way, preferring simpler explanations could be a way to avoid assumptions about others that are unlikely, and therefore it is desirable.

And in fact research shows that humans assign a higher likelihood to explanations that are simpler[@vrantsidisSimplicityCueProbability2022].
This effect is present in different aspects of reasoning, such as the prior probability of a hypothesis, likelihoods as well as posteriors.
I find it remarkable but also worrying because it could mean that we are biased towards simpler explanations, even if they are not correct.

## Is simplicity desirable?

But can it be good that we seem to prefer simple explanations?
On a more general level competing positions on the desirability of simplicity exist.
Jeffreys argued that one can associate a law with a prior probability that is based on the complexity of the law.
He argued that simpler laws have higher prior probabilities than more complex ones, because they have fewer parameters and if we assume a random distribution of possible parameter values, then simpler laws are more likely to be to be true than more complex ones, because they have fewer parameters that can be wrong.
For example comparing families of equations, linear equations in the form $y = bx + c$ have less parameters than quadratic equations in the form $y = ax^2 + bx + c$.
Thus, linear equations have higher prior probabilities than quadratic equations, and can be considered simpler for that reason[@jeffreysTheoryProbability1998].

Popper challenged Jeffreys' probabilistic argument directly.
His argument was that every linear equation is technically also a quadratic equation, just one where $a = 0$.
And so, if linear equations are a special case of quadratic ones, the probability of a law being linear cannot be higher than the probability of it being quadratic, because the former entails the latter.
So Jeffreys' assignment of higher prior probability to simpler equations contradicts the axioms of probability [@bakerSimplicity2004].

## Falsifiability as understood by Popper

But instead of a direct probabilistic argument, Popper contributed a concept that can help us to understand the desirability of simplicity better.
The concept is _falsifiability_[@karlpopperLogikForschungZur1935].
It is centered on the idea that scientific theories are universal statements, like the classic example of "All swans are white".
These statements are never verifiable, because for any number of observed white swans, it is never certain that there may not come up a future observation of a black swan.
However, they are falsifiable, by the observation of _a single black swan_.
Popper bases his scientific theory on this concept of falsifiability, because it allows us to classify theories as scientific exactly if they are falsifiable.

And I think this works precisely in favor of simplicity and the desirability thereof.
If we look at the two equations again, the linear equation having two parameters and the quadratic equation having three parameters, they would need two and three data points respectively to be uniquely determined.
So, if we have three data points, the linear equation would be falsified if it cannot fit all three data points, while the quadratic equation could still be valid.
Using a quadratic equation over a linear one is comparable to what in machine learning would be called overfitting, a model that is too complex and can fit the training data perfectly, but fails to generalize to new data.
Thus, models with fewer parameters are more likely to be falsified, but if they survive falsification, they are more likely to generalize to new data, which is a desirable property of scientific theories in the same way as it is a desirable property of machine learning models.

## Technical solutions

But can we apply what we learned about simplicity to any technical system?
A first idea is to consider the number of components of technical solutions.
Comparing two technical solutions, one is simpler exactly if it has fewer components.
And this is also desirable, because fewer components will most likely cost less in terms of development, require less resources to manufacture and operate, and be easier to maintain.
It is the opposite of what we call _overengineering_, a solution that is more complex than necessary.

However, maybe in an attempt to avoid said overengineering, we can end up with the other direction:
Many technical solutions seem to explicitly target simplicity.
But on closer inspection, only their appearance is simple.
For example in recent cars, many functions being controlled by one touch screen looks a lot cleaner and therefore simpler compared to if the same functions each had their own switch or button.
However, the interaction with the touchscreen requires the driver to look at it, sometimes change to a different screen first, while a physical switch can be controlled a lot more easily and often without looking at it.
Compared to a physical indicator switch behind the steering wheel, the touchscreen requires a lot more attention by the driver and is therefore not really simple, even though it looks simple.
This can lead to serious safety issues, and therefore the solution is not really simple, even though it looks simple[@gitlinEuropeanCrashTester2024, @liangDrivingSimulatorStudy2024].

We could say that the interaction is what is lacking simplicity in the touchscreen solution.
So in order to maintain simplicity as a desirable property of technical solutions, we must evaluate it not only based on the number of components, but also on the interaction with those components and certainly not based on the appearance of the solution.

Another technical functionality that is worth considering is compression.
A compressed file is simpler than an uncompressed file, because it is shorter and contains fewer bits.
However, if we think about a human reading that file, even the simplest compression algorithms would make it more difficult to understand the content, because the reader would need to decompress it first.
But a compressed text file would be simpler than an uncompressed one by the definition we introduced above.

## Simplicity of interaction

Extending the general concept of simplicity, I would suggest the term _Interactional Simplicity_.
It is particularly important if we consider the interaction with a system, especially that of a human actor.
Also in the UX research, the paradigm of simplicity can be challenged.
A paper proposes to introduce the term of _praxisware_ for those programs that are used after a considerable amount of training, like spreadsheet, word processing, or any professional design tool.
These tools don't need to be simple in the same way that for example a social media website is.
But this is in return exactly the aspect that allows professionals using these tools to utilize their acquired skills as effectively as possible[@sarkarShouldComputersBe2023].
Any attempt to make a system simple to interact with runs the risk of also costing power that the user have over it.
Like in the example of the car indicator controlled with a touch screen, it limits the speed, and therefore also convenience of interaction with these systems.

So I propose to look at the interaction possibilities with the system, too.
This difference has not arisen from the fact that we no longer look at theories.
Also in theories, there may be those, that are simple as a theory, because they contain less components.
But an observer of that theory, for example a student trying to learn it, may not consider it simple at all, if they can not relate well to the parts that the theory consists of, in the same way as a zip-compressed text file is almost impossible to read.

## On stereotypes

While compression is useful in technical systems, something similar happens with generalizations in social interaction.
Why do we often associate traits to individuals based on what groups they appear to belong to?
From a functional perspective, this must have a purpose.
If someone interacts with another person, it is _simpler_ to assume certain traits about the other person based on the group they belong to, rather than to try to understand them as an individual.

If we compare this to compression in technical systems, it is however not a lossless compression, because it is not possible to perfectly predict the traits of an individual based on the group they belong to.
Where stereotypes get problematic is of course if one holds onto them after knowing that a person behaves differently.
And an actual definition from social psychology reads as follows:

> Stereotypes are false or misleading generalizations about groups held in a manner that renders them largely, though not entirely, immune to counterevidence.[@blumStereotypesStereotypingMoral2004]

So stereotypes are an example where simplifications become wrong.
And if we remember that psychologically simplicity functions as a cue for probability [@vrantsidisSimplicityCueProbability2022] then people may be drawn to use stereotypes because the simplicity make them seem more likely while in fact they are incorrect.
How could we overcome this?
Of course, it is simpler to assume that all members of a group have the same traits, but if I actually perceive and individual behaving differently to what the properties of their group would have predicted, I should update my simplification and not hold onto it.
In actual social science, matters are of course more complicated, because stereotypes can be shared within ones own group, and therefore they can be a part of ones identity, which makes it harder to let go of them.
But in any case, stereotypes can be overcome by interaction with individuals, because in the end, wrong simplifications can only be identified by looking at the system without the simplification.

## Why is simplicity hard?

In order to generally avoid wrong simplifications, we must not change the system in a way that introduces errors.
Often when someone else presents a simplification, they primarily communicate what is left after the simplification, but do not explicitly explain what they have removed and why.
For example, if a politician makes a statement that a certain group of people is responsible for a problem in their country, they communicate only that idea and not which other factors have been ignored actively or by accident in this simplification.

But in order to make a valid simplification, one must do two things:

1. Understand the original non-simplified system in its entirety, including all components in their function and interaction with one another.
2. For each of them, decide if it can be removed or replaced without changing how the system functions when interacting with it.

So, how hard the act of simplification is depends on the complexity of the original system, because it requires a number of decisions that depend on the number of components in the original system.
But this number of decisions is not just a linear function of the number of components, but it is also concerned with the interactions between the components and potentially external systems.
This explains why simplicity is so hard to grasp.
When simplifying a system, the complexity does not disappear by itself, but it must be actively removed by the simplifier, and this process is at least as hard as the original system.
And the space of possible simplifications is huge, technically as big as the power set of the original system, and it is not clear which ones are valid and which ones are not.
In this concept two opposing properties touch: Only by going through this hard process, one can truly achieve simplicity.

I think this is also the reason that teaching a subject well is also hard.
In order to explain something, you must master the subject, decide what to include in the explanation and what not, but then make sure to meet the recipient of the explanation at exactly the right level in terms of interactional simplicity, which is different for every recipient[@camererCurseKnowledgeEconomic1989].

In the end I would be very interested whether this idea of why simplicity is hard to achieve is something that found the right interactional simplicity for you, dear reader, so please reach out to me with your thoughts on this topic.
