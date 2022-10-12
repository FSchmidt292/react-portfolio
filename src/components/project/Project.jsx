import React from 'react'
import './project.css'

import { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            title: 'Budget Tracker',
            category: 'Full Stack',
            description: 'Uses Mongodb and Mongoose and is an example of a pwa. The downloader can run online or offline and enter in funds or subtract funds, the app sends values if online once a connection is made.',
            photo: 'budget.png',
            repo: 'https://github.com/FSchmidt292/budget-tracker',
            liveLink: 'https://marvelous-badlands-10557.herokuapp.com/',
        },
        {
            title: 'Sound Wavez',
            category: 'Front End API Showcase',
            description: 'Front end javascript with API calls, showcasing API connection and calls to bring a randomly generated image based on the genre of an artist you are searching for.',
            photo: 'Soundwavez.png',
            repo: 'https://github.com/FSchmidt292/project-one',
            liveLink: 'https://fschmidt292.github.io/project-one/',
        },
        {
            title: 'Made to Make',
            category: 'full stack; sql backend; JS with Handlebars',
            description: 'a full stack app that allows you to sign in and edit/create menus for a restaurant',
            photo: 'make.png',
            repo: 'https://github.com/nbross/Project-2-Full-Stack-App',
            liveLink: 'https://hidden-mesa-12283.herokuapp.com/',
        },
        {
          title: 'goose.net',
          category: 'full stack; sql backend; JS, React',
          description: 'a full stack app that allows Goose fans to create blog posts/events to track their live shows!',
          photo: 'goose.png',
          repo: 'https://github.com/FSchmidt292/goose.net',
          liveLink: 'https://morning-bayou-26643.herokuapp.com/',
      },
    ]);
  
    
      return (
        <div className='projectCard'>
          {projects.map((project)=>(
            <>
            <h2>{project.title}</h2>
            <div className="projectImg">
              <img className="sneakPeak" src={require(`../../assets/${project.photo}`)} alt='a quck glance at the deployed application' onClick  />
            </div>
            <div className='links'>
              <a href={ project.repo }>Repo for this project</a>
              <a href={ project.liveLink }>Live Link for this project</a>
            </div>
              <p> {project.description} </p>
            </>
          ))}
        </div>
      )};

export default Project;