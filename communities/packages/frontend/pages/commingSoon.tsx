import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComingSoon = ({ slug }: { slug?: string }) => {
 const calculateTimeLeft = () => {
   const difference = +new Date('2024-12-31') - +new Date();
   let timeLeft: any = {};

   if (difference > 0) {
     timeLeft = {
       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
       minutes: Math.floor((difference / 1000 / 60) % 60),
       seconds: Math.floor((difference / 1000) % 60),
     };
   }

   return timeLeft;
 };

 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

 useEffect(() => {
   const timer = setTimeout(() => {
     setTimeLeft(calculateTimeLeft());
   }, 1000);

   return () => clearTimeout(timer);
 });

 // Transform slug to "SOMETHING 1" if defined, otherwise default to empty string
 const formattedSlug = slug ? slug.replace(/-/g, ' ').toUpperCase() : '';

 return (
   <div className="container">
     <Head>
       <title>Coming Soon</title>
     </Head>
     <div className="content">
       <h1 className="title">Coming Soon</h1>
       <p className="subtitle">This is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
       <div className="timer">
         <div className="timerItem">
           <span className="time">{timeLeft.days}</span>
           <span className="label">Days</span>
         </div>
         <div className="timerItem">
           <span className="time">{timeLeft.hours}</span>
           <span className="label">Hours</span>
         </div>
         <div className="timerItem">
           <span className="time">{timeLeft.minutes}</span>
           <span className="label">Minutes</span>
         </div>
         <div className="timerItem">
           <span className="time">{timeLeft.seconds}</span>
           <span className="label">Seconds</span>
         </div>
       </div>
       <Link href="/">Go Back Home
       </Link>
     </div>

     <style jsx>{`
       .container {
         min-height: 100vh;
         display: flex;
         align-items: center;
         justify-content: center;
         background: repeating-linear-gradient(to bottom, ${formattedSlug}, ${formattedSlug});
         background-size: auto;
         background-repeat: repeat;
         text-align: center;
       }

       .content {
         background-color: rgba(255, 255, 255, 0.8);
         padding: 50px;
         border-radius: 10px;
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
       }

       .title {
         font-size: 3rem;
         margin-bottom: 20px;
       }

       .subtitle {
         font-size: 1.2rem;
         margin-bottom: 40px;
       }

       .timer {
         display: flex;
         justify-content: center;
       }

       .timerItem {
         margin: 0 10px;
         text-align: center;
       }

       .time {
         display: block;
         font-size: 2rem;
         font-weight: bold;
       }

       .label {
         font-size: 1rem;
         color: #555;
       }

       .link {
         display: block;
         margin-top: 20px;
         color: #3182CE;
         text-decoration: underline;
         cursor: pointer;
       }
     `}</style>
   </div>
 );
};

export default ComingSoon;

export const getServerSideProps = async (context: any) => {
 const { slug } = context.query;
 return {
   props: {
     slug: slug ? slug.toString() : '', // Ensure slug is always a string or empty string
   },
 };
};
