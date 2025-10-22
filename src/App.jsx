import React from 'react';
import Card from './assets/components/Card';

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Intern Level",
    pay: "$45/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "6 weeks ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "9 weeks ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Toronto, Canada"
  }
];

  return (
      <div className="parent">
        {jobOpenings.map(function(e,id){
          return <div key={id}>
            <Card logo={e.brandLogo} company={e.companyName} date={e.datePosted} post={e.post} tag1={e.tag1} tag2={e.tag2} pay={e.pay} loc={e.location}/>
        </div>
      })}
          
      </div>
  );
}

export default App;
