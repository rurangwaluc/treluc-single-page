//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiCode,
  FiSearch,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLayout,
  FiTrendingUp,
  FiCloud,
  FiHome,
  FiBook,
} from 'react-icons/fi';

import CV from './assets/CV.pdf';


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
// import Project0 from './assets/img/projects/explore-promo.png';
import Project1 from './assets/img/projects/Flight-Transaction-Confirmation.png';
import Project2 from './assets/img/projects/Jewellery-Promotion.png';
import Project3 from './assets/img/projects/Weekend-Discount-Promotion.png';
import Project4 from './assets/img/projects/Order-Transaction-Notification.png';
import Project5 from './assets/img/projects/webnar-promo.png';
import Project6 from './assets/img/projects/Still-Shopping-Transactional.png';
import Project7 from './assets/img/projects/Subscription-Newsletter.png';
import Project8 from './assets/img/projects/Women-Equality-Day-Newsletter.png';
import Project9 from './assets/img/projects/Trip-Blog-Newsletter.png';
import Project10 from './assets/img/projects/Business-Training-Class-Landingpage.png';
import Project11 from './assets/img/projects/Giveaway-landingpage.png';
import Project12 from './assets/img/projects/Makeup-landingpage.png';
import Project13 from './assets/img/projects/eldorado.png';
import Project14 from './assets/img/projects/imena.png';
import Project15 from './assets/img/projects/Marketing.png'
import Project16 from './assets/img/projects/Honore.png';
// navigation
export const navigation = [
 

  {
    name: 'portfolio',
    href: 'portfolio',
  },
 
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: <a href="https://www.flight-confirm.ga" target="_blank">Flight-Transaction-Confirmation</a>,
    category: 'Email',
    url: "https://www.flight-confirm.ga", 
  },
  {
    id: '2',
    image: Project2,
    name: <a href="https://www.jewellery-promo.ga" target="_blank">Jewellery-Promotion</a>,
    category: 'Portfolio',
    url:"https://www.jewellery-promo.ga",
    description:'Work with a variety of different languages, platforms, frameworks, and content management.'
     
  },
  {
    id: '3',
    image: Project3,
    name: <a href="https://www.weekend-discount.ga" target="_blank">Weekend-Discount-Promotion</a> ,
    category: 'Portfolio',
    url:"https://www.weekend-discount.ga",
  },
  {
    id: '4',
    image: Project4,
    name: <a href="https://www.order-transaction.ga" target="_blank">Order-Transaction-Notification</a>,
    category: 'Portfolio',
    url: "https://www.order-transaction.ga",
  },
  {
    id: '5',
    image: Project5,
    name: <a href="https://www.webinar-promo.ga" target="_blank">Webinar-promo</a> ,
    category: 'Portfolio',
    url:"https://www.webinar-promo.ga",
  },
  {
    id: '6',
    image: Project6,
    name: <a href="https://www.still-shopping.ga" target="_blank">Still-Shopping-Transactional</a> ,
    category: 'Portfolio',
    url: "https://www.still-shopping.ga",
  },
 
  {
    id: '7',
    image: Project7,
    name: <a href="https://www.newsletter-subscription.ga" target="_blank">Subscription-Newsletter</a> ,
    category: 'Portfolio',
    url:"https://www.newsletter-subscription.ga",
  },
  {
    id: '8',
    image: Project8,
    name: <a href="https://www.gender-equality-newsletter.ga" target="_blank">Women-Equality-Day-Newsletter</a>,
    category: 'Portfolio',
    url: "https://www.gender-equality-newsletter.ga",
  },
  {
    id: '9',
    image: Project9,
    name: <a href="https://www.trip-blog-newsletter.ga" target="_blank">Trip-Blog-Newsletter</a> ,
    category: 'Portfolio',
    url: "https://www.trip-blog-newsletter.ga",
  },
 
  {
    id: '10',
    image: Project12,
    name: <a href="https://www.make-up-andingpage.ga" target="_blank">Makeup-landingpage</a>,
    category: 'LandingPage',
    url: "https://www.make-up-andingpage.ga",
  },
  
  {
    id: '11',
    image: Project11,
    name: <a href="https://www.giveaway-landingpage.ga" target="_blank">Giveaway-landingpage</a>,
    category: 'LandingPage',
    url: "https://www.giveaway-landingpage.ga",
  },
  {
    id: '12',
    image: Project10,
    name: <a href="https://www.business-training-landingpage.ga" target="_blank">Business-Training-Landingpage</a>,
    category: 'LandingPage',
    url: "https://www.business-training-landingpage.ga",
  }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Portfolio',
  },
  {
    name: 'LandingPage',
  },

];







// contact
export const contact = [

  {
    icon: <FiMail />,
    title: 'E-mail',
    description: <a href="mailto:trelucdevs@gmail.com" target="_blank">trelucdevs@gmail.com</a>,

  },
  {
    icon: <FiPhone />,
    title: 'Phone',
    description: <a href="tel:+250788959475" target="_blank">+250 7889 59475</a>,
  },
];
