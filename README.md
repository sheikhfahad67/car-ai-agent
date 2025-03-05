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

    * The script will start, and you can then provide your car-related queries.
    * The agent will process your input and provide a response.

## Project Structure

├── .vscode/          # VS Code configuration files
├── node_modules/     # Node.js dependencies
├── src/              # Source code directory
│   ├── config/       # Configuration files
│   ├── constants/    # Constant values
│   ├── index.ts      # Main TypeScript file
├── .env              # Environment variables
├── .gitignore        # Git ignore file
├── .prettierrc       # Prettier configuration
├── eslint.config.mjs # ESLint configuration
├── package.json      # pnpm package configuration
├── pnpm-lock.yaml    # pnpm lock file
├── README.md         # This file
├── tsconfig.json     # TypeScript configuration