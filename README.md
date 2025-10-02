# 🧙 Grimoire – A magical grimoire of developer knowledge.

Live Demo: https://pd-grimoire.netlify.app

**Grimoire** is a lightweight Angular 20 application for learning new developer tools and storing all of my knowledge. It uses modern Angular features and applies best practises in architecture, Angular Material, and performance.

App generated with:
> ng new grimoire --defaults --style=scss --standalone --routing --inline-template --inline-style

## 🚀 Features

- 📈 Character development calculators
- 🧠 Clean reactive store using Angular 20 signals & `httpResource`
- 🧮 Ability to search informations on talents, skills, effects etc.
- 📦 Lazy loaded components, to make UI load faster
- 💅 Styling based on Angular Material custom theme

## 🛠️ Tech Stack

- **Angular 20 Zoneless**
- **Custom components and styling**
- **RxJS Signals & Computed Store**
- **httpResource** for declarative HTTP
- **Type-safe architecture with interfaces**

## 🧪 Unit Testing

Since Angular 20 new default testing is now being done using Jest/Web Runner and the current documentation is lacking information about zoneless testing I've decided to go without testing as of now. (I'm going to come back to this when there will be a clear, supported by Angular way for testing zoneless apps with Karma decomissioned)

## 🧑‍💻 Getting Started

Install dependencies:
> npm install

Run project:
> npm start
