## commands

to create a new project: 
```npm
  npm create vite@latest
  npm install
  npm run dev
```

to download this repo:
```shell
  # ssh
  git clone git@github.com:CristianLopez3/project-s.git
  # https
  git clone https://github.com/CristianLopez3/project-s.git
```

after download the repo, run the next commands: 
```npm
  npm install
  npm run dev
```

## Proccess

Enter in the src folder, and go to the App.jsx file

>[!TIP]
>JSX is the same javascript but reactive, so don't worry about it.

## Create a new component

go to the folder components into the src, and do the following steps:

create a new file, for example Navbar.jsx
this will be the code: 
```jsx
  const Navbar = () => {
    return (
      <nav>
        <ul>
          items
        </ul>
      </nav>
    )
  }

  export default Navbar
```

>[!IMPORTANT]
>In react, the first letter of the file will be in uppercase

## To keep in mind

* hooks
* props
* destructuration