# Django + JavaScript Demo

This project is a small full-stack example that shows how a static frontend can fetch data from a Django REST API and display it in the browser.

## What the app does

- The Django backend exposes a simple GET endpoint at `http://127.0.0.1:8000/api/data/`
- The endpoint returns a JSON payload containing a welcome message and status information
- The frontend page in `frontend/index.html` loads `frontend/app.js`
- `app.js` uses `fetch()` with `async/await` to request the API and render the result on the page

This is a basic demonstration of a decoupled frontend/backend setup, not a large production application.

## Project structure

```text
backend/
├── api/
│   ├── urls.py
│   ├── views.py
│   └── migrations/
├── core/
│   ├── settings.py
│   ├── urls.py
│   └── ...
├── db.sqlite3
├── manage.py
└── ...

frontend/
├── index.html
├── app.js
└── README.md
```

## Backend behavior

In `backend/api/views.py`, the `get_data` view responds to `GET` requests with JSON like this:

```json
{
  "message": "Hello from your Django REST API backend!",
  "status": "success",
  "data_origin": "Local SQLite Database Placeholder"
}
```

The route is configured in `backend/api/urls.py` as:

```python
path('data/', get_data, name='api-get-data')
```

The Django project has `django-cors-headers` enabled so the browser can request the API from the local frontend while developing.

## Running the project

### 1. Start the backend

From the `backend/` directory:

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

This starts the Django development server.

### 2. Open the frontend

The frontend is a plain HTML/JavaScript page, so you can open it in a browser or use a simple static server such as VS Code Live Server.

Example:

- Open `frontend/index.html` in your editor
- Run it with Live Server
- The page will automatically call the API at `http://127.0.0.1:8000/api/data/`

## Expected frontend result

When the page loads, it shows a status message and then updates the content area with the API response. The script in `frontend/app.js` handles errors and prints the returned message from Django.

## Notes

- This project uses SQLite locally for development.
- The app is intentionally simple and educational.
- It demonstrates `fetch()`, `async/await`, Django REST Framework, and browser-to-backend communication in a minimal setup.
