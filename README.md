# Campus Line Wait Times Mobile App

**Project Lead:** Samrakshyan Adhikari  
**University:** Texas State University

---

## Overview

Campus Line Wait Times is a scalable, cross-platform mobile application built with React Native and Expo. The app enables real-time crowdsourcing and display of wait times for high-traffic campus locations such as dining halls, advising offices, and campus services.

Leveraging Firebase Firestore as a cloud-based NoSQL backend, the app delivers low-latency data retrieval and aggregation. Designed with accessibility and user experience in mind, the app features voice recognition and text-to-speech capabilities, enabling hands-free interaction.

---

## Features

- **Real-time, scalable data storage** using Firebase Firestore  
- **Cross-platform mobile UI** developed with React Native and Expo  
- **Voice recognition and speech synthesis** for enhanced accessibility (Expo Speech APIs)  
- **Dynamic data modeling and validation** to aggregate crowd-sourced wait times and filter anomalous reports  
- **Geolocation-aware notifications** to prompt wait time reporting at specific campus locations  
- **Clean, modular codebase** managed through GitHub with agile development workflows  

---

## Tech Stack

- **Frontend:** React Native, Expo  
- **Backend:** Firebase Firestore (NoSQL, real-time database)  
- **APIs:** Expo Speech for voice recognition and text-to-speech  
- **Version Control:** Git, GitHub  
- **Development Practices:** Agile methodologies, CI/CD readiness

---

## Architecture

The app employs a client-server model where the React Native frontend interacts with Firebase Firestore for real-time data synchronization. User-submitted wait times are validated and aggregated using custom data models designed to improve accuracy and reliability.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/samrakshanadhikari/campus-line-wait-times.git
   cd campus-line-wait-times
