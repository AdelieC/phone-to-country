# Description

Had fun making this little project with vue 3 and vite. It was a recrutement test, initially, but somewhere, somehow, I decided to have fun cause I had 24 hours to complete what would probably have taken me 2 hours top. They said to be creative...

--> [:sparkles: View app live!](https://adeliec.github.io/phone-to-country/) <--

# Features

- dynamic routing and nav links
- i18n and select language button
- responsiveness - mostly
- 5 pages :
  ⋅⋅* home
  ⋅⋅* about
  ⋅⋅* one page to select phone area code from a json file in a select field
  ⋅⋅* one page to enter phone area code in a text field and check it using the json file
  ⋅⋅\* one page to check phone number validity with a chosen api and send back phone area code and country data as well as phone number validity.

- dark/light modes with tailwindcss

Note : initially wanted to add tests with vitest but did not take the time. Not very good of me. sorry!

# Local setup

yarn
yarn dev (for development)
yarn built && yarn preview (for previewing prod)

(There is still refactoring left to do, probably better ways to do things. Was a very rapidly built project. Won't have time to come back to it again.)
