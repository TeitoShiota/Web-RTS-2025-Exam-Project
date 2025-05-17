# Exam WU11 - Trainer App - Project Documentation
Lasse Karahan Kristiansen - WU11

## Table of Contents
- [Exam WU11 - Trainer App - Project Documentation](#exam-wu11---trainer-app---project-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Site URL](#site-url)
    - [Users](#users)
  - [Project Description](#project-description)
  - [Project stack](#project-stack)
    - [**Next.js**](#nextjs)
    - [**Typescript**](#typescript)
    - [**SCSS (SASS)**](#scss-sass)
    - [**React Icons**](#react-icons)
    - [**ZOD**](#zod)
    - [API - trainer-api](#api---trainer-api)
  - [Code Snippet](#code-snippet)
  - [References](#references)

## Introduction

This is the project documentation for the Trainer App. The Trainer App is my final project for the WU11 exam.

The app is built using Next.js, TypeScript, SCSS, React Icons, and Zod. The app also uses an [API](#api---trainer-api) to store and retrieve data.

### Site URL

- [Trainer App](https://wu-11-lasse-k-k-trainer-app.onrender.com) - Trainer App
- [Trainer API](https://wu-11-lasse-k-k-trainer-api.onrender.com) - Trainer API

( **Note:** The App is hosted on Render and takes about 30-50 seconds to spin up the first time you visit the site. Combined with the fact that the API is also hosted on the free tier; it will take about 2 minutes from first request to the App, before the API is also started and everything is up and running. )

### Users

| username | password |
| --- | --- |
| user1 | 1234 |
| user2 | 1234 |
| user3 | 1234 |
| user4 | 1234 |


## Project Description

The project - Trainer App - revolves around a fictional fitness chain called Fitness Verden. The app is a web based application that allows users to find and sign up for fitness classes. Data is stored and retrieved from the provided [**API**](#api---trainer-api).

[**Assignment**](./Opgavebeskrivelse.pdf)

```plaintext
Introduktion 
  Fitness Verden er en lille kæde af fitnesscentre, som er i gang med en større ekspansion. 

  Firmaet vil gerne tilbyde deres kunder en digital oplevelse, som skal hjælpe med at få flere 
  tilmeldinger til deres fitnesshold. 

  Fitness Verden har bestilt en mobil web-app, hvor det er muligt for brugere at finde og tilmelde sig 
  til forskellige hold, der afvikles i fitnesscentrene. 

  Du skal lave hovedopgaven, samt mindst én af de valgfrie opgaver. 

Hovedopgaven 
  Du skal lave en web-applikation. Applikationen skal kodes som en front-end løsning, dvs. ved hjælp at 
  HTML, CSS og JavaScript. Du må gerne bruge hjælpemidler, biblioteker og frameworks. 

  Hovedopgaven består af følgende: 
    • En velkomstskærm 
    • En oversigt over hvilke hold, der tilbydes 
    • En søgefunktion 
    • En side med detaljer for de enkelte hold 
    • En ”Kalender” for brugeren 
    • En log-ind formular 
```

## Project stack

My stack has been chosen to provide a solid foundation for the project. It is easy to use and provides high-levels of flexibility and scalability. The stack is also well-supported by the community and has a solid backing from large companies, which means that I can find a lot of resources and plugins to help with development.

Other then the afore mention reasons for choosing the stack; I also have experience with the stack and have used it in previous projects.

### [**Next.js**](https://nextjs.org/)

Why Next.js?

- I have chosen Next.js for it's ability to handle: server-side rendering and static site generation; API routes; and file-based routing. This is useful for SEO and performance optimization.
- Next.js is a popular framework for building React applications that provides a lot of features out of the box. It is designed to be fast and easy to use, with a focus on developer experience.
- Next.js also has a large community build around it; which provides a plethora of resources and plugins to help with development.

**Alternatives**

- [SvelteKit](https://github.com/sveltejs/kit) - SvelteKit is a new framework for building web applications with Svelte. It is designed to be fast and easy to use, with a focus on developer experience. SvelteKit is a good alternative to Next.js if you prefer Svelte over React.

---

### [**Typescript**](https://www.typescriptlang.org/)

Why TypeScript?

- I have choosen TypeScript for it's ability to add static typing to JavaScript. This can help catch bugs early and make the code more readable and maintainable.
- It is a great asset for larger projects where the codebase can become hard to manage. It can also help with refactoring and code reusability.
- It is also well-supported by the community, which means that I can find a lot of resources; to help with development.

**Alternatives**

- [Flow](https://flow.org/) - Flow is a static type checker for JavaScript. It is similar to TypeScript but has a different syntax and feature set. Flow is a good alternative to TypeScript if you prefer its syntax and features.

---

### [**SCSS (SASS)**](https://sass-lang.com/)

Why SCSS?

- I have chosen SCSS for it's ability to add features like variables, nesting, and mixins to CSS. This can make the code more readable and maintainable.
- It is especially useful in larger projects where the CSS can become hard to manage.

**Alternatives**

- [Less](https://lesscss.org/) - Less is another preprocessor for CSS that is similar to SCSS. It has a different syntax and feature set but serves the same purpose. Less is a good alternative to SCSS if you prefer its syntax and features.

---

### [**React Icons**](https://react-icons.github.io/react-icons/)

Why React Icons?

- I have chosen React Icons for it's ability to add icons to React components easily.
- It is easy to use and supports a wide range of icon packs.
- It is especially useful when you need to add icons to your components without having to download and manage the icon files yourself.

**Alternatives**

- [Font Awesome](https://fontawesome.com/) - Font Awesome is another popular icon pack that provides a wide range of icons for web applications.
- [Material Icons](https://material.io/resources/icons/) - Material Icons is an icon pack from Google that provides a wide range of icons for web applications.

---

### [**ZOD**]([https://](https://zod.dev/))

Why ZOD?

- I have chosen Zod for it's TypeScript-first approach.
- It is designed to be easy to use and type-safe.
- Zod allows you to define schemas for your data and validate it against those schemas. This can help catch bugs early and ensure that your data is always in the correct format.
- It is also well-supported by the community, which means that I can find a lot of resources to help with development.

**Alternatives**

- [Joi](https://joi.dev/) - Joi is another popular schema declaration and validation library for JavaScript. It is similar to Zod but has a different syntax and feature set.

---

### API - trainer-api

API Provided for the project. The API is used to store and retrieve data for the Trainer App.

[Trainer App API](https://github.com/rts-cmk-opgaver/trainer-api)

---

## Code Snippet

In the below example I am defining a type for the [**TrainerApiClassObject**](../src/types/TrainerApi/Objects/TrainerApiClassObject.d.ts). The type is based on the data that is returned from the API.

1. First I define a type for the Weekdays. This is a **union type** of the weekdays that the classes are held on.

2. Then the union type is mutated using **intrinsic string manipulation** types to create a new union type with the first letter capitalized and lowercase. This is to ensure that the API returns the correct format of the weekdays and handle minor typos.

3. Here I reference the TrainerApiTrainerObject type id using **indexed access type**; hereby extracting the type of the specified property. This is to ensure that the trainerId is always of the correct type and ensure that the data is consistent.
This is important for the future scalability of the app. Allowing for the **id** type to be changed or updated without breaking the app.

4. Finally, I define the users property as optional and make the type an **array of objects** of the type **TrainerApiUser**.

```ts
// Note - 1. Weekdays union type 
type Weekdays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

type TrainerApiClassObject = {
    id: number | string;
    className: string;
    classDescription: string;
    classDay: // Note - 2. Intrinsic string manipulation types
        Capitalize<Weekdays> | 
        Lowercase<Weekdays>;
    ... // Omitted for conciseness
    trainerId: TrainerApiTrainerObject['id']; // Note - 3. Reference to TrainerApiTrainerObject id's type
    assetId: TrainerApiAssetObject['id'];
    trainer: TrainerApiTrainerObject;
    asset: TrainerApiAssetObject;
    // Note - 4. Optional properties
    users?: TrainerApiUser[];
}
```

---

## References

- Frontend framework -  [Next.js](https://nextjs.org/)
- Language - [Typescript](https://www.typescriptlang.org/)
- CSS preprocessor - [SCSS (SASS)](https://sass-lang.com/)
- Icons - [React Icons](https://react-icons.github.io/react-icons/)
- Validation - [ZOD](https://zod.dev/)
- API - [Trainer API](https://github.com/rts-cmk-opgaver/trainer-api)
- Hosting - [Render](https://render.com/)
