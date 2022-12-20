---
title: How can we help OSS maintainers of "Stadium" projects?
date: 2020-09-09T21:45:33.295Z
---
*Originally published on the 645 Ventures blog.*

[Nadia Eghbal](https://nadiaeghbal.com/) recently published a great book titled *[“Working in Public: The Making and Maintenance of Open Source Software”](https://www.amazon.com/dp/0578675862/)*, which covers the evolution of open source software (OSS) development, the role of communities in open source, and how platforms like GitHub have influenced open source production. It also explores the intersection of monetization and open source (which we will dive into in a future post), and what motivates maintainers and contributors to work on OSS, sometimes with little to no compensation.

Nadia also creates a new taxonomy to categorize projects based on the growth of **users**, defined as developers who use the project and might open GitHub issues from time to time, and **contributors**, defined as developers who make meaningful contributions to the code base (just fixing a typo doesn’t count!). Up until today, there hasn’t been any attempts at discerning projects based on these characteristics. The taxonomy Nadia came up with (table below) gives us a common language to discuss this, as well as helping potential users evaluate them.

|     | High User Growth | Low User Growth |
| --- | ---------------- | --------------- |
|   High Contributor Growth  |    Federations (Rust)              | Clubs (eg Astropy)                |
|   Low Contributor Growth  |  Stadiums (eg Babel)  |   Toys (eg ssh-chat)  |

One key observation from the book that really impacted me is the definition of “Stadium” projects, which are projects that have high user growth, but slow growth in contributors. Just like fans watching a game in a stadium, a few players are creating content (the contributors) that thousands of people are enjoying with no effort. In the case of open source software, admission to the stadium (GitHub) is also free, and fans also have a direct line of communication with the contributors (GitHub Issues/Slack/Discord).

I have never personally maintained very popular open source projects, but I’ve merged smaller contributions in large ones like [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), [Cube.js](https://github.com/cube-js/cube.js), [geocoder](https://github.com/alexreisner/geocoder), and a few more. Each experience was different, but there was a common thread: the maintainers have a lot of work to do to review issues and merge PRs. In her book Nadia suggests that the most precious resource that an open source project has is actually the attention of the maintainers. That is consistent with my personal experience: GitHub has made it exponentially easier for developers to casually contribute to projects, but the amount of work required by maintainers to merge them in has barely decreased.

This creates key challenges for Stadium maintainers:

* **It’s hard for maintainers to triage all the casual contributions that come through GitHub.** Take [Babel](https://github.com/babel/babel) as an example; the project has 6-7 core maintainers, but it currently has ~650 open issues and 152 open pull requests; this is after 6,632 closed issues and 4,400+ merged pull requests. Which ones should they prioritize? How do you discern a casual user opening a ticket to a potential contributor who could take work off of the maintainers’ plate in the long run?
* While this has improved over the past few years, **code reviews are still very manual and require a lot of overview from the maintainer.** Pull request templates with checklists and bots have helped, but the way work is reviewed is largely manual.
* **Most popular open source projects aren’t created with the intent of becoming stadium projects.** The developer might just want to solve their own problem, or work on a technical challenge. As the project grows, GitHub doesn’t offer many features for creators to manage and organize their communities. **Expanding the maintainer base from 1 to 2+ maintainers is a very large effort as it requires moving all the knowledge of the creator into a shared knowledge base, as well as identifying the additional maintainers.** The best way to do so is usually through the community; by making creators more efficient. They should also be able to more easily figure out who could become a potential maintainer of the project. Sometimes, the large influx of users comes before these steps have been completed, leaving the creator overwhelmed.

I’ve been thinking through what kind of products could help maintainers free up their time and prioritize their work. I’m not sure if these would be GitHub features, other open source projects that maintainers can leverage, or standalone startups, but I’d love to hear from anyone who has thought about this or is working on something (you can reach me at alessio(at)decibel.vc).

## **\#1: Open Source “Rep” System**

Most forums in the early 2000s had a “rep” number next to a person’s profile. That would usually give you an idea of how long that user had been around, how much people agreed with them, etc. eBay also had a similar system to rank seller’s trustworthiness (“A++++++++ seller”). With the rise of social media platforms, the idea of reputation has been put to the side as these platforms were initially conceived to connect you to people you already knew in real life. I believe that the internet needs some concept of reputation to be brought back, and GitHub is a prime candidate for it.

Let’s take Ruby on Rails as an example; the GitHub repo has more than 25,000 pull requests merged in, which came from 5,654 contributors. If you’re one of the core maintainers (s/o to @rafaelfranca!), you need to find a way to prioritize what issues to respond to and which pull requests to review. I think a “rep” system based on your previous activity could help maintainers make these decisions. For example, if you have created dozens and dozens of issues across a lot of projects but no pull requests for any of them, you will likely not open a PR for this one either. If you have a lot of open PRs on other projects that were never merged and you never committed to after the first review, the maintainer should be aware of that as you will likely not follow through on this one either. On the other hand, if you already regularly contribute to other Ruby projects, there’s a good chance you will be able to put together a quality PR without a lot of supervision and just need final maintainer approval to merge it in. If you are new to open source, maintainers will know and give you the necessary help.

GitHub helps with measuring the quantity of work done, but doesn’t say anything about quality. If we flipped this and focused on highlighting quality of work rather than quantity, open source users’ incentives would be more aligned with the maintainers’, which could have a meaningful impact on the overall health of the open source community.

## **\#2: Moving from checklists to automated checks for pull requests**

[Status checks](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks) on GitHub are one of the most useful features to allow projects, open source and not, to maintain consistent code quality and engineering processes. The problem with status checks at the moment is that not all PR requirements get automated. Let’s take a look at [pandas](https://github.com/pandas-dev/pandas); each PR runs a CI environment that performs a test suite, as well as a Codecov check to see whether or not test coverage has dropped. On top of that, the user has to fill out a manual checklist:

* tests added / passed
* passes black pandas
* passes `git diff upstream/master -u -- "*.py" | flake8 --diff`
* whatsnew entry

Whenever a maintainer reviews a PR they either have to manually verify each step, or have faith that the user completed them. Why can’t we automate each of these? At one of my previous roles, we used [Danger](https://danger.systems/) to solve #1: if a new model was added but there were no new files in `spec/models`, it’d warn that tests weren’t added. [DeepSource](http://deepsource.io/), one of our portfolio companies, [has built Transformers](https://deepsource.io/blog/release-transformers/) for open source projects, giving them a way to automatically run code formatters like `black` on each PR. A formatting issue shouldn’t be breaking a CI build or be discussed in a PR, it should just be automatically fixed for you. In the long run, I believe (and hope) we will get to a point where we can automate 90% of the review process before a maintainer steps in and gives the final stamp of approval.

DefinitelyTyped has one of the best infrastructure for this at the moment. You can find an example here: [https://github.com/DefinitelyTyped/DefinitelyTyped/pull/47119](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/47119)

## **\#3: Open source communities transitioning to double opt-in**

Again, I strongly recommend Nadia’s book because she goes in depth around this argument, but ironically one issue with open source communities today is that participation is open to everyone, and GitHub makes it easier than ever to interact with projects. Rich Hickey, creator of [Clojure](http://clojure.org/), wrote an essay titled [“Open Source is Not About You”](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9) in which he highlights some of his issues with the open source community:

> Open source is a licensing and delivery mechanism, period. It means you get the source for software and the right to use and modify it. All social impositions associated with it, including the idea of 'community-driven-development' are part of a recently-invented mythology with little basis in how things actually work, a mythology that embodies, cult-like, both a lack of support for diversity in the ways things can work and a pervasive sense of communal entitlement.

If Rich’s view matched the broader open source community, what would GitHub look like? One example is [Linux’s kernel repo](https://github.com/torvalds/linux), which doesn’t allow users to submit issues, but only pull requests. Discussions are redirected to Linux’s mailing list, just like they were twenty years ago.

This ties back to the open source rep, but how can we allow maintainers to control the amount of access the community has? Is this GitHub’s job, or should there be a separate platform for it? The proliferation of Slack and Discord channels makes this an even more important issue, as those mediums can be even more overwhelming. I don’t have an answer for this question, but I think it’s a problem that will keep growing as commercial open source becomes more popular.

## **The future of open source**

In the early days, open source communities were more of a small group of “misfits” ([as Tristan at dbt likes to call them](https://blog.getdbt.com/four-years-in-from-misfits-to-mainstream/)) working on interesting technical projects, without clear commercialization goals in mind. There usually wasn’t a lot of responsibility on the maintainers to make sure updates didn’t break anything, and the amount of contributions was relatively low. Over the years this has changed, communities have expanded, and open source projects like [OpenSSL](https://github.com/openssl/openssl) have become crucial to our global internet infrastructure, as highlighted by the [Heartbleed](https://heartbleed.com/) bug (and [xckd #2347](https://xkcd.com/2347/), below).

In the 2010s, commercial open source has grown in popularity and we believe it will power more and more of the [“Engineering Value Chain”](https://evcrevolution.com) going forward. The amount of support these projects need at scale is usually very large, but unlike customer success teams for traditional software companies, open source maintainers don’t have the right tools to manage it. If you’re a popular, but not commercial, OSS project, you are in even more trouble. We believe this gap will be filled over the next decade, and we are looking forward to seeing what tools and products can be built to help with that!

*Thanks to Amanda Widjaja, Sarah Catanzaro, and Jai Pradeesh for reviewing early drafts of this!*

