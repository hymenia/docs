# Contributing

Thank you for your interest in contributing to the documentation for Hymenia.

Contributions are welcome, and you do not need to be experienced in any aspect of documentation - just make sure you get the info right.

## Before contributing

If you have found a problem and want to fix it, check if there's not already a pull request or issue.
If there's already a pull request, consider suggesting additions. If there's an issue, consider linking back to it in your PR.

For larger changes, such as ones that modify more than 100 lines, or more than 5 pages, please open an issue first to discuss this change.

Small corrections, such as fixing typos or broken links, will usually be accepted without this process.

## Writing documentation

The main goal of Hymenia's documentation is to be easy to read and help developers.
As such, it should be helpful, accurate, but not too complicated and shouldn't use too much technical jargon.

Here's some guidelines to follow:
- Be clear, and prefer simple / direct language over complicated wording.
- Be brief, don't write long winded explanations.
- Be accurate, check your work against code or public instances.
- Be impartial, don't provide opinions, only provide facts.
- Consider the reader, don't assume the reader understands a topic or knows where to find select information.
- Stay relevant, include helpful information relative to the topic you are writing on, but do not stray too far from the original topic.

You don't need to write perfect sentences in a PR, as PRs will be reviewed. Open-source software is a great place to practice skills, get
suggestions and improvements from others working on the same project.

### Formatting

We use Starlight for our documentation, which provides some extra features on top of using Markdown.

Make sure, when writing Markdown:

- Use headings to separate content into sections
- - Don't use headings smaller than h3 (`###`)
- Mask links with descriptive link text.
- - As such: [the source code for Hymenia's documentation](https://github.com/hymenia/docs)
- Use code formatting (\` \`) for filenames, commands, and other appropriate places.
- - Use codeblock formatting (\`\`\` \`\`\`) for longer examples. Ideally, also tag the codeblock with the language (\`\`\`js [some js code]\`\`\`)
- Add alt text to **all images**, keep it accessible.

Starlight also supports some extra features. Mainly, you should be using Asides, which you can find info about on [Starlight's documentation](https://github.com/withastro/starlight/blob/main/docs/src/content/docs/guides/authoring-content.mdx#asides).

## Committing

When committing to this repo, please use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
If you'd like more info, please read that page. Otherwise, here's a quick rundown:

Here's a template:
`type(scope): description`

The `type` segment is commonly one of the following, though it can be others:

|Type|When to use|
|----|-----------|
|feat|Adding a new feature (in this project's case, new page, detail, etc).|
|fix|Corrects a problem, such as a typo.|
|style|A change that edits formatting, not meaning.|
|chore|Maintenance that commonly does not fit other types.|

The `scope` segment is optional, but keep in mind that a scope can add useful context, which can help with viewing the commits at a glance.
The `description` segment should be a short summary of the change.

For example: 

`fix(intro page): broken links due to domain move`

`feat: add page on /api/version endpoint`

`chore(files): reorganize to fit new starlight version`

## Submitting

When your changes are all done:

1. Review your changes, and make sure they follow the guidelines above.
2. Check that everything works as it should, including links and images.
3. Open a pull request in this repository describing what changed, and why it changed.
4. Link related issues (if neeed).
5. If any AI model was used **at any state in the development of said PR**, please note this in the PR.

A good description should summarise the changes and tell reviewers what they should pay attention to.

## Reviewing

Once your PR has been submitted, it will be reviewed before finally being merged.

Reviewers will commonly request changes be made to fit this document.
Treat review feedback as a collaborative process, explain your reasoning, ask questions, and be kind.

Submitting a contribution **does not** guarantee that it will be accepted - changes may be declined if they do not fit these guidelines,
are inaccurate, or unnecessary. 

Contributors and reviewers should treat eachother with respect. Please criticize the proposals, not the person making them.

# Thanks!

Thanks for taking the time to read this CONTRIBUTING.md. Now go out there and make some cool stuff!
