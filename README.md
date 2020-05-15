# Arabic-Roman Calculator

An app to do basic math and convertion between Roman or Arabic numerals. User can also switch between light and dark mode. Reponsive for mobile use.

The app has been deployed. You may see it on my [deployment page](https://shanwong29.github.io/arabic-roman-calc/).

![Arabic-Roman Calculator App demo](/calc_demo.gif)

## What I have achieved...

1. learned more features of **React hooks** -- **custom hook**, **useReducer** and **useContext**;
2. learned **styled-components**;
3. practiced **CSS grid**;
4. impletmenting the **algorithum** of converting Roman and Arabic numerals was fun.

I like using `useReducer`, `useContext`, `custom hooks` and `styled-components` in my React projects. It really helps to organise the project, especially when the business logic gets complicated.

## Run Locally for Development

1. Make sure you have [`Docker`](https://www.docker.com/) and [`Docker Compose`](https://docs.docker.com/compose/) installed.

2. Clone the repository:

```
git clone https://github.com/shanwong29/arabic-roman-calc.git

```

3. Build Docker images and run the Docker containers:

```
cd arabic-roman-calc/
docker-compose up --build
```

The app container can be accessed by [http://localhost:3000](http://localhost:3000).

Every edit in `public/` or `src/` in the local IDE will automatically be reflected in the app running in the container.

## Things I would like to improve...

1. include testing for the app.

## Built with

- React.js
- React Hooks
- styled-components
- JavaScript
- CSS
