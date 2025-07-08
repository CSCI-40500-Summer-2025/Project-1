[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/V0iccz-y)

# Project 1

## Product Vision

FOR hosts and event attenders WHO need an event guestlist manager THE Event RSVP Maker is a web-based application THAT provides event management capability. UNLIKE other event management services, OUR product highlights bi-directional communication between the event hosts and guests in the form of guest notes. 



# RSVP Maker - Proof of Concept

## Description
This is a basic prototype for an RSVP Maker app. It shows how a user might RSVP to an event and includes mock data to represent a list of attendees.

## How to Run
1. Open `index.html` in your browser.
2. Fill in the name, email, and number of guests.
3. Click "Submit RSVP" — a pop-up will confirm your submission.
4. A sample RSVP list is shown below the form.

## Notes
- This is a **proof-of-concept**, meaning it does not save data or connect to a backend yet.
- Alerts are used in place of full functionality.

## Prototype Extension – v0.2

This version extends the RSVP Maker prototype to include:

- RSVP form submissions that display live on the page.
- RSVP entries are saved to LocalStorage and persist across refreshes.
- Export to CSV feature (for organizers).
- Improved styling for mobile friendliness.

To use:
1. Open `index.html` in your browser.
2. Submit an RSVP — it will appear in the list.
3. Click “Export Guest List” to download RSVPs as a CSV.



## Product Architecture (for RSVP Maker)

🔷 Important Qualities (based on Figure 4.4 & Table 4.4)
We prioritized the following non-functional qualities:
-Usability – The system must be intuitive and fast for guests to RSVP, especially on mobile.
-Maintainability – Components are loosely coupled (e.g., form, display logic, storage) to simplify future updates.
-Availability – The system is designed to remain usable even without internet, via localStorage (offline mode).
-Security – Minimal user input (e.g., no passwords), and we may add tokenized invite links in future.

###  Layered Architecture (based on Figure 4.10 & Table 4.6)
[1] Browser-Based UI
    - HTML/CSS/JavaScript
    - Input form & RSVP list rendering

[2] UI Management Layer
    - JavaScript DOM control
    - Form validation & input formatting

[3] Application Logic
    - RSVP creation, guest list logic
    - localStorage data handling

[4] Shared Services (planned)
    - Export to CSV
    - Future: API call to backend

[5] Database Layer (planned)
    - Currently simulated via localStorage
    - Future: Firebase / MongoDB or SQL backend

### Architecture Diagram (based on Figure 4.11)
+------------------------+    <-- UI Layer
|  RSVP Form (HTML)      |
|  Guest List Display    |
+------------------------+
            |
+------------------------+    <-- UI Mgmt Layer
|  Form Validation       |
|  JS Event Handling     |
+------------------------+
            |
+------------------------+    <-- App Logic
|  Create RSVP           |
|  Save to localStorage  |
|  Export to CSV         |
+------------------------+

### Technologies Chosen (Table 4.8)
| Component        | Choice                        | Rationale                      |
| ---------------- | ----------------------------- | ------------------------------ |
| **Platform**     | Web                           | Lightweight and easy to deploy |
| **Storage**      | `localStorage` (simulated DB) | Easy to mock DB in browser     |
| **Database**     | Planned: MongoDB / Firebase   | Flexible schema, cloud ready   |
| **Server**       | GitHub Pages / Firebase       | Fast deployment, scales easily |
| **Open Source**  | May reuse CSV export libs     | Saves dev time                 |
| **Dev Tools**    | VS Code, Chrome DevTools      | Familiar, lightweight          |
| **Future Stack** | React + Express.js backend    | Common full-stack web tools    |

