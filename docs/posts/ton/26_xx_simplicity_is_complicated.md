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
This is probably not a coincidence.
Simplicity is a concept that is surprisingly hard to grasp.
<!-- more -->

It fascinates me because it's really hard properly define simplicity and I am not sure how I feel about it.
On one hand, I admire simple things.
When an otherwise complicated topic becomes apparent and clear, it fills me with genuine joy.
On the other hand, things that are too simple can feel wrong, and sometimes I even feel like they are not worth my attention or that who introduced this simplification has a hidden agenda.

For example, I think that the ideal engineering-science paper is based on _one simple idea_.
Being an engineering paper, it must demonstrate effectiveness at solving the addressed problem compared to previous solutions.
But I think the best papers describe a solution to this problem that is as simple as possible, such that adding additional parts could not make it any better.
Additionally, since we talk about research papers, it will be easier to fit on the limited pages and a reader will be more likely to understand the paper.

I remember a conversation with a colleague about my appreciation for papers based on simple ideas.
But after confessing my love for simplicity, that co-worker warned me with a remark along the lines of reviews often being challenging.
This caught me off guard, and I was confused by the remark.
It appeared as they would think for something to be good, it must also be complicated.
I guess it hadn't occurred to me before that simplicity could be seen as low quality.

This illustrates the main confusion I would like to work through in this post:
Is simplicity a desirable property?
Underneath that, there are further questions:
What makes simplicity so hard to grasp?
And how can something be so simple that it becomes wrong?  #todo maybe update when writing is done

## What is simplicity

In literature, simplicity is often discussed in the context of theories.
It is best understood by comparing two theories, with the one containing fewer concepts being called _simpler_ [@bakerSimplicity2004].

This essence is captured in Occam's razor, which states that
> entities should not be multiplied beyond necessity.[@bakerSimplicity2004]

In theories, the entities are the concepts or aspects thereof used to explain phenomena.
And more precisely, there are two types of simplicity that are often discussed:

- **Syntactic simplicity**: the number and complexity of basic principles and their relationships used within the theory. This is often also called _elegance_.
- **Ontological simplicity**: the number of kinds of fundamental entities that the theory refers to. This is often also called _parsimony_.[@bakerSimplicity2004]

A commonly cited example is Einstein's special relativity.
Before its introduction, the Lorentz-Poincaré theory could explain the same phenomena but required postulating the ether as a physical medium for light propagation and auxiliary constructs — local time and length contraction — to explain the results of the Michelson-Morley experiment.
Einstein's theory, built on two postulates — the principle of relativity and the constancy of the speed of light — renders the ether logically superfluous, making it more ontologically parsimonious[@bakerSimplicity2004].

And Einstein himself is often quoted as appreciating simplicity in theories:

> [T]he grand aim of all science…is to cover the greatest possible number of empirical facts by logical deductions from the smallest possible number of hypotheses or axioms (Einstein, quoted in [@nashNatureNaturalSciences1963])

This gives us a good basis to understand simplicity as a property of theories, but it is still not clear why it is desirable and how it applies to other aspects.

## Is simplicity desirable?

Firstly, let's think about the validity of our understanding outside of theories.
If we consider explanations, the transfer is relatively straightforward:
An explanation for an observed event can be described as an ad-hoc theory.
If we witness someone making a negative remark about us, we may worry about the explanation.
Our negativity bias[@baumeisterBadStrongerGood2001] may lead us to form the theory that the person hates us.
However, this explanation isn't very simple—it would also entail that all previous times they were nice to us, they were just pretending.
A simpler explanation would be that they had a bad day, or their negative comment only applies to one thing we did, not to us as a person.
In this way, preferring simpler explanations could be a way to avoid unnecessary negative assumptions about others, and therefore it is desirable.

But also the justification of simplicity is often argued.
There are competing positions on why simplicity is desirable.
For example on a theological basis, Smart writes:

> There is a tendency \[...\] for us to take simplicity \[...\] as a guide to metaphysical truth. Perhaps this tendency derives from earlier theological notions: we expect God to have created a beautiful universe.[@smartOckhamsRazor1984]

More evidence-based justifications could be based on probabilistic considerations:
The argument is that a law is associated to a prior probability, and simpler laws have higher prior probabilities, because they are more likely to be true than complex ones.
For example comparing families of equations, linear equations in the form $y = ax + b$ have less parameters than quadratic equations in the form $y = ax^2 + bx + c$.
Thus, linear equations have higher prior probabilities than quadratic equations, and can be considered simpler for that reason[@jeffreysTheoryProbability1998].

Popper actually challenged Jeffreys' probabilistic argument directly.
The problem is that every linear equation is technically also a quadratic equation — just one where $c = 0$.
Since linear equations are a special case of quadratic ones, the probability of a law being linear cannot be higher than the probability of it being quadratic, because the former entails the latter.
So Jeffreys' assignment of higher prior probability to simpler equations contradicts the axioms of probability [@bakerSimplicity2004].

However, Popper's concept of _falsifiability_ can be also applied here and provides a different justification for simplicity.
Falsifiability is one of his core ideas that was developed in the aftermath of the second world war.
Similar to how a government must be able to be put out of power, a scientific theory must be able to be falsified.
And I think this works precisely in favor of simplicity and the desirability thereof.
If we look at the two equations again, the linear equation having two parameters and the quadratic equation having three parameters, they would need two and three data points respectively to be determined.
So, if we have three data points, the linear equation would be falsified if it cannot fit all three data points, while the quadratic equation could still be valid.
This is what in machine learning would be called overfitting — a model that is too complex and can fit the training data perfectly, but fails to generalize to new data.
Thus, models with fewer parameters are more likely to be falsified, and therefore they are more likely to generalize to new data, which is a desirable property of scientific theories in the same way as it is a desirable property of machine learning models.

## Simplicity of technical solutions

We can apply the idea of simplicity as the number of components also to technical solutions.
Comparing two technical solutions, one is simpler exactly if it has fewer components.
And this is also desirable, because fewer components will most likely cost less in terms of development, require less resources to manufacture and operate, and be easier to maintain.
It is the opposite of what we call _overengineering_ — a solution that is more complex than necessary.

However, maybe in an attempt to avoid said overengineering, we can end up with the other direction:
Many technical solutions seem to explicitly target simplicity.
But on closer inspection, only their appearance is simple.
For example in recent cars, many functions being controlled by one touch screen looks a lot cleaner and therefore simpler compared to if the same functions each had their own switch or button.
However, the interaction with the touchscreen requires the driver to look at it, sometimes change to a different screen first, while a physical switch can often be controlled without even looking at it.
This can lead to serious safety issues, and therefore the solution is not really simple, even though it looks simple[@gitlinEuropeanCrashTester2024, @liangDrivingSimulatorStudy2024].
For example the stalks to control the cars indicators are used without even consciously thinking about it by drivers with the most basic level of experience.
If a touchscreen is used to control the indicators, it would require a lot more attention, even experienced drivers are required to look at the screen, and therefore it is not really simple, even though it looks simple.
We could say, that the interaction is what is lacking simplicity in the touchscreen solution.
So in order to maintain simplicity as a desirable property of technical solutions, we must evaluate it not only based on the number of components, but also on the interaction with those components and certainly not based on the appearance of the solution.

## Compression

On a very fundamental level, treating simplicity as the number of components, we could compare it also to compression.
A compressed file is simpler than an uncompressed file, because it is shorter and contains fewer bits.
However, if we think about a human reading that file, even the simplest compression algorithms would make it more difficult to understand the content, because the reader would need to decompress it first.
