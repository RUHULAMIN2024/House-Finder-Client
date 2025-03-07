# BasaFinder Frontend

## Overview

BasaFinder is a smart rental housing solution that connects landlords and tenants. This repository contains the frontend of the application, built with Next.js and TypeScript.

## Features

- User authentication with JWT
- Role-based access control (Admin, Landlord, Tenant)
- Rental house listing and search functionality
- Rental request submission and management
- Payment integration (Stripe, ShurjoPay)
- Responsive UI/UX with Next.js and Tailwind CSS

## Tech Stack

- **Frontend:** Next.js, TypeScript, React
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Authentication:** JWT, bcrypt

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RUHULAMIN2024/House-Finder-Client.git
   cd basafinder-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add the following environment variables:

   ```env
   NEXT_PUBLIC_API_BASE_URL=<backend-api-url>
   NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY=<>
   NEXT_PUBLIC_RECAPTCHA_SERVER_KEY=<>

   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment

To deploy the frontend, you can use Vercel or Netlify:

### Deploy on Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

### Deploy on Netlify

1. Install Netlify CLI:
   ```sh
   npm install -g netlify-cli
   ```
2. Deploy:
   ```sh
   netlify deploy
   ```

## Live Demo

A live demo of the application is available at:
[Live URL](https://house-finder-frontend.vercel.app)
