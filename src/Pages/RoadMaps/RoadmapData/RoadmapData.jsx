// changes in name
import { Frontend } from './WebDevelopment/Frontend'

export const roadmapData = [
  Frontend,
  {
    name: 'backend',
    beginner: {
      NodeJs: {
        basic: [
          {
            topic: 'topic1',
            resources: {
              free: ['yt video1', 'yt video2', 'article'],
              premium: ['coursera', 'codemy'],
            },
            time: 100,
          },
          {
            topic: 'topic2',
            resources: {
              free: ['yt video1', 'yt video2', 'article'],
              premium: ['coursera', 'codemy'],
            },
            time: 100,
          },
          {
            topic: 'topic3',
            resources: {
              free: ['yt video1', 'yt video2', 'article'],
              premium: ['coursera', 'codemy'],
            },
            time: 100,
          },
        ],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      ExpressJS: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      DJango: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
    },
    Intermediater: {},
    Champion: {},
  },
]
