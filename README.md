# Blink

Blink is a collaborative online whiteboard platform that enables teams to work together in real-time. It provides a seamless and interactive way to brainstorm, plan, and collaborate visually with team members, no matter where they are.

## Features

- **Real-time collaboration:** Work simultaneously with team members on the same whiteboard.
- **User authentication with Clerk:** Secure and easy-to-implement user authentication.
- **Backend operations with Convex:** Efficient data handling and storage.
- **Real-time updates with Liveblocks:** Instant updates to the whiteboard as users make changes.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the Repository**

    ```sh
    git clone https://github.com/Krittika-Tiwari/Blink.git
    cd blink
    ```

2. **Install Dependencies**

    ```sh
    npm install
    # or
    yarn install
    ```

3. **Run Convex Dev**

    ```sh
    npx convex dev
    ```

    This command will create a `.env.local` file with the necessary Convex environment variables.

4. **Set Up Additional Environment Variables**

    Add the necessary environment variables for Clerk and Liveblocks in the `.env.local` file.

    ```env
    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-frontend-api>
    CLERK_SECRET_KEY=<your-clerk-api-key>
    CLERK_DOMAIN=<your-clerk-domain>

    # Liveblocks
    LIVEBLOCKS_SECRET=<your-liveblocks-secret>
    ```

### Usage

1. **Run the Development Server**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. **Open the Application**

    Open your browser and go to [http://localhost:3000](http://localhost:3000).

### Deployment

To deploy the application, follow the deployment guidelines of your chosen hosting provider. Ensure all environment variables are correctly set in your production environment.

### Built With

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Convex](https://convex.dev/)
- [Liveblocks](https://liveblocks.io/)

### Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Acknowledgments

- All contributors and community members
