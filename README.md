Live version here [Credit union](https://nv-credit-union.netlify.app/).

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#migrations">migrations</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

- Built simple server to store user email, application number SSN ( Note: Fase SSN )
- Send confirmation email after client has submitted a loan application sucessfully
- Check loan application status

### Built With

- [Node JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex JS](http://knexjs.org/)
- [SendGrid](https://sendgrid.com/)
- [PostgreSQL (for production)](https://www.postgresql.org/)
- [Sqlite3 (for development)](https://www.sqlite.org/index.html)

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/anthonyamaro15/nv-credit-union-be.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root of the folder and add variable below
   ```JS
   CLIENT_URL = 'Front End url to check application status';
   SENDGRID_KEY = 'SendGrid api key for email services';
   SENDER = 'This can be you own email' ` from: SENDER, to: applicant email
   ```

### Prerequisites

How to run the project locally

- npm -- to install all dependencies
  ```sh
  npm install
  ```

### Migrations

Run migrations to create database

```sh
knex migrate:latest
```

if you don't have knex globally install then run

```sh
npx knex migrate:latest
```

<!-- USAGE EXAMPLES -->

## Usage

1. Run project locally
   ```sh
   npm run dev
   ```
