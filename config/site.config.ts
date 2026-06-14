// 博客配置文件
// VITE_SITE_URL 环境变量优先于此处的 url 配置
export const siteConfig = {
  title: 'New Blog',
  subtitle: '一个全新的博客',
  description: '一个重新开始的个人博客，内容将从这里重新整理与发布。',
  logo: '/logo.png',
  seoImage: '/logo.png',
  footerText: '© 2026 New Blog',
  url: 'https://blog-buh.pages.dev',
  social: {
    github: 'https://github.com/ZSFan888/',
    email: 'mailto:zsfan-nb@hotmail.com',
    rawEmail: 'zsfan-nb@hotmail.com',
  },
  author: {
    name: 'New Blog',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1453508737&s=100',
    role: 'Blogger',
    bio: '这里是一个全新的开始。',
  },
  toc: {
    collapseInactiveRootBranches: true,
  },
  friendsPage: {
    repoUrl: 'https://github.com/ZSFan888/Blog',
    repoFriendsUrl: 'https://github.com/ZSFan888/Blog/tree/main/friends',
    repoFriendsDir: 'friends',
    announcement: '博客内容已重置，新的内容正在整理中。',
  },
  beian: {
    text: '',
    url: '',
  },
};
