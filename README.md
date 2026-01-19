
# MediConnect — Backend (Spring Boot)

> **MediConnect** is designed for hospitals, clinics, and healthcare providers to manage patient records, enable telehealth consultations, and streamline care coordination. The platform integrates **appointment scheduling**, **electronic health records (EHR)**, **prescription management**, **remote monitoring**, and **analytics/reporting** to deliver personalized care. Built with **Java (Spring Boot)** and designed for parity with **.NET (ASP.NET Core)** in future iterations.

---

## ✨ Core Capabilities
- Patient registration, onboarding, and profile management
- Appointment scheduling & telehealth session orchestration
- Electronic Health Records (EHR) CRUD and access controls
- Prescription creation, items, pharmacy integration hooks
- Health analytics & PDF/CSV report generation
- Secure authentication & authorization (Spring Security)

---

## 🧱 Architecture & Modules
Package root: `com.Team2.Mediconnect`

```
src/main/java/com/Team2/Mediconnect
├─ m1  # Patient Registration & Auth
│  ├─ Config/           └─ SecurityConfig
│  ├─ Controllers/      └─ AuthController
│  ├─ dto/              ├─ LoginRequest │ LoginResponse │ RegisterRequest
│  ├─ Models/           ├─ Gender │ Patient │ Role │ Users
│  ├─ Repository/       ├─ PatientRepository │ UserRepository
│  └─ Services/         ├─ AuthService │ UserService
│
├─ m2  # Appointment Scheduling & Telehealth
│  ├─ Controllers/      └─ AppointmentController
│  ├─ Models/           ├─ Appointment │ AppointmentMode │ AppointmentStatus │ Doctor
│  ├─ Repository/       ├─ AppointmentRepository │ DoctorRepository
│  └─ Services/         └─ AppointmentService
│
├─ m3  # (reserved for EHR module if separated)
│
├─ m4  # Prescription & Pharmacy Integration
│  ├─ Controllers/      └─ PrescriptionController
│  ├─ dto/              ├─ MedicineResponse │ PatientsResponse │
│  │                    ├─ PrescriptionItemRequest │ PrescriptionResponse │ SavePrescriptionRequest
│  ├─ Models/           ├─ Medicines │ PrescriptionItem │ Prescriptions
│  ├─ Repository/       ├─ MedicinesRepository │ PrescriptionItemRepository │ PrescriptionsRepository
│  └─ Services/         └─ PrescriptionService
│
├─ m5  # Health Analytics & Reporting
│  ├─ Controllers/      └─ GenerateReportController
│  ├─ Models/           └─ ReportSchema
│  ├─ Repository/       └─ ReportRepository
│  └─ Services/         └─ GenerateReportService
│
└─ MediconnectApplication

src/main/resources
├─ application.properties
└─ data.sql (seed data)
```

> **Note:** Actual endpoint paths may vary by controller mappings. Update the *API Reference* section below if your `@RequestMapping` differs.

---

## 🧰 Tech Stack
- **Language:** Java 21
- **Framework:** Spring Boot 4.x, Spring Web, Spring Data JPA, Spring Security
- **Database:** H2 (dev) / MySQL , not used till now (configurable)
- **Build Tool:** Maven 4+
- **Packaging:** Fat JAR via `spring-boot-maven-plugin`

---

## ✅ Prerequisites
- Java 21 or later
- Maven 4
- A database (H2/PostgreSQL/MySQL).

---

## ⚙️ Configuration
Edit `src/main/resources/application.properties` or set environment variables.

**Common properties**
```properties
# Server
server.port=8083

# --- Choose one DB profile ---
# H2 (in-memory) for quick start
spring.datasource.url=jdbc:h2:mem:mediconnect;MODE=PostgreSQL;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true

# PostgreSQL (example)
# spring.datasource.url=jdbc:postgresql://localhost:5432/mediconnect
# spring.datasource.username=mediconnect
# spring.datasource.password=medipass

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# SQL init (loads data.sql if present)
spring.sql.init.mode=always

# Security (adjust if using JWT; otherwise ignore)
security.jwt.secret=${JWT_SECRET:change-me}
security.jwt.expiration=${JWT_EXPIRATION:3600000}

# CORS (if configured in SecurityConfig)
app.cors.allowed-origins=http://localhost:3000
```

> If you are **not** using JWT, replace the `security.jwt.*` properties with your chosen auth mechanism details and update `SecurityConfig` accordingly.

---

## 🚀 Run Locally
```bash
# 1) Clean & build
your/project$ mvn clean install

# 2) Run Spring Boot (dev)
your/project$ mvn spring-boot:run
# or
your/project$ java -jar target/mediconnect-*.jar
```
App runs at: `http://localhost:8083`

---

## 🌱 Database Seeding
If `data.sql` exists, Spring will load it at startup (see `spring.sql.init.mode`). Use it to seed roles (e.g., `ADMIN`, `DOCTOR`, `PATIENT`), demo users, medicines, and sample appointments.

---

## 🔐 Security Model (High-Level)
- **Users** & **Roles** modeled via `Users` and `Role` (m1/Models)
- Suggested roles: `ADMIN`, `DOCTOR`, `PATIENT`
- `SecurityConfig` wires authentication & authorization rules; adjust CORS, CSRF, and session/JWT strategy as needed.


---

## 📚 API Reference (Draft)
> Base URL assumed: `/api` (update if different). Only representative payloads are shown—align with your DTOs.
> can be viewed in detail by using swagger :  http//localhost:8083/swagger-ui/index.html# 
### 1) Auth (m1)
**Register**
```http
POST /api/auth/register
Content-Type: application/json
```
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "gender": "string",
  "dob": "2026-01-19",
  "insurancePolicy": "string",
  "password": "string",
  "confirmPassword": "string"
}
```
**Login**
```http
POST /api/auth/login
{
  "email": "jane@demo.com",
  "password": "Secret@123"
}
```
**LoginResponse**(jwt not implemented yet) (example)
```json
{
  "token": "<jwt-token>",
  "userId": 101,
  "role": "PATIENT"
}
```

### 3) Appointments & Telehealth (m2)
```http
GET    /api/appointments?userId
```

```
GET    /api/appointments/doctor-appointments

POST   /api/appointments/bookuserId
```
{
  "doctorId": 0,
  "appointmentDate": "2026-01-19",
  "timeSlot": "string",
  "mode": "string",
  "forSomeoneElse": true,
  "patientName": "string",
  "patientPhone": "string",
  "patientGender": "string",
  "patientDob": "2026-01-19",
  "insurancePolicy": "string"
}
---response---
String: "booked successfully"

```
PUT    /api/appointments/update-status?appointmentId&status     # reschedule/update status
```
---response---
String : "updated successfully"
```
Appointment (example)
```json



> **Telehealth note:** The backend can expose short‑lived tokens/room IDs for your video provider/WebRTC signaling; integrate under `/api/telehealth/*` or within appointment lifecycle hooks.*/

### 4) Prescriptions (m4)
```http
```
POST  /api/prescriptions/add
{
  "patientId": 0,
  "appointmentId": 0,
  "remarks": "string",
  "items": [
    {
      "medicineId": 0,
      "frequency": "string"
    }
  ]
}
```
```
-------response------
String : successful message

```
GET  /api/prescriptions?doctorId
```
[
  {
    "id": 0,
    "patientName": "string",
    "appointmentDate": "string",
    "remarks": "string",
    "status": "string",
    "items": [
      {
        "medicineName": "string",
        "frequency": "string"
      }
    ]
  }
]
```
GET /api/prescriptions/patients?doctorId
```
[
  {
    "appointmentId": 0,
    "patientId": 0,
    "patientName": "string",
    "prescriptionExists": true
  }
]
```
GET /api/prescriptions/medicines
```
[
  {
    "id": 0,
    "name": "string"
  }
]
```
PUT /api/prescriptions?id&newStatus
```
------response-------
String : "Updated succesfully"

```
DELETE /api/prescriptions?id
```
String : "deleted successfully"
```

### 5) Analytics & Reporting (m5)
```http
POST /api/reports/generate
```
{
  "id": "string",
  "period": "string",
  "rateRecovery": 0,
  "rateReadmission": 0,
  "inPatients": 0,
  "outPatients": 0,
  "generatedDate": "2026-01-19"
}
```
-------response-------
```
{
  "id": "string",
  "period": "string",
  "rateRecovery": 0,
  "rateReadmission": 0,
  "inPatients": 0,
  "outPatients": 0,
  "generatedDate": "2026-01-19"
}
```
GET /api/reports
--------------response-----------
```
[
  {
    "id": "string",
    "period": "string",
    "rateRecovery": 0,
    "rateReadmission": 0,
    "inPatients": 0,
    "outPatients": 0,
    "generatedDate": "2026-01-19"
  }
]
```



## 📝 Coding Standards & Conventions
- Layered package structure by **module** (m1..m5)
- DTOs in `dto/`; entities in `Models/`; repositories in `Repository/`
- Prefer constructor injection for services; avoid field injection

---

## 🔄 Roadmap (Backend)
- EHR module endpoints (if m3 will host EHR separation)
- Telehealth token/signaling integration
- Role-based data filtering (doctor ↔ patient)
