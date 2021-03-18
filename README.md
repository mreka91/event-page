# Svanfeldts Coffee event

<img src="https://media.giphy.com/media/ge2ckPYYtHJX5mdgiY/giphy.gif" width="100%">

## Assignment

This is a school assignment in which the programs Web Developer and IP Graphical Production & Form at Yrgo are collaborating.
Our mission is to create an event invitation in both physical and digital form for a real company.

We decided to create a fictional event for :coffee: Svanfeldts Coffee :coffee: to introduce their newest Påskrost coffee.

- [Preview](https://event-page-three.vercel.app/)
- [Personified preview](https://event-page-three.vercel.app/?firstname=Sarah&lastname=Malm)

<details><summary><strong>Project requirements:</strong></b></summary>

- A unique <strong><ins>landing page</ins></strong> that follows the same graphic manner of the chosen company.
- The website needs to be responsive and built mobile-first and follow the accessibility standard WCAG (https://a11yproject.com/checklist/).
- It must contain at least five animations, one of which is an in-animation when the page is first displayed.
- It should have a CTA where visitors can sign up via a form to the event. This form only needs to be shown visually.
- The landing page should be personalized via a link that can be sent out with query parameters. Suggestions for at least two ways to personify the site via the link such as name, country, pictures, occupational group, etc.
- The website should be built statically through HTML, CSS, and JavaScript.
- From day one, the website should be pushed up to a public repository on GitHub.
- The website should upload to a hosting service such as. Netlify, Vercel or GitHub Pages.
- The website should be optimized and have as high a score as possible on https://web.dev/ (optimize images, CSS and JS, tips are to use construction tools such as Parcel).
- Each group must submit a review of another group the day before the presentation. Code reviews must be submitted with a pull request.

</details>

## Code Review

- Everything looks very cozy and modern! (I want a coffee now ☕️).
- I would suggest removing all code that is commented out and no longer in use.
- Maybe add a width of `100vw` to the `hero-img` div at smaller sizes to match the style further down.
- The `right-pic` gets distorted at semi-small sizes (probably due to `media.css:67` being set to a percent value instead of cover)
- This might not be true for long, but serving alternative formats to webp-images for the browsers not supporting it (looking at you old-ish-safari).
- One addition to the personified-part might be to write a function that capitalises the names from the query-parameter (or use `text-transform`), just in case!
- Otherwise a clean, elegant and simple site that does the job nicely in my opinion ✊🏻

## Creators

- [Reka Madarasz](https://github.com/mreka91) (WU)
- [Sarah Malm](https://www.sarahmalm.com/) (IP)

## License

This project is licensed under the MIT License - see the **[LICENSE](https://github.com/mreka91/event-page/blob/main/LICENSE)** here.
