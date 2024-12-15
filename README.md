# GitHub Organization Viewer  (React)

This application uses the GitHub API to fetch and display information about organizations listed in the included [public/orgs.csv](./public/orgs.csv) file. After viewing an organization for 5 seconds, the app fetches and displays the list of public repositories for that organization.

## Features

- **Dynamic Data Loading:** Fetches organization data dynamically using the GitHub API.
- **Repository List After Delay:** Displays public repositories after a 5-second delay when viewing an organization.
 

## How It Works

### Application Flow ([App.jsx](./src/App.jsx))

When the app starts, it loads a list of organization names from the `orgs.csv` file located in the `public` folder. These names are stored in the `orgs` state variable. The first organization from this list is automatically selected and its details are fetched from the GitHub API using `GET https://api.github.com/orgs/{org_name}`.  

The selected organization's data is stored in the `currentOrgData` state variable, and this information is passed to the `Organization` component for rendering.

### Organization Component ([Organization.jsx](./src/components/Organization.jsx))

Once the `Organization` component is rendered, a 5-second timer starts. After the timer ends, a request is sent to the GitHub API to fetch the list of public repositories for the selected organization using `GET https://api.github.com/orgs/{org_name}/repos`. The repositories are displayed using the `Repo` component.


## Languages and Technologies Used

- **React (JavaScript):** For building the user interface and managing the component-based architecture.
- **HTML/CSS:** For structuring and styling the application.
- **GitHub API:** For fetching organization and repository data.

## How to Run the Project

To run this project locally on your computer, follow these steps:

## Getting Started
1. Clone the repository to your local machine:
  ```bash
   git clone <repository-url>
  ```
  2. Navigate to the project folder
  ```bash
   cd <directory-name>
  ```
  3. Install dependencies
  ```bash
   npm install
  ```
  4. Start the development server
   ```bash
   npm run dev
  ```
  5. Open your browser \
     The app will open in your default browser, typically at:
  ```bash
  Local: http://localhost:5173/
