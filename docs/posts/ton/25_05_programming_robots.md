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

- It's Hard to Write Code for Computers, but It's Even Harder to Write Code for Humans
- Riehle: VisualSpaghettiRobotics2023

Hinted at it in ROSCon talk, tbw

Complexity Luhmann
> Unter Komplexität soll hier und im folgenden die Gesamtheit der Möglichkeiten des Erlebens und Handelns verstanden werden, deren Aktualisierung ein Sinnzusammenhang zuläßt. <!-- codespell:ignore -->
[@luhmannRechtssoziologie1983]

Thinking Fast and Slow / Chess

## Main

A. Dim reduction

B. but more

C. Mental model / human representation or language

D. Expectation vs reality loop

## What is missing?

<!-- Abbreviations -->

*[AI]: Artificial Intelligence
