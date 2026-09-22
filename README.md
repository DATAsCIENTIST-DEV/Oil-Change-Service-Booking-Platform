# Oil Change Service Booking Platform

A modern, responsive oil change service booking platform built with **Next.js 15, React 19, TypeScript, Tailwind CSS, and shadcn/ui**.

The platform allows restaurant owners to browse available oil change services, schedule bookings, track service status, receive notifications, and manage their profile and preferences.  

## Features

### Service Listing

* View available oil change services
* Service name, description, price, and duration
* Clean and responsive service cards
* Easy navigation to the booking flow

### Service Booking

* Select an oil change service
* Choose a preferred date and time
* Enter required restaurant/customer details
* Submit a booking through the Next.js API
* Automatically generated booking ID
* Booking confirmation feedback

### Service Status

Users can track their bookings and view service progress, including:

* Scheduled
* In Progress
* Completed

### Notifications

* In-app booking confirmation notifications
* Notification list
* Read/unread notification state
* Mark individual notifications as read
* Mark all notifications as read

### Profile Management

* Edit profile information
* Update personal/business details
* Manage notification preferences
* Email notification preference
* SMS notification preference
* Dynamic profile initials

## Technology Stack

* **Next.js 15**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Zustand**
* **Next.js API Routes**
* **Inter Font**

## Design System

The application follows a consistent design system based on the following tokens:

| Token        | Value     |
| ------------ | --------- |
| Primary      | `#1E3A8A` |
| Secondary    | `#10B981` |
| Background   | `#F3F4F6` |
| Text         | `#1F2937` |
| Font         | Inter     |
| Base Spacing | 4px       |

### Responsive Breakpoints

* Mobile: 375px+
* Tablet: 768px+
* Desktop: 1440px+

The interface is designed to remain usable across mobile, tablet, and desktop screen sizes.

## Project Architecture

```text
app/
├── api/
│   ├── bookings/
│   └── services/
├── booking/
├── notifications/
├── profile/
├── status/
└── ...

components/
├── ui/
├── booking/
├── services/
├── notifications/
└── ...

lib/
├── data.ts
└── ...

stores/
└── ...

tests/
└── ...
```

The project follows a separation of concerns between:

* UI components
* Application state
* API routes
* Data handling
* Reusable UI components

## Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

If port 3000 is already in use, Next.js may automatically start the application on another available port, such as:

```text
http://localhost:3002
```

### 5. Production build

```bash
npm run build
```

### 6. Start production server

```bash
npm start
```

## Application Flow

The main user flow is:

```text
Services
   ↓
Select Service
   ↓
Booking Form
   ↓
Choose Date & Time
   ↓
Submit Booking
   ↓
Booking Confirmation
   ↓
Service Status
   ↓
Notifications
```

Users can also access their **Profile** to update personal information and notification preferences.

## API Structure

The application uses Next.js API routes for backend operations.

### Services API

Responsible for retrieving available oil change services.

### Bookings API

Responsible for creating and handling service bookings.

The booking flow connects the frontend form with the backend API so that submitted booking information can be processed by the application.

## State Management

Application state is managed using **Zustand**.

State is used for functionality such as:

* Bookings
* Notifications
* Read/unread notification state
* Profile information
* User preferences

## Accessibility

The application is designed with accessibility in mind.

Implemented considerations include:

* Keyboard-friendly interactions
* Accessible form controls
* ARIA labels where required
* Clear focusable interactive elements
* Responsive layouts
* Semantic UI structure

## Testing

The project includes testing for critical application functionality.

Testing areas include:

* Unit testing
* Component interactions
* Booking flows
* API interactions
* User flows
* Accessibility considerations

Before submitting the project, run:

```bash
npm test
```

and verify that the production build succeeds:

```bash
npm run build
```

## Current Notification System

The application currently supports **in-app notifications** for booking-related updates.

The notification system includes:

* Booking confirmation
* Notification state
* Read/unread handling
* Mark as read
* Mark all as read

### Real Email Notifications

Real external email delivery can be connected to the notification system using an email service provider.

This requires configuring an email provider and adding the required environment variables before deployment.

Example environment configuration:

```env
EMAIL_FROM=
EMAIL_API_KEY=
```

The API key should be stored securely in environment variables and should **never be committed to GitHub**.

## Environment Variables

Create a `.env.local` file for local development when environment variables are required.

Example:

```env
# Add required application secrets here
# Never commit .env.local to GitHub
```

Make sure `.env.local` is included in `.gitignore`.

## Security

* Sensitive credentials should be stored in environment variables.
* API keys must not be committed to the repository.
* Production secrets should be configured through the hosting platform.
* User input should be validated before processing.

## Responsive Design

The application has been designed for:

* Mobile phones
* Tablets
* Laptops
* Desktop monitors

The target responsive range is approximately **375px to 1440px+**.

## Project Requirements

The project was developed according to the following requirements:

* Next.js 15
* React 19
* TypeScript strict mode
* Tailwind CSS
* shadcn/ui
* Responsive UI
* Accessible interactions
* Service listing
* Service booking
* Service status tracking
* Notifications
* Profile management
* API integration
* Testing support

## Deployment

The application can be deployed to a Next.js-compatible hosting platform.

Before deployment:

```bash
npm install
npm run build
```

After confirming the production build succeeds, configure the required environment variables on the hosting platform and deploy the application.

## Future Improvements

Potential future enhancements include:

* Real-time email notifications
* SMS notifications
* Persistent production database
* Authentication and authorization
* Admin dashboard
* Advanced booking management
* Automated service status notifications
* Production monitoring and analytics

## License

This project is intended for demonstration and project submission purposes.
