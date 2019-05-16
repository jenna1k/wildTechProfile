import React from 'react';

const students = [
  {
    basics: {
      name: 'John Doe',
      picture: '',
      email: 'john@gmail.com',
      website: 'http://johndoe.com',
      summary: 'A summary of John Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'john',
          url: 'https://github.com/john'
        },
        {
          network: 'Linkedin',
          username: 'john',
          url: 'https://linkedin.com/john'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  },
  {
    basics: {
      name: 'Camille Doe',
      picture: '',
      email: 'Camille@gmail.com',
      website: 'http://Camilledoe.com',
      summary: 'A summary of Camille Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'Camille',
          url: 'https://github.com/Camille'
        },
        {
          network: 'Linkedin',
          username: 'Camille',
          url: 'https://linkedin.com/Camille'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  },
  {
    basics: {
      name: 'Jenna Doe',
      picture: '',
      email: 'Jenna@gmail.com',
      website: 'http://Jennadoe.com',
      summary: 'A summary of Jenna Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'Jenna',
          url: 'https://github.com/Jenna'
        },
        {
          network: 'Linkedin',
          username: 'Jenna',
          url: 'https://linkedin.com/Jenna'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  },
  {
    basics: {
      name: 'Raphael Doe',
      picture: '',
      email: 'Raphael@gmail.com',
      website: 'http://Raphaeldoe.com',
      summary: 'A summary of Raphael Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'Raphael',
          url: 'https://github.com/Raphael'
        },
        {
          network: 'Linkedin',
          username: 'Raphael',
          url: 'https://linkedin.com/Raphael'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  },
  {
    basics: {
      name: 'Asieh Doe',
      picture: '',
      email: 'Asieh@gmail.com',
      website: 'http://Asiehdoe.com',
      summary: 'A summary of Asieh Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'Asieh',
          url: 'https://github.com/Asieh'
        },
        {
          network: 'Linkedin',
          username: 'Asieh',
          url: 'https://linkedin.com/Asieh'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  },
  {
    basics: {
      name: 'Anastasia Doe',
      picture: '',
      email: 'Anastasia@gmail.com',
      website: 'http://Anastasiadoe.com',
      summary: 'A summary of Anastasia Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'Anastasia',
          url: 'https://github.com/Anastasia'
        },
        {
          network: 'Linkedin',
          username: 'Anastasia',
          url: 'https://linkedin.com/Anastasia'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  },
  {
    basics: {
      name: 'Betta Doe',
      picture: '',
      email: 'Betta@gmail.com',
      website: 'http://Bettadoe.com',
      summary: 'A summary of Betta Doe...',
      location: {
        country: 'Germany'
      },
      profiles: [
        {
          network: 'Github',
          username: 'Betta',
          url: 'https://github.com/Betta'
        },
        {
          network: 'Linkedin',
          username: 'Betta',
          url: 'https://linkedin.com/Betta'
        }
      ]
    },
    projects: [
      {
        title: 'Project',
        date: '2014-11-01',
        summary: 'There is no spoon.',
        technologies: ['css', 'html', 'react', 'bootstrap']
      }
    ],
    favorite_programming_languages: ['HTML5', 'CSS3'],
    interests: [
      {
        name: 'Linux',
        keywords: ['git', 'terminal']
      }
    ]
  }
];

function Api() {
  return (
    <div>
      {students.map((studentInfo, index) => (
        <section>
          <BigCard key={index} {...studentInfo} />
          <SmallCard key={index} {...studentInfo} />
        </section>
      ))}
    </div>
  );
}

export default Api;