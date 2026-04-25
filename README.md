# Krushi phala - Agricultural Services Platform

A full-stack web application for agricultural services featuring soil testing and machine rental functionality.

Fronted Hosted here --> https://elastic-kirch-9d172b.netlify.app/
## Project Overview

This project is a comprehensive agricultural platform that connects farmers with soil testing services and machine vendors. It provides user authentication, vendor management, and image upload capabilities.

## Tech Stack

### Frontend (`/sdp`)
- **React** (v17.0.2) - UI framework
- **Material-UI** (v4.12.3) - Component library
- **React Router** (v5.3.0) - Navigation
- **Bootstrap** (v5.1.3) - CSS framework
- **Google Map React** - Map integration
- **i18next** - Internationalization
- **React Particles** - Visual effects
- **React Player** - Video playback

### Backend Servers

#### Main Server (`/server`)
- **Express.js** - Web framework
- **MongoDB** with Mongoose - Database
- **JWT** - Authentication
- **Nodemailer** - Email notifications
- **CORS** - Cross-origin support

#### Image Server (`/imageserver`)
- **Express.js** - File upload handling
- **Multer** - Multipart file uploads

#### Authentication Server (`/Bcryptpassword`)
- **bcrypt/bcryptjs** - Password hashing
- **Mongoose** - User data management

## Project Structure

```
Sdp1/
├── sdp/                    # React Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── homepage/   # Homepage module
│   │   │   ├── login/      # Login component
│   │   │   └── register/   # Registration component
│   │   ├── App.js         # Main app router
│   │   ├── Image.js       # Soil testing interface
│   │   ├── Search.js      # Vendor search
│   │   └── Soil_Machine.js # Main navigation
│   └── package.json
│
├── server/                 # Main Backend Server (Port 9002)
│   ├── routes/
│   │   └── vendors.js     # Vendor CRUD operations
│   ├── models/
│   │   └── vendor.js      # Vendor data model
│   └── app.js             # Express app setup
│
├── imageserver/           # Image Upload Server
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── index.js
│   └── index.js
│
└── Bcryptpassword/        # Authentication Server
    ├── server.js
    ├── userModel.js
    └── userRoutes.js
```

## Features

### User Features
- User Registration and Login
- Soil Testing Service Access
- Browse Machine Vendors
- Search Vendors by Location
- View Vendor Contact Information

### Vendor Features
- Register as a Machine Vendor
- List Machines for Rent
- Set Daily Rental Prices
- Provide Location and Contact Details

### Technical Features
- Password Hashing with bcrypt
- JWT Token Authentication
- Image/File Uploads
- MongoDB Database Integration
- RESTful API Design
- CORS-enabled Backend
- Email Notifications

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn

### Backend Setup

1. **Main Server**
```bash
cd server
npm install
npm start
```
Server runs on `http://localhost:9002`

2. **Image Server**
```bash
cd imageserver
npm install
npm start
```

3. **Authentication Server**
```bash
cd Bcryptpassword
npm install
npm start
```

### Frontend Setup

```bash
cd sdp
npm install
npm start
```
Frontend runs on `http://localhost:3000`

## Database Configuration

The main server connects to MongoDB at:
```
mongodb://localhost:27017/myLoginRegisterDB
```

Update the connection string in `server/app.js` for your environment.

## API Endpoints

### Vendors API (`/vendors`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/vendors` | Get all vendors |
| POST | `/vendors` | Create new vendor |

### Vendor Schema
```javascript
{
  name: String,
  email: String,
  contact: String,
  machine: String,
  price_per_day: Number,
  place: String,
  description: String
}
```

## Navigation Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Image | Home/Soil Testing |
| `/Vendors` | Vendorpage | Machine Vendors List |
| `/Register` | Register | User Registration |
| `/Login` | Login | User Login |

## Environment Variables

Create `.env` files in respective directories:

```env
# Server
PORT=9002
MONGODB_URI=mongodb://localhost:27017/myLoginRegisterDB
```

## Development

The project uses `nodemon` for automatic server restart during development.

```bash
# Run all servers (in separate terminals)
cd server && npm start
cd imageserver && npm start
cd Bcryptpassword && npm start
cd sdp && npm start
```

## Build for Production

```bash
cd sdp
npm run build
```

## License

ISC

## Author

Jayavarapu-Harshitha

Narayanasetti Saranya
## Repository

https://github.com/Jayavarapu-Harshitha/Sdp1

