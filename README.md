# App based on React, for creating and managing projects for working in collaboration
## Description
When we are working on a project without import its characteristics, it is always important to work with tools that allow us to be the most efficiently as soon as possible, this application is built, with the intention both the project manager and collaborators can do tasks in an appropriated way.
Now, we are showing the different parts of this web application, in order to use it, first the users should log into it, like this image shows it. 
![Loggin page](../media/registerAndLogin/login.png?raw=true)
But if the person does not have an account yet, first should register on it, like this.
![Register page](../media/registerAndLogin/register.png?raw=true)
In order to confirm the users account, the application will immediately send an email, where it will be a request for confirming the account, with a 6 digits verification token with a link to the page where it will be verified the account, like this.
![Confirmation page](../media/registerAndLogin/account-confirmatio-by-token.png?raw=true)
Once the user had been registered will see the following, where he will be able of creating a new project, to see the created project, to edit the created project and to delete the created project, how it displays to continuation:
![Confirmation page](../media/Views/menu-see-edit-delete-project.png?raw=true)

![Main view](../media/Views/mainView.png?raw=true)
We can navigate through our user menu, with the next menu:
![User menu](../media/registerAndLogin/user-menu.png?raw=true)
We can add project, like this.
![Create view](../media/Views/create-project.png?raw=true)
But supposing the user chose the menu option [See project], this will allow adding tasks, and adding collaborators to his project:
![Adding tasks](../media/Views/toast-notifications.png?raw=true)
Adding a new task:
![Adding new task](../media/Views/add-task.png?raw=true)

![Adding new task](../media/Views/project-details?raw=true)
Adding collaborators:
![Adding collaborators](../media/Views/add-colaborator.png?raw=true)

![Adding collaborators](../media/Views/deleting-colaborator.png?raw=true)
Adding notes to the task and to see the changes history in every task, which has been done by every user:
![Adding notes](../media/Views/adding-note-change-history.png?raw=true)
Also once the users are registered, will put to change their profile data such as:
* Name and email
![Name and email](../media/registerAndLogin/editing-profile.png?raw=true)
* Password
![Editing password](../media/registerAndLogin/changing-password.png?raw=true)

But supposing the user forgot your password, this will put recovered using the following view:
![Forgot password](../media/registerAndLogin/forgot-password.png?raw=true)

How we can imagine to build this application, we had to integrate many dependencies both for developing as for production.
### Production dependencies:
* @chakra-ui/pin-input
* @dnd-kit/core
* @headlessui/react
* @heroicons/react
* @tailwindcss/forms
* @tanstack/react-query
* @tanstack/react-query-devtools
* axios
* react
* react-dom
* react-hook-form
* react-router-dom
* react-toastify
* zod
### Development depenncies:
- @eslint/js
- @types/node
- @types/react
- @types/react-dom
- @vitejs/plugin-react-swc
- autoprefixer
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- postcss
- tailwindcss
- typescript
- typescript-eslint
- vite


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
