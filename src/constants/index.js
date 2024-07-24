import cardImg  from '../assests/cardImg.png';
import cilent1 from '../assests/cilent1.png';
import cilent2 from '../assests/cilent2.png';
import cilent3 from '../assests/cilent3.png';
import Team1 from '../assests/Team1.png';
import Team2 from '../assests/Team2.png';
import Team3 from '../assests/Team3.png';
import Team4 from '../assests/Team4.png';
import Team5 from '../assests/Team5.png';
import Team6 from '../assests/Team6.png';



export const navLinks = [
    {
       id: "home",
       title: "Home",
    },
     {
       id: "attorneys",
       title: "Attorneys",
     },
     {
       id: "practice areas",
       title: "Practice Areas",
     },
     {
       id: "about us",
       title: "About Us",
     },
   ];
   const cards = [
    {
      title: '98% Success Rate',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: cardImg,
      readMoreLink: 'Read More'
    },
    {
      title: '100% Success Rate',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: cardImg,
      readMoreLink: 'Read More'
    },
    {
      title: '100% Success Rate',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: cardImg,
      readMoreLink: 'Read More'
    },
  ];
  const testimonials = [
    {
      title: 'Jane Cooper',
      subTitle : 'Ceo of Hunt',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: cilent1,
    },
    {
      title: 'Devon Lane',
      subTitle : 'Ceo of Hunt',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: cilent2,
      
    },
    {
      title: 'Robert Fox',
      subTitle : 'Ceo of Hunt',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: cilent3,
      
    },
    // {
    //   title: 'Jane Cooper',
    //   subTitle : 'Ceo of Hunt',
    //   description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    //   image: cilent1,
    // },
    // {
    //   title: 'Devon Lane',
    //   subTitle : 'Ceo of Hunt',
    //   description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    //   image: cilent2,
      
    // },
    // {
    //   title: 'Robert Fox',
    //   subTitle : 'Ceo of Hunt',
    //   description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    //   image: cilent3,
      
    // },
  ];

  const team = [
    { 
      image : Team1,
      name: 'Danial Def',
      cases: '301 cases',
    },
    {
      image : Team2,
      name: 'Sanfole',
      cases: '850 cases',
    },
    {
      image : Team3,
      name: 'Cesforila',
      cases: '470 cases',
    },
    {
      image : Team4,
      name: 'Colleen',
      cases: '180 cases',
    },
    {
      image : Team5,
      name: 'Haldon',
      cases: '212 cases',
    },
    {
      image : Team6,
      name: 'Nik Jeo',
      cases: '350 cases',
    },
  ]

  export { cards, testimonials ,team };