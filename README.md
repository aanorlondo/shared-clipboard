
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
shared-clipboards
</h1>
<h3 align="center">📍 Share your ideas seamlessly with shared-clipboards on GitHub!</h3>
<h3 align="center">⚙️ Developed with the software and tools below:</h3>

<p align="center">
<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=for-the-badge&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=for-the-badge&logo=vuedotjs&logoColor=white" alt="Vue.js" />
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
</div>

---

## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [💫 Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The shared-clipboards repository contains a web application that allows users to save and share their clipboard content across devices. The app is built using Vue.js for the frontend, Express.js for the backend, and MongoDB for data storage. The app supports authentication and authorization using JWT tokens, as well as HTTPS communication with self-signed SSL certs. Overall, the project provides a secure and convenient way for users to share and access their clipboard data from anywhere.

---

## 💫 Features

Feature | Description |
|---|---|
| **🏗 Structure and Organization** | The codebase is well-structured and modular, with separate directories for MongoDB initialization, the web application, and local/Kubernetes deployment scripts. |
| **📝 Code Documentation** | The code is sufficiently documented, with descriptive comments and clear naming conventions for functions and variables. |
| **🧩 Dependency Management** | Dependencies are managed using package.json and Docker, with separate Dockerfiles for the MongoDB and web app containers. |
| **♻️ Modularity and Reusability** | The code is modular and reusable, with separate components for the header, form, grid, and footer in the Vue.js app, and separate scripts for Docker builds and Kubernetes deployments. |
| **✔️ Testing and Quality Assurance** | There are no explicit tests provided, but the code is generally well-structured and follows best practices for security and performance. |
| **⚡️ Performance and Optimization** | The code appears to be optimized for performance, using HTTPS communication, self-signed SSL certs, and Vue.js components for efficient rendering. |
| **🔒 Security Measures** | The code includes security measures such as JWT tokens for authentication, HTTPS communication, and self-signed SSL certs for secure communication. |
| **🔄 Version Control and Collaboration** | The code is version controlled using Git and hosted on GitHub, with clear commit messages and a collaborative development process. |
| **🔌 External Integrations** | The code integrates with Docker, Kubernetes, MongoDB, and Vue.js, with separate scripts for building and deploying the app on these platforms. |
| **📈 Scalability and Extensibility** | The code is scalable and extensible, with separate components for the Vue.js app and scripts for local/Kubernetes deployment and Docker builds. The use of MongoDB also allows for easy scaling and management of data. |

---


<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## 📂 Project Structure


```bash
repo
├── LICENSE
├── README.md
├── kubernetes
│   ├── external-configs
│   │   └── clipboard-external-config.yaml
│   ├── scripts
│   │   ├── debug.sh
│   │   ├── docker_build.sh
│   │   ├── docker_push.sh
│   │   ├── kube_apply.sh
│   │   ├── kube_clean.sh
│   │   ├── prepare_prod.sh
│   │   ├── restart_services.sh
│   │   ├── secrets_base64.sh
│   │   └── workflow.sh
│   ├── secrets
│   │   └── clipboard-secrets.yaml
│   ├── services
│   │   ├── clipboard-mongodb.yaml
│   │   └── clipboard-webapp.yaml
│   └── volumes
│       └── mongodb-pvc.yaml
├── local
│   ├── clean.sh
│   ├── debug.sh
│   ├── docker_build.sh
│   ├── docker_build_run.sh
│   ├── docker_run.sh
│   ├── docker_webapp.sh
│   └── prepare_local.sh
├── mongo-init
│   ├── Dockerfile
│   └── mongo-init-script.js
└── webapp
    ├── Dockerfile
    ├── build
    │   └── index.js
    ├── package.json
    ├── public
    │   ├── icon.png
    │   ├── icon_2.png
    │   ├── icon_3.png
    │   └── index.html
    ├── server.js
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   │   ├── css
    │   │   │   └── main.css
    │   │   └── media
    │   │       ├── confirmation_meme.png
    │   │       ├── delete_icon.png
    │   │       ├── github_logo.png
    │   │       ├── icon.png
    │   │       ├── icon_2.png
    │   │       ├── icon_3.png
    │   │       ├── nodejs_logo.png
    │   │       └── vuejs_logo.png
    │   ├── components
    │   │   ├── EntriesForm.vue
    │   │   ├── EntriesGrid.vue
    │   │   ├── Footer.vue
    │   │   └── Header.vue
    │   └── main.js
    └── vue.config.js

16 directories, 49 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 🧩 Modules

<details closed><summary>Build</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                                                                                | Module                |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| index.js | This code snippet exports an object with a single property named "build". The "build" property contains four properties that specify the location of the index.html file and the assets directory for a web application. It also includes the subdirectory name for static assets and the public path for accessing those assets. The "path" module is used to resolve the file paths. | webapp/build/index.js |

</details>

<details closed><summary>Components</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                | Module                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| EntriesGrid.vue | This is a Vue.js component that displays a list of entries fetched from a backend API. It allows the user to delete individual entries or clear all entries, with authentication using JSON Web Tokens (JWT). It also includes a method to format timestamps into a human-readable format.                                                                                                                             | webapp/src/components/EntriesGrid.vue |
| Footer.vue      | The code snippet is a Vue.js template for a website footer. It includes links to the author's GitHub repository and logos for the Vue.js and Node.js frameworks used to build the site. The footer also includes a copyright message.                                                                                                                                                                                  | webapp/src/components/Footer.vue      |
| EntriesForm.vue | This code snippet defines a Vue component that allows the user to add new entries to a form. The user can input the content of the entry, which is sent via a POST request to a backend API. If the input is empty, the request is not sent and an error is displayed. If the request is successful, the form is reset for future entries.                                                                             | webapp/src/components/EntriesForm.vue |
| Header.vue      | This code snippet provides the functionality for a header component in a web app. It includes buttons for login, signup, signout, and editing a user's profile. It also includes forms for the login, signup, and editing profile functionality, which make calls to relevant APIs and store data in cookies. The component checks for the presence of a JWT token in the cookies to determine if a user is logged in. | webapp/src/components/Header.vue      |

</details>

<details closed><summary>Local</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Module                    |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
| docker_build.sh     | This Bash script aims to clean and build two Docker images:'negan/clipboard-mongo:local' and'negan/clipboard-webapp:local'. It first removes any existing images with the given names. Then, it builds a Docker image for the MongoDB database using the'../mongo-init' directory, tags it with the given name and pushes it to Docker Hub. Lastly, it builds a Docker image for the web application using the'../backend-app' directory, tags it with the given name and also pushes it to Docker Hub. | local/docker_build.sh     |
| debug.sh            | The code snippet connects to a MongoDB server with given credentials, and then displays a list of databases available on the server using the "show dbs" command. It then switches to the "clipboards" database using "use clipboards" command and displays a list of collections within the database using "show collections" command.                                                                                                                                                                 | local/debug.sh            |
| docker_webapp.sh    | This Bash script sources environment variables and prepares the necessary web application environment variables by writing them to a production configuration file. It then cleans up any existing Docker containers or images, builds a Docker image of the web app and pushes it to a Docker repository. Finally, it runs a Docker container with the backend application using the built web app Docker image and specified environment variables.                                                   | local/docker_webapp.sh    |
| docker_build_run.sh | This Bash script sets environment variables, runs a script to clean up Docker containers, runs a script to build a Docker container, and then runs a script to run the Docker container. These actions aim to ensure the Docker container is cleaned, built, and running properly.                                                                                                                                                                                                                      | local/docker_build_run.sh |
| docker_run.sh       | The provided code snippet is a Bash script that creates and runs two Docker containers. The first container runs a MongoDB instance with the specified environment variables, and the second container runs a backend web application with the specified environment variables and ports. The script also removes any existing containers with the same names before running.                                                                                                                           | local/docker_run.sh       |
| prepare_local.sh    | This Bash script exports environment variables used for a web application and authentication server. It sets variables for MongoDB connection parameters, backend port and route, and authentication server URL. The script also exports the hostname of the computer on which it is running.                                                                                                                                                                                                           | local/prepare_local.sh    |
| clean.sh            | The provided code is a Bash script that uses Docker commands to remove two Docker containers named "CLIPBOARDS-MONGO-LOCAL" and "CLIPBOARDS-WEBAPP-LOCAL", and also deletes two Docker images named "negan/clipboard-mongo:local" and "negan/clipboard-webapp:local". This script can be used for cleaning up Docker resources.                                                                                                                                                                         | local/clean.sh            |

</details>

<details closed><summary>Mongo-init</summary>

| File                 | Summary                                                                                                                                                                                                                     | Module                          |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| Dockerfile           | This Dockerfile sets up a MongoDB container by copying an initialization script to the container, exposing the database port (27017), and finally starting the MongoDB daemon with the'mongod' command.                     | mongo-init/Dockerfile           |
| mongo-init-script.js | The code snippet switches to a particular database and creates a new user with root privileges, followed by a collection with'readWrite' privileges. The code also prints messages to indicate the completion of each task. | mongo-init/mongo-init-script.js |

</details>

<details closed><summary>Public</summary>

| File       | Summary                                                                                                                                                                                                                                                                                       | Module                   |
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|
| index.html | This is a HTML document that sets up the basic structure for a web page with a title, viewport meta element, and a link to an icon file in the head section. The body section only contains a single div element with an ID of "app", which can be used as a placeholder for dynamic content. | webapp/public/index.html |

</details>

<details closed><summary>Scripts</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                 | Module                                 |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| docker_build.sh     | The code is a bash script that builds and tags two Docker images:'negan/clipboard-mongo:latest' and'negan/clipboard-webapp:latest'. It also sets the backend route environment variable for the web app and builds it again with the updated variable.                                                                                                  | kubernetes/scripts/docker_build.sh     |
| debug.sh            | The code snippet provides a set of commands that enable users to SSH into a container, run mongosh, change the database, and list users. The last command allows users to log in with privileges using a specified username and password on the specified authentication database.                                                                      | kubernetes/scripts/debug.sh            |
| kube_apply.sh       | This Bash script applies Kubernetes configurations to deploy and configure services for a Clipboard application. It utilizes kubectl to apply configuration files for persistent volume claims, external configs, secrets, and services. Overall, the script automates the setup process for the Clipboard application on a Kubernetes cluster.         | kubernetes/scripts/kube_apply.sh       |
| workflow.sh         | This Bash script sets environment variables and then executes several shell scripts in sequence: kube_clean.sh, docker_build.sh, docker_push.sh, and finally kube_apply.sh. The purpose of the script is likely to be some kind of deployment or management task for a Kubernetes cluster and associated Docker images.                                 | kubernetes/scripts/workflow.sh         |
| restart_services.sh | This Bash script deletes existing Kubernetes deployments and services for a clipboard web application and MongoDB. Then, it restarts the deployments and services by applying YAML configuration files for MongoDB and the web app. Overall, the script is used for redeploying the clipboard web app and MongoDB services in a Kubernetes environment. | kubernetes/scripts/restart_services.sh |
| docker_push.sh      | The provided code snippet is a Bash script that pushes two Docker images, "clipboard-mongo" and "clipboard-webapp", to Docker Hub. The images are pushed with the "latest" tag.                                                                                                                                                                         | kubernetes/scripts/docker_push.sh      |
| prepare_prod.sh     | The Bash script sets an environment variable named "BACKEND_ROUTE" to the value "clipboards", which likely corresponds to a route or endpoint in a web application.                                                                                                                                                                                     | kubernetes/scripts/prepare_prod.sh     |
| kube_clean.sh       | This bash script executes a series of commands to delete various Kubernetes resources, including a configmap, secret, deployments, and services related to a clipboard web application and its associated MongoDB database. The purpose of these commands is likely to clean up and remove these resources from a Kubernetes cluster.                   | kubernetes/scripts/kube_clean.sh       |
| secrets_base64.sh   | The code snippet uses the "base64" command to encode the given "username" and "password" strings into base64 format. The "-n" option ensures that no newline character is included in the output. The encoded strings can be used as credentials in various web authentication scenarios.                                                               | kubernetes/scripts/secrets_base64.sh   |

</details>

<details closed><summary>Src</summary>

| File    | Summary                                                                                                                                                                                                                                                            | Module             |
|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| App.vue | The code defines a Vue.js application with components for a header, a form, a grid, and a footer, which are all imported and integrated into the main application. It also imports a CSS file for styling purposes.                                                | webapp/src/App.vue |
| main.js | The code imports the createApp function from the Vue library and the App component from a local file. It creates an instance of the app using createApp and passes in the App component. Finally, it mounts the app instance to the DOM element with the ID "app". | webapp/src/main.js |

</details>

<details closed><summary>Webapp</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                              | Module               |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|
| server.js     | This code snippet includes an Express.js server that enables CORS and serves static files. It saves clipboard entries to MongoDB, retrieves all clipboard entries from MongoDB, and clears the entries from MongoDB. The code also includes authorization checks using JWT tokens and HTTPS communication with self-signed SSL certs.                | webapp/server.js     |
| Dockerfile    | The code snippet consists of two stages. In the first stage, a Vue.js app is built by installing dependencies, building the app, and removing unnecessary files. In the second stage, the built app is served using Node.js. The necessary dependencies are installed, the built app is copied, and the server is configured to listen on port 3000. | webapp/Dockerfile    |
| vue.config.js | The provided code exports a configuration object with a single property "publicPath" which sets the base path for all assets in the project. The value of this property is'./', indicating that all assets will be served relative to the root directory of the application.                                                                         | webapp/vue.config.js |

</details>

---

## 🚀 Getting Started

<!-- ### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - [📌  PREREQUISITE-1]
> - [📌  PREREQUISITE-2]
> - ... -->

### 🖥 Installation

1. Clone the shared-clipboards repository:
```sh
git clone ../shared-clipboards
```

2. Change to the project directory:
```sh
cd shared-clipboards
```

3. Install the dependencies:
```sh
chmod +x main.sh
```

### 🤖 Using shared-clipboards

```sh
./main.sh
```

<!-- ### 🧪 Running Tests
```sh
bats *.bats
``` -->

---


## 🗺 Roadmap

> - [ ] 📌  Task 1: Implement Unit Tests


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a pull request to the original repository.
Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `Apache 2.0` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - Personal Project

---

## Credits

This awesome documentation was automatically generated using the [README-AI Project](https://github.com/eli64s/README-AI)

---

