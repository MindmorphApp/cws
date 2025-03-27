# cws (Coping with Schizophrenia)

This is a decision based game that builds coping mechanisms for people dealing with schizophrenia

---

- [Getting Started](#getting-started)
  1. [Clone the Repository](#clone)
  2. [Install Dependencies](#installdep)
  3. [Project Setup](#projectsetup)
  4. [System Configurations](#systemconfig)
- [Developing](#developing)
- [Building](#building)

---

# Getting Started

<a id="clone"></a>

1. **Clone the Repository**

```bash
git clone https://github.com/MindmorphApp/cws.git
cd cws
```

<a id="installdep"></a>

2. **Install Dependencies**

Make sure you have Node.js installed!
If not, please go to the following [Site](https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/)

```bash
npm install
```

<a id="projectsetup"></a>

3. **Project Setup**

After installing, a few setup tasks are automatically handled:

- `svelte-kit sync` runs to sync the project configuration
- Husky is installed for Git hooks

if this fails for some reason, you can manually run:

```bash
npm run prepare
```

**Note:**
On UNIX-based systems (MacOS, Linux), you may need to grant permission to the `.husky/pre-commit` shell script.

```bash
chmod +x .husky/pre-commit
```

in most cases, this permission is already set in Git and gets preserved when cloning on Unix systems, but not always.

ON Windows no `chmod` is needed.

<a id=systemconfig></a>

4. **System Configurations**

**Only on Windows systems:**
To be able to commit the repository, you need to use the git bash terminal.

- In a code editor:

  - Make sure you use the Git bash terminal to be able to commit.

- In the Github desktop:
  - You can go to `File` --> `Options` --> `Integrations` and set the `shell` to: `Git Bash`

**Note:**  
When committing code, `bash` may not be recognized by Windows systems, meaning that the path to `bash.exe` is not set in the `environment variables`. (this can happen when using Github Desktop)

    1. Under:  `Windows` search: `View advanced system settings` --> `Environment Variables` --> in the section of "System variables" choose `Path` then click on `Edit...` --> `New` add the Path of bash.exe. --> then `ok, ok, ok`.
    (In general, if Git bash was installed using the default file path, then it should be either under: `C:\Program Files\Git\bin`  or  `C:\Program Files\Git\usr\bin` make you check the path in the file explorer and copy it.)

---

# Developing

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

---

# Building

To create a production version of your app:

```bash
npm run build
```
