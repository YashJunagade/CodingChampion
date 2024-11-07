import React from 'react'
import { Link } from 'react-router-dom'
import Track from './components/Track'
import SideBar from '../../Components/SideBar/SideBar'
import { Helmet } from 'react-helmet'

const Roadmaps = () => {
  const webDevTracks = [
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730286622/frontend_mle4if.jpg',
      trackTitle: 'Frontend',
      pageRoute: '/roadmaps/frontend',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730286622/backend_othlwi.jpg',
      trackTitle: 'Backend',
      pageRoute: '/roadmaps/backend',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730286622/fullstack_irdxnw.jpg',
      trackTitle: 'Fullstack',
      pageRoute: '/roadmaps/fullstack',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730286622/devops_tyvpqs.jpg',
      trackTitle: 'DevOps',
      pageRoute: '/UnderContruction',
    },
  ]

  const aiTracks = [
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730286622/Datascience_atvozk.jpg',
      trackTitle: 'Data Science',
      pageRoute: '/UnderContruction',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730286622/machinelearning_c9i646.jpg',
      trackTitle: 'Machine Learning',
      pageRoute: '/UnderContruction',
    },
  ]

  const TrackSection = ({ title, tracks }) => (
    <section className="mb-16">
      <h2 className="dark:text-white text-2xl font-bold mb-6">{title}</h2>

      {/* Separator line */}
      <div className="w-full h-1 bg-accent my-6"></div>

      {/* Tracks container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {tracks.map((track, index) => (
          <div key={index} className="w-full max-w-[280px]">
            <Track {...track} />
          </div>
        ))}
      </div>
    </section>
  )

  return (
    <>
      <Helmet>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1487916517080617`}
          crossOrigin="anonymous"
        />
        <script>
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-1487916517080617",
              enable_page_level_ads: true
            });
          `}
        </script>
        <title>
          Complete Learning Roadmap: Web Development & AI Programming Path |
          BBACA BCA Guide
        </title>
        <meta
          name="description"
          content="Comprehensive programming roadmaps for Web Development and AI. Master MERN stack, Python, Java, Data Structures, Machine Learning. Perfect for BBACA/BCA students. Free practical solutions and lab guides for SPPU University."
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-1487916517080617"
        ></meta>
        <meta
          name="keywords"
          content="programming roadmap, web development path, artificial intelligence course, BBACA, BCA, SPPU University, programming tutorials, coding guide, full stack development, machine learning path, practical solutions, lab solutions, computer science education, learning path, technology roadmap, programming career guide"
        />
        <meta
          property="og:title"
          content="Complete Learning Roadmap: Web Development & AI Programming Path | BBACA BCA Guide"
        />
        <meta
          property="og:description"
          content="Comprehensive programming roadmaps for Web Development and AI. Master MERN stack, Python, Java, Data Structures, Machine Learning. Perfect for BBACA/BCA students."
        />
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="subject" content="Programming Education Roadmap" />
        <link rel="canonical" href="/roadmaps" />
      </Helmet>
      <div className="mx-auto md:mt-10 md:ml-52 lg:ml-60 p-4 md:p-8 bg-offWhite dark:bg-black rounded-lg shadow-md min-h-screen">
        <div className="space-y-12">
          <TrackSection title="Web Development" tracks={webDevTracks} />
          <TrackSection title="Artificial Intelligence" tracks={aiTracks} />
        </div>
      </div>
    </>
  )
}

export default Roadmaps
