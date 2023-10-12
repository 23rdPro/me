import cover from '@/public/cover.jpeg'
import agribooth from '@/public/agribooth.jpeg'

export const services = [
    {
      name: 'frontend <web>',
      description: `I develop and implement ui/ux components optimized for both Destop and Mobile platforms.`,
      tools: ['react', 'jquery', 'javascript', 'typescript', 'nodejs', 'nextjs', 'cypress', 'git', 'github', 'tailwind'],
      bg: cover,
    },
    {
      name: 'backend <web>',
      description: `I develop and maintain web services and specialize in APIs and can assure code quality.`,
      tools: ['python', 'django', 'flask', 'nodejs', 'git', 'github', 'graphql', 'drf', 'fastapi'],
      bg: cover
    },
    {
      name: 'data analysis',
      description: `I gather insights from actionable data and document results, trends, and recommendations.`,
      tools: ['pandas', 'excel/googlesheets', 'matplotlib', 'numpy', 'jupyterlab', 'sql', 'python'],
      bg: cover,
    },
    {
      name: 'dashboard',
      description: `I utilize contemporary presentation tools to capture an overview of user data`,
      tools: ['googlesheets', 'tableau', 'matplotlib', 'seaborn', 'reactchartjs'],
      bg: cover,
    }
]

export const portfolios = [
    {
      name: 'data analysis',
      description: 'Investigating effectiveness of emergency-response processes',
      tools: [],
      bg: cover,
      href: '/analysis'
    },
    {
      name: 'dashboard',
      description: 'Examine key perormance indicators',
      tools: [],
      bg: cover,
      href: '/dashboard'
    },
    {
      name: 'react application',
      description: 'School management application: ScreenLine Learn',
      tools: [],
      bg: cover,
    },
    {
      name: 'web development',
      description: 'Rental System that tracks and temporarily grant ownership of Agric items.',
      company: '',
      tools: [],
      bg: agribooth,
      href: 'https://www.sqtwebsolutions.com/index'
    }
]

export const contactMe = {
    name: 'olumide',
    description: `As a Full-Stack Engineer, I can combine frontend (typescript incl.) with
                  backend (python, Django inclu.) stacks to create applicatons following objectives
                  .`,
    services: []
  }

