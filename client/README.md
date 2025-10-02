# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Windows (CMD/PowerShell)
cd D:\Projects
git clone https://github.com/<username>/myo-react.git
cd myo-react

# create app React  Vite  'client'
npm create vite@latest client -- --template react

cd client
npm install
npm run dev

# create new project
mkdir myo-react && cd myo-react

#  Git
git init

# create app React bằng Vite
npm create vite@latest client -- --template react
cd client
npm install

# run ( http://localhost:5173)
npm run dev


# route
npm i react-router-dom

src/
  assets/
    images/           ← copy assets/img
    fonts/            ← copy assets/fonts
    styles/           ← copy SCSS
      core/_base.scss
      core/_fonts.scss
      core/_mixins.scss
      core/_variables.scss
      layout/_footer.scss
      layout/_header.scss
      layout/_subscribe.scss
      pages/_category.scss
      pages/_home.scss
      pages/_products.scss
      index.scss       ← file import all SCSS
  components/
    Header.jsx        ←  partials/header.html
    Footer.jsx        ←  partials/footer.html
  pages/
    Home.jsx          ←  index.html
    PLP.jsx           ←  category.html
    PDP.jsx           ←  product.html
  legacy/             ← JS old
    carousel.js filter.js slider.js menu.js tab.js resources-slider.js

# install slick
npm i react-slick slick-carousel


# ESLINT
# install ESLint
npm install eslint --save-dev
# Initialize configuration
npx eslint --init

You can also run this command directly using 'npm init @eslint/config@latest'.
Need to install the following packages:
@eslint/create-config@1.10.0
Ok to proceed? (y) y


> client@0.0.0 npx
> create-config

@eslint/create-config: v1.10.0

? What do you want to lint? ... 
√ JavaScript
√ JSON
√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ JavaScript
√ JSON
√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, @eslint/js, globals, eslint-plugin-react
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...


npx eslint src
npx eslint src --fix


# install Stylelint
npm install stylelint stylelint-config-standard --save-dev
# create package
npm install --save-dev stylelint stylelint-config-standard-scss stylelint-config-prettier-scss





