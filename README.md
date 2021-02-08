# Weedmaps Frontend Code Challenge

###### Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Challenge details](#challenge-details)
  - [Routing](#routing)
  - [Star rating](#star-rating)
  - [Retailer hours](#retailer-hours)
  - [Retailer page](#retailer-page)
- [Delivering your challenge](#delivering-your-completed-challenge)

## Prerequisites

- **You'll need Node `>= 12` installed.** We recommend leveraging
  [nvm](https://github.com/creationix/nvm) to switch Node versions between projects.
- Install [yarn](https://yarnpkg.com/en/docs/install) if you don't already have it.

## Installation

- Ensure you're running a modern version of NodeJS as mentioned above
- From this project root, run `$ yarn install`
- To start the development server, run `$ yarn start`
- Your browser should automatically open at `http://localhost:3000` and will reload on subsequent file changes

#### Available Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `yarn start`    | Starts the development server              |
| `yarn test`     | Starts the test runner                     |
| `yarn tsc`      | Compiles Typescipt, checks for type errors |
| `yarn lint`     | Lints your code                            |
| `yarn lint-fix` | Attempts to fix lint errors                |
| `yarn prettier` | Makes your code prettier                   |

## Challenge Details

The goal of this code challenge is to help us better understand some of your capabilities as a software engineer. We also want to share with you some of the technologies and best practices we use to build software on our teams.

This challenge is a partially completed project which is described in more detail below. We encourage you to complete as much of this as you're comfortable with, as we recognize your time is valuable. We're interested in how you solve problems and make decisions when working within constraints. For any area that you aren't able to complete, feel free to include a short blurb about how you would approach the problem and why.

### Routing

Implement the router and links between various components. More detail is available in the component definitions.

- `src/index.tsx`
- `src/components/header/index.tsx`
- `src/components/listing-card/index.tsx`
- `src/templates/default/index.tsx`
- `src/pages/retailer.tsx`

### Star rating

Using the provided component, `/src/components/star/index.tsx`, implement the remaining user interface for star ratings as described in the component definition.

### Retailer hours

Using the provided component, `src/components/hours/index.tsx`, render the retailer hours for each day of the week.

### Retailer page

We encourage you to have fun with the ui styling here. With a focus on mobile devices, finish styling the retailer page, `/src/pages/retailer.tsx`. Use modern CSS and responsive techniques to style the information you would like to see rendered. At a minimum, this should inlude the retailer's name, star rating, and business hours.

## Delivering Your Completed Challenge

- Please do NOT include any `.git` history or `/node_modules` directories
- Zip your completed work and submit it through the URL provided near the bottom of the original code challenge email

## Elush Notes

Hello! My name is Elush and I have provided some explanations throughout the code as well as below. Please feel free to email or call me if you have any questions.

### PART 1

I added the routing as asked. The only acceptable routes are `/` and `/(dispensaries|deliveries|doctors)/:wmid`. I did this with the use of a `routes` array so that future routes can be as easy as adding it to the array. Outside of the array, but still inside the react-router-dom `Switch` is a default redirect. If the user was to put a messy url that was not included, the web app would recover and go to the safety of the Home page.

### PART 2

I added a for loop for the Stars, details can be found in `...stars/index.tsx`. I tried doing this in an efficient manner with a for loop that adds the number of full, half, or empty stars as it iterates.

### PART 3

I provide the hours of each business with the use of a `table`. I found this to be the cleanest approach so that the days and times are lined up with one another. I check for all conditions with `is_closed`, `is_allday`, and `open`/`close`. I tried checking the retailers in Los Angeles and San Diego.

### PART 4

To make the web app responsive and mobile friendly, I used the CSS tools of `flex` and `@media`. Flex handles a lot of the spacing and layout concerns between elements, that is naturally responsive. When that can't always be accomplished, I tried to push CSS `media` rules at `768px` so that the contents of the page do not get too "squished" together. You can find the responsive design in the `retailer.tsx` and `listing-card` complete with overflow protections, and responsive flex and style changes. To test out, I used the device toolbar inside of Chrome Dev Tools to switch between iPhone 5, iPhone X, and iPad, as well as play with the responsive dimensions.

### New Experiences

This was my first time using `styled-components` and it was honestly really fun. I can see the appeal. I did use it in a basic way where I feel there is so much more under the hood to take full advantage. The reason for this is that given the time limit on this take home, I did not want to misunderstand some feature and misuse it. Therefore, I mostly tried to "stay in my lane" when working with the styled components. I look forward to digging more on it though.
I was looking for a reason to use React Context and happy to finally have gotten that chance. I could have chosen the prop-drilling path which would have been acceptable in this example; however, I chose to treat this as a real situation and tried to prevent component coupling with `useContext`.

### Extras

- I added a few utils complete with testing and TSDoc. The idea is that if other devs wanted to use them in a project, they would be there and it follows the DRY principle. I know it's a bit overkill because this is a test project and there are no other devs, but that is how I would approach the problem in a real situation.
- I added a footer just for aesthetics.
- I tried to add some TS robustness by defining certain types that were `any` or `{}`
- I added a `Best of Weedmaps` tag in the `listing-card` because I think the user would appreciate that kind of "stamp of approval"
- I added the favicon of the Weedmaps logo
- Some CSS styles were inspired by the real `weedmaps.com`. I hope this was okay, but I thought it's the best source for what the team at Weedmaps would like to see.
- I brought in 2 packages of `react-icons` and `typed-usa-states`. `react-icons` which provided me with some icons throughout the webapp. (Sorry if some are really lame. The closest icon they had to a marijuana plant was a vanilla flower :-)). `typed-usa-states` allowed me to translate state names to abbreviations for the listing card instead of having to define all the states and abbreviations myself.

## Final Thoughts

This was a fun project to work on, and I hope you enjoy :-)
