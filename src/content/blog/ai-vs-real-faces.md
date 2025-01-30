---
pubDatetime: 2025-01-13
title: AI vs. real faces - A study
featured: false
draft: false
tags:
  - project
  - ux
  - ai
description:
  Can people differentiate AI faces and real faces? This is a study that I have done in the human perception course in KTH.
---

Can young women differentiate AI faces and real faces when it comes to dating profiles? This is a project that I have done in the human perception course in KTH for the past 2 months with my fellow classmates: Sara Danielsson, Olivia Flodkvist, Olivia Martin and Julia Nordqvist. We looked into how people react and think when they encounter dating profiles with AI generated faces. Our conclusion was people are actually quite good at telling the difference between a real face and an AI generated one.

<img src="https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/poster.png" alt="poster" class="object-contain">

## Table of contents

## How it all began?

In the first year of studying master's programme in interactive media technology, there is a mandatory course that I would have to take called "Human Perception for Information Technology". As I came from a background of software engineering, I had not much idea on the human side when it comes to human-computer interaction, so this course would be quite interesting for me. 

We were given different lectures on different sensory perception like visual, color, motion, speech and music etc. We would also need to choose a project topic to work on throughout the course, and among all those interesting topics, I landed on "Comparative study on the perception of real faces vs. AI generated faces in photographs/images for user experiences". I was quite curious how this turned out since the generative AIs are getting better and better, and the internet is sometimes flooded with fake images, which could be really dangerous in some situations. 

## The process

So together with 4 other lovely people that had the same interest on this topic, we began our study.

### Searching for topic

We all had our own experiences when it came to seeing fake AI faces online and we digged a bit in our memory during one of our meetings to see if we could find anything doable as a further study topic. We came up with many things, such as "How trustworthy is the information posted by AI person on social media", "Boomers judging AI vs. real profile pictures", "Virtual influencer AI generated vs. real pictures". Most of our ideas were about social media, and I think that's probably because people are exposed to AI content on social media more than any other sources in everyday lives. 

After we talked a bit with our supervisor, we decided to put our focus on AI dating profiles, which seemed to be a very interesting and worth digging topic both for us and the supervisor, and most importantly, a fun one.

Ahh right, one thing to mention is that our study was specifically focusing on women's perception, not men. This was because we all thought that women are usually more picky and men are not lol. So it should make sense to do this on women first, and if anyone is interested afterwards, they can expand this to men.

### Doing the experiments

We then designed our experiment flow so that we could collect the data we wanted for further analysis. Because we wanted to mimic a dating app and letting the participants feel like they are using something like Tinder, we initially thought about developing a fake Tinder app or a mockup in some sort, but then we realized that would be too much work since we only have about less than 2 months to complete the project, so we used google forms survey instead.

We would also need some real human face images, make their AI replicas, and make them into dating profiles. We searched many different credit free images sources, but none of them were quite up to our standards to be a dating profile. What we wanted was something like everyday life photos taken with phones, and those should be imperfect and even sometimes blurry. But we didn't have much choices so we just compromised on using some photography works on Unsplash. 

Then we need to find a image generation AI tool to make our replicas. There weren't many free to use AI tools online for our study. Midjourney is powerful but it's under a subscription model. Open source models were our only choice, but we didn't bother to deploy a model locally and do all the setup ourselves, so we just found a (somewhat) random website that hosts one of the version of StableDiffusion model variants. The website is called [getimg.ai](https://getimg.ai) and it was actually pretty handy to use. 

We put our real face images into the "image references" as one of the parameters, gave the prompt, and we just needed to generate images one by one and picked out the ones that we thought were good enough to make into the survey. Here is the prompt we used: `The same. Real photo. Phone photo. Young adult man. Age X. Realistic. Extremely detailed.`

<img src="https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/a-picture-of-using-getimg-ai.jpeg" class="mx-auto" alt="a picture of using getimg.ai">

Here are the final 20 profiles (10 real and 10 fake) that we used for the experiment. We designed our survey to have two versions, and each will have half profiles with real faces and half fake profiles. The participants needed to pretend they were using Tinder and select if they want to swipe left or right, and also give the reasons. They were also asked to point out which ones they thought were AI.

<img src="https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/all-profiles-1.jpg" class="mx-auto" alt="all profiles 1">

<img src="https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/all-profiles-2.jpg" class="mx-auto" alt="all profiles 2">

We also had a interview session designed after the participants finishing the survey, so we could have the chance to talk to them and get more information. The interview questions are as follows:

- Have you experienced AI generated social media / dating profiles before? If yes, do you want to elaborate?
- How do you distinguish between AI generated profiles and real-life profiles?
- If you suspected a profile was AI, would you still swipe right? Why or why not?
- If you thought a profile was AI-generated, how would it change the way you see or interact with it?
- What made you notice that it was AI generated? Any specific features?Was it different from profile to profile or was it similar features that gave it away?

It was quite fun to do those survey and interviews face-to-face, and most of them were actually very interested in our topic.

### So what did we found?

After we finished the data collection (we did those mostly by asking our friends and random people in KTH campus), we exported all the data form the google forms and did both quantitative and qualitative data analysis. It is quite interesting that we got our results from many different backgrounds and countries, even though the total number of participants was only 21. We did a confusion matrix calculation for the accuracy on identifying AI images, and a thematic analysis on the interview answers.

For the thematic analysis, we learned bout this in one of our previous course about interaction design, and we thought this is a good way to process all those interview data. So we just put all the key information into stickers on Miro and categorized them into themes.

<img src="https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/thematic-analysis.png" class="mx-auto" alt="thematic analysis">

We documented everything we've done into a paper at the end, and here is the conclusion we had in our final paper:

> This study examined perceptions of trustworthiness in AI-generated versus real dating profile images. Participants demonstrated high accuracy (87.5%) in distinguishing AI-generated profiles but showed moderate confidence in their judgments. Key findings highlighted participants' sensitivity to subtle visual cues, such as smooth skin and inconsistent features, in AI-generated profiles, supporting the uncanny valley effect.

> The results underscore the need for AI literacy to mitigate risks of deception and manipulation. Future research should include diverse demographics and platforms to better understand evolving AI technologies and their societal impact.

## The finale

At the end of this course, we did a super short 2-min presentation (because that was what they arranged for each group), and a very nice little exhibition. The teaching team also asked us about a poster about a week before the presentation, and it was quite a surprise that they made this very nice and huge poster, even thought our works weren't technically serious studies. We got a chance to see how other groups had done their projects and talked with each other a bit, and it was very inspiring. This might just be my favorite part of these kind of courses.

  <img src="https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/poster-stand.jpg" alt="poster stand" class="object-contain">

## Looking back

I feel like the time really goes fast when I am focus on a project. I rarely get chances to do projects like this and I think this course has given me a great opportunity to do it even though the lectures might not be as exciting as the project, but still, I'm happy with the results. I really appreciate all the help that I got form our supervisor, and I want to thank my team mates, it was a blast to work with them. 

