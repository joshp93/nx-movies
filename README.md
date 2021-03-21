# nx-movies 🚌
Thanks for taking an interest in my application and thanks for giving me the opportunity to take this test!

## Overview
This project queries the TMDb movies api in order to retrieve information about movies and TV shows. The front end is a website, which queries the back end's API. The back end, in turn, queries the TMDb API, sanitises the data and returns it.
The project includes:
- Ability to search movies \ TV shows by title and display them in a paginated grid view
- Top 10 movies \ TV shows page
- Detailed view for fuller information about 1 movie

When the website is first opended, it is likely that you will see the setup dialog, asking for an API key. You will need to provide your API key for you TMDb account. The API key is required in order to authenticate to the TMDb web service. In case you do not have an API key please contact me and I can assist you.

## Technologies
This repo contains all source code for this project...

##### Front End
I have used Angular for the front end. I used material styling to fasttrack some of the visual elements such as the input boxes, buttons etc.
Other than that, I have written all the code, styling and markup myself (consulting guru Google for advice). I have created a custom Angular theme with my own colours, called grey-pink-theme. I appologise of you think the website has too much pink... But I quite like this style!

I have used SCSS for styling

##### Back End
Java with Spring Framework. I have never written in Java before, so this was a big learning curve for me, I very much enjoyed the challange and I have learnt a lot doing this. I am certain that you will have comments on the quality and cleanness of my code and will welcome any feedback that you have.

## Deployment :shipit:
##### Front End
The Angular application has been deplyed to GitHub Pages: (https://joshp93.github.io/nx-movies/prod), however it still points to localhost for the back end API, so the back end will need to be running on the same machine \ server in order to query data from TMDb

##### Back End
The back end has not been deployed \ hosted. I have never deployed a jar \ war file before. After investigating what was involved and looking at a few free hosting options I decided not to attempt this in the time that was available to me. You will need to download the source code and run the application on your machine. it runs against the default port 8080.

One important thing to note is that the application doesn't use SSL. I did investigate this as an option (successfully updated the application to use https with a self-signed cert.) but found that it is not possible to use a self-signed certificate with GitHub Pages, therefore I had to leave the project as http.

## Coding Standards
##### Angular
- UpperCamelCase for class names
- lowerCamelCase for variable names
- kebab-case for filenames, selectors etc.
- Modules are appended with the word Module and services with the word Service
- I have tried to create the code in a modular way => This helps with readability and also allows for certain elements to be reused. Sections of the template that are requried by multiple components have been factored in a separate component, for example the tile, search and paginator elements.
- I have used folders to group things together, for example components, models, services.
##### SCSS
- I have used the global stylesheet and variables to reduce the impact of changing styles and increase consistency across the site. Only component specific styling has been added at the component level.

##### Java
- UpperCamelCase for class names
- lowerCamelCase for variable names
- I have used the Spring framework methodology for creating request mappings, parameters

I am not entirely happy with the code quality for the Java section of this project. I am eager to learn more about best practices and standards for Java and to improve my knowledge of this area.

## Tools
- I used VSCode for both areas of the project. I am very familiar with this IDE and feel at home using it
- I used the Angular CLI for generating components etc.
- I used start.spring.io to create a new Java Spring project
- I imported Jackson to the Java project to handle the mapping from json to typed objects

## Things I Want to Improve
I have had to make some sacrifices along the way and manage my time when working on this project. There are some areas that I am not happy with and want to improve. Here are some of the things that I wanted to do but didn't
- Deploy the project to a hosted server. This would have been very helpful for you in order to review the results, I am also aware that code deployment is an important part of the job
- Use SSL \ https. Especially if I was to deploy this project, this would be a very important element. The website would be very insecure and compramisable without this.
- Error handling: Especially in then back end, I would ideally have spent more time working on how the API handles errors and returns them. I woudl also like to include a 404 page and display certain errors to the user in a meaningful way in the Angular project
- Testing: I have not written any tests because I did not prioritise this in my working. However I understand the power and importance of Automated testing and would have loved to include proper tests
- Asyncronous web service calls from the back end: I was struggling to understand the syntax for sendAsync from Java HttpClient, so I decided to settle for a syncronous call, but ideally the api should be able to handle multiple requests concurrently.
- Combined search: I would like to introduce the ability to search for both movies and TV and display the results accordingly
- Improve the details view: I am not happy with the details view. I want to improve this


Thanks for taking the time to read!
