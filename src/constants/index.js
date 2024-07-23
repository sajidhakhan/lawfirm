import  cardImg  from '../assests/cardImg.png';
import cilent1 from '../assests/cilent1.png';
import cilent2 from '../assests/cilent2.png';
import cilent3 from '../assests/cilent3.png';



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
  ];

  export { cards, testimonials };