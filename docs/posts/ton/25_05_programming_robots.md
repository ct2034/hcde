---
date:
  created: 2025-05-30
tags:
  - behavior-trees
  - deliberation
  - software-engineering
categories:
  - Thinkoneering
---

# How does one program a robot? (working title)

A robot is characterized primarily by it's versatility.
It is a tool that can be used for different tasks in many context that each have there own special challenges.
This makes it inherently hard to program a robot.
Especially, if the resulting robotic system is expected to act autonomously and robustly to unforeseen situations.

In well-established applications of robots in industrial automation the act of programming usually means the definition of a fixed sequence of motions that the robotic arm then executes time and time again.
When we instead think of a robot acting in a less structured environment like a home, the robot can not blindly follow a predefined sequence of actions.
Because, following these predefined actions will fail as soon as anything in that home changes.
And as everyone living with children knows, changes must always be expected but can never be predicted.

In this article I want to develop a understanding of what it means to program a robot to act autonomously.
And I hope that with that understanding it will be easier to see what may be missing in order to build genuinely autonomous machines.

Like with many questions, AI is something that comes to mind.
But at least for now, I am assuming a human to be involved in building and programming this robot.
Nevertheless, fixing the problems I develop here, will help with AI-based approaches.

TODO: structure

## Background

One blog post in particular brought this topic back to my attention.
Benjie Holson's article introduces the important and _mythical non-roboticist_[@holsonMythicalNonRoboticist2024].
This is the person that simple methods to program robots are seemingly designed for, while the underlying problem is hard.
But his point is that this simplification removes aspects from the programming that would have been needed to make the robot work.
And in particular the article highlights two categories:

1) Environment Complexity:
This is what I introduced on top with the messy home.
You don't know in which exact environment the robot will operate, when you build it.
2) Stupid Bullshit Complexity:
I think this can be called integration.
Robotic control systems require internal components that are hard to use because they require very specialized configurations and data formats.

But the crucial point with both of these is that it is important to have a clear user in mind.
And if I were to summarize the articles message, I think it is to respect the users intelligence and sanity by designing a way to program a robot that reflects the true complexity of the task to the user (intelligence) without introducing unnecessary complexities that they have to manage (sanity)[@holsonMythicalNonRoboticist2024]. <!-- markdownlint-disable-line no-reversed-links -->

Less specific to robotics but also looking into how humans interact with code is and article by Erik Bernhardsson[@bernhardssonItsHardWrite2024].
It explicitly introduces the concept of a mental model that another human reading you code has.
This is something that I will explore below in the context of robotics.
The article then provide valuable concrete tips in how to design the code that another developer interacts with.
For example the valid suggestion to avoid the need for a mandatory configuration.Another one is to avoid conceptual overload, something that many robotics projects including my own work on [AS2FM](https://github.com/convince-project/as2fm) could learn a lot from[@bernhardssonItsHardWrite2024].

An interesting article that looks at this problem from a standpoint of theoretical computer science is written by Dirk Riehle[@VisualSpaghettiRobotics2023].
The article points out the need for a differentiation between the definition of a language and it's implementation, when designing a way to program a robot.
Because this way of programming can almost certainly be treated as a language.
And programming languages have clearly defined semantic[@VisualSpaghettiRobotics2023].

For example the now popular Behavior Trees are missing such a semantic, which is why we proposed one[@ghiorziExecutionSemanticsBehavior2025].
This general field of formalisms that allow to define the autonomous behavior of a robot can be called _Robotic Deliberation_.
And I started my talk at ROSCon 2023 with comparing it's relevance with that of the invention of programming languages by Grace Hopper[@roboticsSupportingRoboticDeliberation2023].
While this may be thought provoking, it is also rather handwavy.
But, to make it more concrete, I think it is necessary to introduce some more background on the theoretical side.

And concept that I think is very important here is _complexity_.
This term is used very broadly and we have even seen it in this article before.
Especially for computer scientists it has to be said that we are not talking about computational complexity.
Instead, I want to start with and example from the _complex systems theory_:

> [...] a system that is complex, in the sense that a great many independent agents are interacting with each other in a great many ways. Think of the quadrillions of chemically reacting proteins, lipids, and nucleic acids that make up a living cell, or the billions of interconnected neurons that make up the brain, or the millions of mutually interdependent individuals who make up a human society.[@waldropComplexityEmergingScience1993]

Here is becomes clear that complexity can only be understood as a difference.
It can be best understood if one carefully thinks about the implications of a statement like "To build a house, you don't need to know quantum physics."
This hints at one of my favourit topics, that is emergence.
But for now, all we have to know about complexity is that it is relative.
An crucially, inside of a system it is smaller than outside:

> The system does not have the capacity to connect a state of its own to everything that happens in the environment and to juxtapose one of its own operations to every environmental occurrence, in order either to enhance or to curtail what is happening. Instead, the system has to bundle and even ignore occurrences, and it must deploy indifference or create special arrangements for the management of complexity.[@luhmannIntroductionSystemsTheory2013]

- what is a system
- e.g. language
- mental model ...

Thinking Fast and Slow / Chess

## Main

A. Dim reduction

B. but more

C. Mental model / human representation or language

D. Expectation vs reality loop

## What is missing?

<!-- Abbreviations -->

*[AI]: Artificial Intelligence
