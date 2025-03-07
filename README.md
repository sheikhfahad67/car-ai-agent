# Cars AI Agent

This project implements an AI agent designed to interact with and provide information about cars. It leverages the power of Large Language Models (LLMs) to understand user queries and provide relevant responses.

## Features

* **Natural Language Interaction:** Users can ask questions about cars in natural language.
* **Tool Integration:** The AI agent can utilize external tools (e.g., to look up car specifications, prices, or availability).
* **Chatbot** Ask some questions from the user and return it backe to the user

## Technologies Used

* **Google Ai studio:** For building the model.
* **PyTorch:** For tensor operations and model execution.
* **pnpm:** For package management.
* **@google/generative-ai** for accessing google generative ai models

## Prerequisites

* Nodejs 12.x
* pnpm (Node Package Manager)
* A compatible GPU (recommended for optimal performance)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  **Install dependencies using pnpm:**

    ```bash
    pnpm install
    ```

2.  **Interact with the AI agent:**

    ```bash
    pnpm start
    ```
    
    * The script will start, and you can then provide your car-related queries.
    * The agent will process your input and provide a response.

## Project Structure
This structure organizes the project files to improve maintainability and readability. Here's a breakdown of the main components:

* **`.vscode/`:** Contains VS Code specific settings and configurations for the project (e.g., workspace settings, launch configurations, extensions recommendations).
* **`node_modules/`:** Stores all the project's Node.js dependencies installed via pnpm.
* **`src/`:** The main source code directory containing the core logic of the AI agent.
    * **`config/`:** Holds configuration files for the agent, tools, and other components.
    * **`constants/`:** Defines constant values used throughout the project.
    * **`index.ts`:** The main entry point for the TypeScript application.
* **`.env`:** A file to store environment variables (e.g., API keys, model paths) that should not be directly committed to the repository.
* **`.gitignore`:** Specifies files and directories that should be ignored by Git (e.g., `node_modules/`, temporary files, logs).
* **`.prettierrc`:** Configuration file for the Prettier code formatter, ensuring consistent code style.
* **`eslint.config.mjs`:** Configuration file for ESLint, a tool for identifying and reporting on patterns in JavaScript/TypeScript code.
* **`package.json`:** The main configuration file for the project, containing metadata, dependencies, and scripts.
* **`pnpm-lock.yaml`:** Generated by pnpm, this file locks down the exact versions of all dependencies and their sub-dependencies.
* **`README.md`:** Provides an overview of the project, instructions, and other relevant information (this file).
* **`tsconfig.json`:** Configuration file for the TypeScript compiler.

This structure is a good starting point for an AI agent project using TypeScript and pnpm. You can adapt and expand it as your project grows and evolves.