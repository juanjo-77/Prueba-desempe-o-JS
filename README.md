Crudzaso

Welcome to Crudzaso, a platform designed for tracking academic tasks. This project allows students to manage their tasks with persistent data, providing an interface for both users and administrators.


Features:


Authentication: a login system that distinguishes between users and administrators. Depending on your role, you will be directed to different pages, with the possibility of accessing a register.

Task management (CRUD): you can create, view, update the status, and delete tasks. The system allows you to mark tasks as pending or completed.

Data persistence: uses the web storage API (LocalStorage) to retain information even after refreshing or closing the browser, for login and users who will be admitted to the page.

Control panel: view real-time statistics showing the total number of tasks, completed tasks, and pending tasks.

Responsive design: the interface adapts to both mobile devices and computers, ensuring usability on different screen sizes.


How it works:

JSON authentication:
The system uses a JSON file to authenticate users. Based on the JSON data, users are redirected to different sections of the site. Administrators can access a special control panel to monitor user activity.



Task management (CRUD):


Tasks are managed via an array of objects, where:

.find(): Locates a specific task and toggles its status between Pending and Completed.

.filter(): Removes tasks from the system or filters the tasks displayed in the view.

.map(): Dynamically manages unique task IDs and updates the interface.

Statistics:
The Dashboard automatically calculates and updates statistics like the number of Total, Completed, and Pending tasks by filtering the global task array in real-time.

Admin Dashboard:
Admins have access to a special section that uses an iframe to view what the users are doing in real-time.
