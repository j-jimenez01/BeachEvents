# BeachEvents App

## Description

Introducing BeachEvents, your ultimate solution to stay informed and never miss out on important club meetings, school events, sports events, and everything happening at your school. With BeachEvents, you can say goodbye to the hassle of constantly checking for updates because we've got you covered.

Here is how BeachEvents makes your life easier:

1. **Smart Event Reminders:** BeachEvents ensures that you never miss any important event by sending you timely reminders. Say goodbye to the worry of forgetting or being caught off guard.

2. **Personalized Notifications:** Tired of being bombarded with unnecessary notifications? BeachEvents allows you to handpick the events you want to receive notifications for. No more spammy alerts cluttering your device; just the updates that matter to you.

3. **Event Details at Your Fingertips:** With BeachEvents, you have easy access to all the essential information about each event. Find out the location, start time, and end time effortlessly. No more searching for event details in multiple places.

4. **Future Event Notifications:** Stay ahead of the game with BeachEvents. We'll keep you informed about upcoming events, ensuring you never miss a single day of excitement.

Experience the convenience and peace of mind with BeachEvents. Get ready to stay connected, well-informed, and fully engaged in the vibrant events happening at your school.

## Project Setup and Deployment Guide

### Prerequisites

- Download and install [Python](https://www.python.org/downloads/)
- Download and install [Visual Studio Code](https://code.visualstudio.com/)
- Download and install [Node.js and npm](https://nodejs.org/)
- Download and install [React Native](https://reactnative.dev/docs/environment-setup)

### Download and Organize Project Files

Download the three folders - `BeachEvents`, `DjangoBackend`, and `ExpressBackend`.

Create a Visual Studio Code workspace and place these folders within the workspace directory.

### Configure React Native Project

Navigate to the `BeachEvents` folder within your Visual Studio Code workspace.

```bash
cd path/to/your/workspace/BeachEvents
npm install
yarn
# Follow React Native documentation for additional setup


`Configure Django Backend`
In a new terminal, Navigate to the DjangoBackend folder within your Visual Studio Code workspace.
pip install Django
# Make sure to use the appropriate Python environment and pip version you have set up.
cd mysite
Start the Django development server with the following command: python manage.py runserver 0.0.0.0:8000
This will run the server and make it accessible from any IP address (0.0.0.0) on port 8000. 
# Note: If you are using Python 3, you might use python3 instead of python.

Additional Django Packages (Optional):
Depending on your project requirements, you may need to install additional Django packages. Here are some common ones:
pip install django-crispy-forms  # Improved form rendering
pip install django-allauth       # Authentication
pip install django-rest-framework  # API development
pip install django-cors-headers  # Cross-Origin Resource Sharing
# Make sure to use the appropriate Python environment and pip version you have set up.


`Configure Express Backend`
In a new terminal, Navigate to the ExpressBackend folder within your Visual Studio Code workspace.
cd path/to/your/workspace/ExpressBackend
npm install
cd Backend
npm run Backend
# If the command fails, run npm install and verify there is a .env file


`Launch the React Native Application`
Navigate back to the BeachEvents terminal.
npx expo start --clear
# If the command fails, install expo-cli: npm install -g expo-cli


`Access the App`
Ensure Each Terminal is Running:
Keep the terminal where you executed the above commands open.
In the terminal where you started the React Native development server, scan the displayed QR code using the Expo Go app on your mobile device to access and test the application.

``````
**Credits:**

Contributors:
- Jose Jimenez (GitHub: j-jimenez01)
- Keshav Mehta (GitHub: mehtaKeshav)
- Dhruv Govasiya (Github: DhruvGorasiya)
- Juan Rivera (GitHub: JuanRivera-7)
- Josh Hicks (GitHub: hicksjoshua287)