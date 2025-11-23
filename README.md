# About

Link to my website: https://tiqc-internship-week2-guykoff-8ah837je2.vercel.app/<br/><br/>

# How to make an Authentication webpage using Vercel and Next.js/React

Download Chocolatey (Run Powershell as Administrator)
```
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
```
______________________________________

Download Node.js (Run Powershell as Administrator)
```
choco install nodejs --version="24.11.1" (There may be a more updated version, visit https://nodejs.org/en/download for info)
```

______________________________________

Create the app in your CLI
```
npx create-next-app@latest my-week2-app
```

______________________________________

Set up the git repository
```
git init
git add git C:\Users\Achille\my-week2-app (Folder you wish to
git commit -m "Setup"
git branch -M main
git remote add origin https://github.com/achillekg1-rgb/TIQC-internship-week2-guykoff.git (Link to repository -add this at the end -> .git)
git push -u origin main
```
______________________________________

Set up the acquired .tsx files for your website in the "my-week2-app" folder

______________________________________

Sync new files in the folder to the local rep
```
git add my-week2-app
```
______________________________________

Before starting the dev server, push your local rep to the remote rep
```
git commit -m "website files set up"
git push -u origin main
```
______________________________________

Start dev server in your CLI (Make sure you get into the directory of the folder "my-week2-app")
```
cd my-week2-app
npm run dev
```
<br/>
Dev server (Paste this into your Browser search bar)

http://localhost:3000
______________________________________

If you are done developing and your localhost:3000 display all the pages correctly, you need to now preview it then deploy it after no issues were presented in the preview version. you can either do it through Vercel's website or through your CLI

For CLI
```
npm i -g vercel
```
Next run
```
cd my-week2-app
```
Then
```
vercel
```

<br/>If you get this error 'Error: The specified token is not valid. Use ```vercel login``` to generate a new token.'
On the next line, type
```
vercel login
```

<br/>After you are logged in, rerun. This will be the preview of the build

```
vercel
```

>[!IMPORTANT]
>If you come across an 404: NOT_FOUND, you have to go to <br/><br/>
>```Project Settings on vercel -> Build and Deployment -> Framework Settings -> Switch the Framework to Node.js```

<br/>
After you are done testing and no problems presented themselves, it's time to deploy it.<br/><br/>

```
vercel --prod
```

And you are done!

<br/>

# Help (Git)<br/>

If you add new files to the folder, you need to sync them to the local rep
```
git add my-week2-app
```

>[!IMPORTANT]
>This does not apply to making changes inside a specific file (.tsx)


<br/>If you want a newer rep from your local one to a remote one

```
git commit -m "Include changes you've made here"
git push -u origin main
```

<br/>Update repository<br/>
```
git commit -m "Include changes you've made here"
git push -u origin main
```

<br/>

## Prompt to v0.app

Create me a:

`A modern polished Landing page (hero, features, CTA), Auth page (Sign In / Sign Up UI; see options below)
User controlled Theme (Dark and Light Mode) and Automatically set the theme based on the device
List all the dependencies needed to run this on a locally hosted dev site`
