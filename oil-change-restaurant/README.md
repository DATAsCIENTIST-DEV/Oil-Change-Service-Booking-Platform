
# Oil Change Website for Restaurant Businesses

A modern, mobile-first oil change service management website built specifically for restaurant businesses. The platform allows restaurant owners to view available services, schedule oil change services, track booking status, receive notifications, manage their profile, and receive real booking confirmation emails.

## Live Demo
https://task1-theta-gules.vercel.app/

---

## Overview

This project was designed and developed as a complete web application for restaurant businesses that need to manage their oil change and kitchen service requirements.

The application provides a simple and professional workflow for restaurant owners:

1. View available services
2. Compare service pricing and duration
3. Select a service
4. Schedule a date and time
5. Enter restaurant details
6. Submit a booking
7. Receive a unique booking ID
8. View the booking status
9. Receive an in-app notification
10. Receive a booking confirmation email
11. Manage profile and notification preferences

The application is fully responsive and designed to work across mobile, tablet, laptop, and desktop screen sizes.

---

# Project Requirements

## Technical Requirements

The application was developed using the requested technology stack:

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Language:** TypeScript
- **TypeScript Configuration:** Strict Mode
- **Styling:** Tailwind CSS
- **Component Library:** shadcn/ui
- **State Management:** Zustand
- **Database:** SQLite with better-sqlite3
- **Email Service:** Resend API
- **Testing:** Vitest
- **Deployment:** Vercel

The application follows a component-based architecture with separate frontend components, API routes, state management, database access, and utility files.

---

# User Stories

## 1. View Available Oil Change Services

**User Story:**

As a restaurant owner, I want to view a list of available oil change services so that I can choose the service that best fits my restaurant's needs.

### Implemented

The Services section provides restaurant owners with available service options including:

- Service name
- Service description
- Price
- Estimated duration
- Service features
- Booking action

### Available Services

| Service | Price | Duration |
|---|---:|---:|
| Basic Oil Change | $89 | 30 minutes |
| Deep Oil Change | $149 | 60 minutes |
| Premium Kitchen Service | $229 | 90 minutes |
| Emergency Oil Service | $299 | 45 minutes |

---

# 2. Book an Oil Change Service

**User Story:**

As a restaurant owner, I want to book an oil change service so that I can schedule the service for my restaurant.

### Implemented

The booking system allows users to:

- Select an oil change service
- Select a date
- Select a time
- Enter restaurant name
- Enter restaurant address
- Add additional notes
- Submit the booking
- Receive booking confirmation
- Receive a unique booking ID

The booking form validates required information before sending the request to the backend.

### Booking Flow

```text
Service Selection
       ↓
Date Selection
       ↓
Time Selection
       ↓
Restaurant Details
       ↓
Booking Notes
       ↓
Submit Booking
       ↓
Booking API
       ↓
Database
       ↓
Booking Confirmation
       ↓
Notification
       ↓
Email Confirmation
````

---

# 3. Booking API

The application includes a dedicated backend API for creating bookings.

### Endpoint

```text
POST /api/bookings
```

The booking API handles:

* Request validation
* Service identification
* Service name resolution
* Booking ID generation
* Booking creation
* Database insertion
* Booking status assignment
* Email notification trigger
* API response handling
* Error handling

A unique booking ID is generated for every successful booking.

Example:

```text
booking-1790158239312
```

New bookings are automatically assigned:

```text
Status: Scheduled
```

---

# 4. Database Integration

The application uses SQLite with `better-sqlite3` for application data.

The database contains booking information including:

* Booking ID
* Service ID
* Service name
* Restaurant name
* Date
* Time
* Address
* Notes
* Booking status
* Created date

The database also contains profile information including:

* Name
* Email
* Phone
* Restaurant
* Address
* Email preferences
* SMS preferences

---

# 5. Email Confirmation System

A real email notification system has been integrated using the **Resend API**.

After a successful booking, the application sends a confirmation email to the restaurant owner's email address when email updates are enabled.

The email includes:

* Restaurant name
* Service name
* Booking date
* Booking time
* Booking ID
* Booking status

### Example Email

```text
Booking Confirmed

Hello Burger Barn,

Your oil change service has been successfully booked.

Service: Basic Oil Change
Date: 2026-09-12
Time: 17:10
Booking ID: booking-1790158239312
Status: Scheduled

Thank you.
```

The email is sent through the server-side email API:

```text
POST /api/send-email
```

The Resend API key is stored securely as an environment variable and is not included in the source code.

---

# 6. Service Status

**User Story:**

As a restaurant owner, I want to view the status of my booked oil change services so that I can track their progress.

### Implemented

The Service Status section allows users to view booking information and service progress.

Supported service states include:

* Scheduled
* In Progress
* Completed

The interface clearly communicates the current state of a service booking.

---

# 7. Notifications

**User Story:**

As a restaurant owner, I want to receive notifications about my oil change services so that I can stay informed.

### Implemented

The application includes an in-app notification system.

Users can:

* View notifications
* See unread notifications
* Mark individual notifications as read
* Mark all notifications as read
* View notification timestamps

A booking confirmation automatically creates an in-app notification.

Example:

```text
Booking confirmed

Premium Kitchen Service is booked for
2026-09-18 at 12:00.
```

---

# 8. Profile Management

**User Story:**

As a restaurant owner, I want to manage my profile and preferences so that I can customize my experience.

### Implemented

The Profile section allows users to manage:

* Name
* Email
* Phone number
* Restaurant name
* Restaurant address

Notification preferences include:

* Email updates
* SMS updates

The profile interface provides a dedicated area for restaurant and contact information.

---

# 9. Responsive Design

The website was developed using a mobile-first responsive approach.

The interface is optimized for:

* Mobile phones
* Tablets
* Laptops
* Desktop screens

### Responsive Breakpoints

```text
Mobile:   375px+
Tablet:   768px+
Desktop:  1440px+
```

The following areas are responsive:

* Navigation
* Dashboard
* Service cards
* Booking form
* Status information
* Notifications
* Profile forms
* Buttons
* Layout spacing
* Typography

---

# 10. Accessibility

Accessibility was considered throughout the application.

The project includes:

* Keyboard-friendly navigation
* Accessible form controls
* Proper form labels
* Semantic HTML
* Clear focus states
* Accessible interactive elements
* Responsive layouts
* Clear validation messages
* Clear success and error feedback

The application does not rely on empty or non-functional buttons.

---

# 11. Design System

The application follows the requested design system tokens.

## Colors

| Design Token | Value     |
| ------------ | --------- |
| Primary      | `#1E3A8A` |
| Secondary    | `#10B981` |
| Background   | `#F3F4F6` |
| Text         | `#1F2937` |

## Typography

* Font Family: Inter
* Headings: Bold
* Body: Regular

## Spacing

* Base spacing unit: 4px
* Standard padding: 16px
* Standard margin: 8px

---

# 12. Frontend Architecture

The frontend is built using React and Next.js.

The frontend is responsible for:

* Rendering pages
* Displaying service information
* Handling booking forms
* Managing user interactions
* Displaying notifications
* Displaying booking status
* Managing profile information
* Calling backend APIs

Reusable components are used throughout the application to maintain consistency and reduce duplication.

---

# 13. State Management

The application uses **Zustand** for client-side state management.

Application state includes:

* Bookings
* Notifications
* User profile
* Email notification preference
* SMS notification preference

When a booking is successfully created, the application updates the booking state and creates a corresponding notification.

---

# 14. Backend Architecture

The backend functionality is implemented using Next.js API Routes.

The main API routes are:

```text
/api/bookings
/api/profile
/api/send-email
```

### `/api/bookings`

Responsible for:

* Creating bookings
* Validating booking information
* Saving booking data
* Generating booking IDs
* Triggering email confirmation

### `/api/profile`

Responsible for:

* Retrieving profile information
* Handling profile updates

### `/api/send-email`

Responsible for:

* Validating email requests
* Reading the Resend API key
* Sending booking confirmation emails
* Handling email API responses
* Returning email status

---

# 15. Project Structure

```text
app/
├── api/
│   ├── bookings/
│   │   └── route.ts
│   ├── profile/
│   │   └── route.ts
│   └── send-email/
│       └── route.ts
│
├── booking/
│   └── page.tsx
│
├── notifications/
│
├── profile/
│
├── services/
│
├── status/
│
└── page.tsx

components/
├── Header
├── Navigation
├── UI Components
└── Application Components

lib/
├── db.ts
├── data.ts
└── store.ts

types/
└── Application Types

tests/
└── Test Files

public/
└── Static Assets
```

---

# 16. Acceptance Criteria

The requested acceptance criteria have been addressed throughout the application.

| Acceptance Criteria         | Status      |
| --------------------------- | ----------- |
| Display available services  | Completed   |
| Display service price       | Completed   |
| Display service duration    | Completed   |
| Display service description | Completed   |
| Select booking date         | Completed   |
| Select booking time         | Completed   |
| Enter restaurant details    | Completed   |
| Create booking              | Completed   |
| Generate booking ID         | Completed   |
| Display booking status      | Completed   |
| Scheduled status            | Completed   |
| In-progress status support  | Completed   |
| Completed status support    | Completed   |
| In-app notifications        | Completed   |
| Mark notifications as read  | Completed   |
| Profile management          | Completed   |
| Notification preferences    | Completed   |
| Booking confirmation email  | Completed   |
| Responsive design           | Completed   |
| Keyboard navigation         | Implemented |
| API integration             | Completed   |
| Database integration        | Completed   |

---

# 17. Testing

The project includes testing support using Vitest.

Testing covers critical application functionality and is structured around:

### Unit Testing

Testing individual functions and application logic.

### Integration Testing

Testing interactions between:

* Components
* State management
* API routes
* Booking functionality

### End-to-End User Flow

The primary user flow is:

```text
Open Website
     ↓
View Services
     ↓
Select Service
     ↓
Book Service
     ↓
Booking Created
     ↓
Booking ID Generated
     ↓
Notification Created
     ↓
Email Confirmation
     ↓
View Service Status
```

### Accessibility Testing

Accessibility considerations include:

* Keyboard navigation
* Form accessibility
* Interactive controls
* Focus states
* Responsive behavior
* User feedback

---

# 18. Error Handling

The application includes error handling for important user and backend operations.

Examples include:

* Missing required booking information
* Invalid booking requests
* Failed API requests
* Failed database operations
* Email API failures
* Missing email configuration
* Unexpected server errors

Users receive clear success or error feedback after important actions.

---

# 19. Security

Sensitive credentials are not hard-coded into the application.

The Resend API key is stored using environment variables.

Example:

```env
RESEND_API_KEY=your_resend_api_key
```

The `.env.local` file should never be committed to GitHub.

Environment variables should be configured separately in Vercel for production deployment.

---

# 20. Local Development

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
```

## Start Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:3000
```

---

# 21. Production Build

Create a production build using:

```bash
npm run build
```

Start the production application using:

```bash
npm start
```

---

# 22. Deployment

The application has been successfully deployed to Vercel.

### Production Website

[https://task1-theta-gules.vercel.app/](https://task1-theta-gules.vercel.app/)

The production deployment includes:

* Next.js application
* Responsive frontend
* Booking interface
* Service listing
* Status interface
* Notifications
* Profile section
* API routes
* Email integration

For email functionality, configure the following environment variable in Vercel:

```text
RESEND_API_KEY
```

---

# 23. Deliverables

The project includes the requested deliverables:

* Next.js project setup
* TypeScript configuration
* Tailwind CSS
* shadcn/ui components
* Design system
* Service listing
* Service booking
* Booking API
* Database integration
* Service status
* Notification system
* Profile management
* Email confirmation system
* Responsive layouts
* Accessibility considerations
* Testing setup
* Production deployment

---

# 24. Evaluation Criteria

## Code Quality

The project uses a structured Next.js architecture with reusable components and separated frontend, backend, state and database responsibilities.

## Component Boundaries

UI components and application functionality are separated to improve maintainability and reuse.

## State Flow

Zustand provides centralized client-side state for bookings, notifications and profile information.

## Edge Case Handling

The application validates required booking fields and handles API, database and email errors.

## Testing

Testing support is included for critical functionality and application flows.

## Accessibility

Keyboard navigation, accessible controls, labels and clear feedback are included.

## Responsiveness

The application is designed for mobile, tablet and desktop screen sizes from 375px to 1440px and beyond.

---

# 25. Final Application Flow

The complete application workflow is:

```text
                 OilFlow
                    │
                    ▼
              Restaurant Owner
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      View Services       Manage Profile
          │                   │
          ▼                   ▼
     Select Service      Update Preferences
          │
          ▼
      Book Service
          │
          ▼
     Booking API
          │
          ▼
       Database
          │
     ┌────┴────┐
     ▼         ▼
Notification   Email
     │         │
     ▼         ▼
Booking      Confirmation
Status
     │
     ▼
Track Service
```

---

# 26. Live Demo

The completed application is available here:

**[https://task1-theta-gules.vercel.app/](https://task1-theta-gules.vercel.app/)**

---

# Conclusion

OilFlow is a complete restaurant-focused oil change service management application built with modern web technologies.

The project implements the requested service listing, booking, status tracking, notification, profile management, responsive design, accessibility, API integration, database functionality, and real email confirmation workflow.

The application is deployed and available as a live production demo through Vercel.

## Live Demo

[https://task1-theta-gules.vercel.app/](https://task1-theta-gules.vercel.app/)


