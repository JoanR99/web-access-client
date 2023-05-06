# WebAccess Frontend

WebAccess is a webapp with two tools to help web developers create more accessible content. The first tool is an automatic web accessibility evaluator, which allows the evaluation of HTML code by inserting the URL of a web page or the HTML code itself, applying up to 11 techniques proposed by the WCAG in its version 2.1. On the other hand, the second tool is a contrast evaluator, which allows knowing if the contrast ratio between two colors (text and background) meets any of the levels established by the WCAG.

&nbsp;

## Links

- [Repo](https://github.com/JoanR99/web-access-client 'WebAccess Frontend repo')
- [Backend](https://github.com/JoanR99/web-access-server-fastapi 'WebAccess Backend repo')
- [Live Demo](https://web-access-client-svelte.vercel.app/ 'Live View')

&nbsp;

## Screenshots

![Home Page](/screenshots/web-access.png 'Home Page')

![Evaluation Page](/screenshots/wa-3.png 'Evaluation Page')

![Results Page](/screenshots/wa-4.png 'Results Page')

![Contrast Page](/screenshots/wa-5.png 'Contrast Page')

&nbsp;

## Stack

![Vite] ![Javascript] ![React] ![Sass]

This repository contains the frontend of WebAccess, developed with Javascript, React and Sass. For state management i use Jotai and hooks.

&nbsp;

## How to install and run

### Prerequisites

1. You need to have Node.js installed in your machine

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/JoanR99/web-access-client.git
   ```

2. Go to file

   ```sh
   cd web-access-client
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start server

   ```sh
   npm run dev
   ```

5. You need to setup the backend to use the accessibility evaluation tool. Follow the instructions on the [Backend Repo](https://github.com/JoanR99/web-access-server-fastapi 'WebAccess Backend repo')

   &nbsp;

## Author

**Joan Romero**

- [Profile](https://github.com/JoanR99 'Github Joan Romero')
- [Email](mailto:romerojoan1999@gmail.com?subject=Hi 'Hi!')
- [Linkedin](https://www.linkedin.com/in/joanr99/ 'Linkedin Joan Romero')
- [Portfolio](https://portfolio-joan-romero.vercel.app/ 'Portfolio Joan Romero')

[vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[react]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[sass]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
