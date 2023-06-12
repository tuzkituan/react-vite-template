# [HR-OS Skeleton]

HR-OS Skeleton based on ReactJS and ViteJS Framework.

## ✨ Features 

- **Typescript**
- **ReactJS + ViteJS**
- **Ant Design + LESS**
- **Redux Toolkit**
- **Redux Toolkit Query**
- **Storybook**
- **Testing**

## 🔨 Prerequisites

    git --version
    # >= 2.40.1
    node --version
    # >= v16.0.0
    yarn --version
    # >= 1.22.17

## 📦 Run scripts

Install packages:

    yarn

Start development:

    yarn dev

Storybook:

*Storybook helps you build UI components in isolation from your app's business logic, data, and context. That makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during development, testing, or QA.*

Start Storybook

    yarn storybook

Run all test cases:

    yarn test

## 🖥 Code Structure

```shell
.
├── README.md                                           # README file
├── .storybook                                          # Storybook configuration
├── .husky                                              # Husky configuration
├── .vscode                                             # VSCode configuration
├── public                                              # Public assets folder
├── src
│   ├── components                                      # Components     
│   ├── features                                        # Feature contain components related to the features of the application
│   │   ├─── authentication                             # Authentication feature    
│   │   │    ├─── authSlice.tsx                         # Auth Slice configuration
│   │   ├─── ...                                        # Other feature
│   ├── services                                        # Request API
│   │   ├─── api                                        # Api configuration
│   │   │    ├─── api.ts               
│   │   │    ├─── auth.ts               
│   │   │    ├─── ...                                   # Other Api configuration
│   │   ├─── models                                     # List API interfaces
│   │   │    ├─── IUser.ts              
│   │   │    ├─── ILoginRequest.ts      
│   │   │    ├─── ...                   
│   │   ├─── helpers                                    # Helper functions
│   ├── config                                         # Layouts
│   │   ├─── routes.tsx             
│   │   ├─── proxy.ts     
│   │   ├─── ... 
│   ├── stores                                          # Redux store
│   ├── layouts                                         # Layouts
│   │   ├─── MainLayout.tsx             
│   │   ├─── ...                    
│   ├── pages                                           # Pages
│   │   ├─── home    
│   │   │    ├─── index.tsx           
│   │   │    ├─── index.less       
│   │   ├─── login    
│   │   │    ├─── index.tsx           
│   │   │    ├─── index.less   
│   │   ├─── ...                                        
│   ├── stories                                         # Storybook
│   │   ├─── button    
│   │   │    ├─── Button.stories.ts           
│   │   ├─── input    
│   │   │    ├─── Input.stories.ts       
│   │   ├─── ...                                        # Global styles
│   ├── tests                                           # Test
│   ├── utils                                           # Utility functions, constants, config,...
├── .eslintrc.json              
├── .prettierrc.json
├── vite.config.js                                      # NextJS configuration
├── index.html                                          # Main HTML
├── package.json                                       
└── tsconfig.json                                       # TypeScript configuration
```

## 🖥 Environment Support

- Modern browsers and Internet Explorer 11

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 🌍 Coding Conventions
- HR-OS Style Guide: https://gitlab.paxanimi.ai/hrms/hr-os-fe-skeleton/-/blob/main/coding-conventions.md
- AirBnb Style Guide: https://airbnb.io/javascript/react

## 📙 Technical Documents

- React Design Patterns and Best Practices: https://www.packtpub.com/product/react-design-patterns-and-best-practices/9781786464538
- ViteJS: https://vitejs.dev/
- Storybook for React: https://storybook.js.org/docs/react
- JestJs - testing framework: https://jestjs.io/docs/getting-started
- @testing-library: https://testing-library.com/docs
- Redux: https://redux-toolkit.js.org
- Ant Design V5: https://ant.design/