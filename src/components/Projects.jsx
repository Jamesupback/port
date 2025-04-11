import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all your project images
import servicescape from '../images/servicescape.png';
import rscraper from '../images/rscraper.png';
import typing from '../images/typing.png';
import pomodoro from '../images/pomodoro.png';
import jokes from '../images/jokes.png';
import drum from '../images/drum.png';
import markdown from '../images/markdown.png';
import calculator from '../images/calculator.png';
import chloropleth from '../images/chloropleth.png';
import heatmap from '../images/heatmap.png';
import scatter from '../images/scatter.png';
import barchart from '../images/barchart.png';
import treemap from '../images/treemap.png';
import product from '../images/product.png';
import url from '../images/url.png';
import sudoku from '../images/sudoku.png';
import issue from '../images/issue.png';
import library from '../images/library.png';
import assetdaddy from '../images/assetsdady.png';
import solar from '../images/solar.png';
import medinsight from '../images/medinsight.png';
// Project data array
const projectsData = [
  {
    id:0,
    title:'Medinsight:AI supported Medical report analyzer',
    image:medinsight,
    description: "Medinsight is a web application that uses AI to analyze medical reports and provide insights to the user.",
    link:'https://medinsight-pro.vercel.app',
  },
  {
    id:0,
    title:'VJCET Solar Output Prediction System',
    image:solar,
    description: "This is a solar output prediction system that uses machine learning to predict the solar output of VJCET college.",
    link:'https://github.com/jamesupback/solar',  
  },
  {
    id: 0,
    title:'AssetsDaddy: Asset management system',
    image: assetdaddy,
    description: "Runner up of hexcode 2025 hackathon.",
    link:'https://vercel.com/dashboard'
  },
  {
    id: 1,
    title: "Full stack home service application",
    image: servicescape,
    description: "Build with node, express, html, css, ejs and mongodb allows user to book various home services and connect workers to users",
    link: "https://servicescape.onrender.com"
  },
  {
    id: 2,
    title: "Reddit image scraper",
    image: rscraper,
    description: "rscraper is a tool that uses reddit api to scrape reddit and give image results of a the user specified subreddit.",
    link: "https://rscraper.onrender.com"
  },
  {
    id: 3,
    title: "Typing speed tester",
    image: typing,
    description: "Typing blitz is a typing speed tester that uses different algorithms to compute wpm, cpm & no of mistakes of the user",
    link: "https://jamesupback.github.io/typer"
  },
  {
    id: 4,
    title: "URL shortner API",
    image: url,
    description: "URL shortner API uses express and mongodb as backend to store various urls and provides with a short url JSON object in return",
    link: "https://url-shortnerfcc.onrender.com/"
  },
  {
    id: 5,
    title: "Sudoku solver",
    image: sudoku,
    description: "Sudoku solver uses backtracking algorithm to find out the solution. It takes in an array of integers as input and returns a visual representation",
    link: "https://sudoku-m45w.onrender.com/"
  },
  {
    id: 6,
    title: "Issue tracker backend API",
    image: issue,
    description: "Issue tracker is a backend API service that allows to open, resolve and close issues. It tracks details about the issue.",
    link: "https://issue-tracker-nva8.onrender.com/"
  },
  {
    id: 7,
    title: "Library app backend API",
    image: library,
    description: "This personal library API allows to track and submit books as well as keep information about the book that was submitted",
    link: "https://library-ynii.onrender.com/"
  },
  {
    id: 8,
    title: "Pomodoro timer",
    image: pomodoro,
    description: "The pomodoro timer is a productivity tool that is build with react which allows user to set the session and break lengths to be productive",
    link: "https://jamesupback.github.io/pomodoro"
  },
  {
    id: 9,
    title: "Random joke generator",
    image: jokes,
    description: "Random joke generator uses vanila javascript, html and css to fetch through an api and return a random joke.",
    link: "https://jamesupback.github.io/jokes"
  },
  {
    id: 10,
    title: "Drum machine",
    image: drum,
    description: "Drum machine is a fun project that outputs various drum sounds on various key presses. It can produce 9 types of drum snares",
    link: "https://jamesupback.github.io/drum-machine"
  },
  {
    id: 11,
    title: "Markdown previewer",
    image: markdown,
    description: "Markdown previewer produces a realtime update on how a markdown script looks like. It translates markdown into plain text",
    link: "https://jamesupback.github.io/markdown"
  },
  {
    id: 12,
    title: "Calculator",
    image: calculator,
    description: "This is a calculator app made completely with react. It can do basic arithemetic functions and comes with a responsive and elegant design",
    link: "https://jamesupback.github.io/calculator"
  },
  {
    id: 13,
    title: "Data visualization-chloropleth",
    image: chloropleth,
    description: "A choropleth map is a thematic map that is used to represent statistical data using the color mapping symbology technique. D3 js is used for the same",
    link: "https://jamesupback.github.io/chloropleth"
  },
  {
    id: 14,
    title: "Data visualization-heatmap",
    image: heatmap,
    description: "A heatmap (or heat map) is a graphical representation of data where values are depicted by color. D3 js is used for the visual representation",
    link: "https://jamesupback.github.io/heatmap"
  },
  {
    id: 15,
    title: "Data visualization-scatterplot",
    image: scatter,
    description: "A scatter plot (aka scatter chart, scatter graph) uses dots to represent values for two different numeric variables. D3 js is used for the visual representation",
    link: "https://jamesupback.github.io/scatterplot"
  },
  {
    id: 16,
    title: "Data visualization-barchart",
    image: barchart,
    description: "This is a simple representation of a barchart with the help of D3 js which is used for data visualization. The data sample is of the U.S gdp over the past decades",
    link: "https://jamesupback.github.io/barchart"
  },
  {
    id: 17,
    title: "Data visualization-treemap",
    image: treemap,
    description: "The treemap functions as a visualization composed of nested rectangles. These rectangles represent certain categories within a selected dimension.",
    link: "your_project_link"
  },
  {
    id: 18,
    title: "Product landing page",
    image: product,
    description: "This is a product landing page demo which makes uses of flexbox and grid fundamentals to provide a responsive and elegant web design",
    link: "https://jamesupback.github.io/product-launch"
  }
];

function Projects() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    // Single div to control theme - change data-theme to any DaisyUI theme
    <section id="projects" data-theme="sunset" className="transition-colors duration-300">
      {/* Header */}
      <div className="py-16 bg-base-200" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="divider max-w-xs mx-auto"></div>
      </div>

      {/* Project Cards Grid */}
      <div className="bg-base-100 px-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
                  data-aos="zoom-in-up"
                  data-aos-offset="100"
                  data-aos-delay={index * 150}
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
            >
              <div className="card bg-base-200 shadow-xl h-full overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <figure className="relative overflow-hidden min-h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="text-sm text-base-content text-opacity-80">{project.description}</p>
                  <div className="card-actions justify-center mt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary w-full"
                    >
                      Check it out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;