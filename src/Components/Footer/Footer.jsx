import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Instagram, Github } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/coding_champion' },
    { icon: Instagram, href: 'https://www.instagram.com/codingchampion.in/' },
    { icon: Github, href: 'https://github.com/YashJunagade/CodingChampion' },
  ]

  return (
    <footer className="mt-4 py-4 bg-offWhite dark:bg-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary2 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          <div className="text-sm text-primary2">
            © {new Date().getFullYear()} Coding🏆Champion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
