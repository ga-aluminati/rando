# Randomize

[https://randomize.co](https://randomize.co)

The **ultimate** person randomizer. 

This project does not put into practice [TDD](https://en.wikipedia.org/wiki/Test-driven_development), but it does have plenty of **FDD** (Fad Driven Development). Have you ever wondered how many technologies can be successfully squeezed into a single side project? We're about to find out. 

## Core Functionality

* Randomize a single list of users 
* Generate random groups of users 
* Allow users to join and participate effortlessly

## User Stories

> As a **(role)** I want **(something)** so that I can **(benefit)**.

* As an **organizer** I want **to randomize a set of users** so that I can **ensure the order of users is fair**.
* As an **organizer** I want **to match group members randomly** so that I can **ensure everyone at the event has someone to work with**.
* As an **organizer** I want **to allow people to participate without logging in** so that I can **get events going as quickly and effortlessly as possible**.
* As an **organizer** I want **to be able to require a user to log in** so that I can **I can know who they are**.
* As an **organizer** I want **to control how many people are matched in a group** so that I can **I can accomodate any type of activity regardless of size**.
* As an **organizer** I want **to control how many groups are generated** so that I can **control the final number of groups**.
* As an **organizer** I want **to be able to create exclusions to who gets matched** so that I can **ensure people like spouses will be matched with someone different**.
* As an **organizer** I want **to set a deadline** so that I can **let users know how long they have to join the event**.
* As an **organizer** I want **the match to automatically occur when the deadline is reached** so that I can **do other things without waiting**.
* As an **organizer** I want **to prevent duplicate matches** so that I can **ensure users get to work with someone new**.
* As an **organizer** I want **to provide an invite link** so that I can **allow users to view and join the event with one click**.
* As an **organizer** I want **to display a count down** so that I can **display to a large group how much time is remaining until the match occurs**.
* As an **organizer** I want **to display a code on screen** so that I can **allow users to join without a link**.
* As an **organizer** I want **to create private events** so that I can **ensure only users with the link can view and join it**.
* As a **user** I want **to see my match history** so that I can **see who I worked with before**.
* As a **user** I want **to be able to log in with Facebook** so that I can **access my friends**.
* As a **user** I want **to be able to log in with Slack** so that I can **access my groups**.
* As a **user** I want **to be able to participate without logging in** so that I can **try out the service first**.

## Version History

#### v0.1.3

- Set up Auth0 
- Set up Socket.IO 
- Integration with [Randomize API](https://github.com/ga-aluminati/randomize-api)

#### v0.1.2

- Set up Webpack
- Set up Redux
- Set up React Router
- Split static pages into React components

#### v0.1.1

- Write user stories
- Develop wireframes
- Develop site map and flows
- Develop static pages

#### v0.1.0

- Set up domain, host and SSL 
- Set up Git repo
- Initialized Lumen framework
- Set up Blade master layout and views
- Set up support for SASS 
- Set up Gulp tasks to concatenate and minify CSS & JS files
- Set up Elixir for versioning & cache busting static assets
- Set up Git web hooks for deployment to production

## Technologies

* [Lumen PHP Framework](https://lumen.laravel.com/)
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/reactjs/react-router)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.github.io/)
* [Auth0](https://auth0.com/)
* [Socket.IO](http://socket.io/)
* [Vagrant](https://www.vagrantup.com/)
* [Gulp](http://gulpjs.com/)
* [Bootstrap](http://getbootstrap.com/)

## How to Contribute

* Fork this repo and then clone it to your machine
* Follow the [Laravel documentation](https://laravel.com/docs/5.2/homestead) to install Laravel Homestead, which will set up your development environment and dependencies
* [Install Composer](https://getcomposer.org/) to manage dependencies if you don't already have it
* [Configure your environment](https://lumen.laravel.com/docs/5.2/configuration#environment-configuration). Use **.env.example** in the repo to create a new file called **.env** with the environment variables relevant to your dev environment
* Create a new feature branch and do your magic
* Push the branch back to your forked GitHub repo
* Submit a pull request
