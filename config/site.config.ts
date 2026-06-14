// 博客配置文件
// VITE_SITE_URL 环境变量优先于此处的 url 配置
export const siteConfig = {
  title: 'ZSFan 的博客',
  subtitle: '记录开发、折腾与思考',
  description: '一个关注 Android、Web 开发、自动化工具与日常折腾记录的个人博客。',
  logo: '/logo.png',
  seoImage: '/logo.png',
  footerText: '© 2026 ZSFan 的博客',
  url: 'https://blog-buh.pages.dev',
  social: {
    github: 'https://github.com/zhangshengfan/',
    email: 'mailto:zsfan-nb@hotmail.com',
    rawEmail: 'zsfan-nb@hotmail.com',
  },
  author: {
    name: 'ZSFan',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1453508737&s=100',
    role: 'Developer',
    bio: '专注 Android、全栈开发、自动化工具与产品细节。',
  },
  toc: {
    collapseInactiveRootBranches: true,
  },
  friendsPage: {
    repoUrl: 'https://github.com/ZSFan888/Blog',
    repoFriendsUrl: 'https://github.com/ZSFan888/Blog/tree/main/friends',
    repoFriendsDir: 'friends',
    announcement: '博客已重置完成，新的内容将从这里重新开始。',
  },
  beian: {
    text: '',
    url: '',
  },
};
