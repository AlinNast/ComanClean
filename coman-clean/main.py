import webbrowser
from flask import Flask

# 1. Initialize the Flask application
app = Flask(__name__)

# 2. Define the route for the home page ('/')
@app.route('/')
def hello_world():
    # This function returns the content that will be displayed in the browser
    return '<h1>Hello, WebDevHelper! Your Python web server is running.</h1>'

# 3. Server Configuration and Auto-Open
if __name__ == '__main__':
    # Define the host and port for the server
    host = '127.0.0.1' # localhost
    port = 3000
    
    # Construct the URL
    url = f'http://{host}:{port}/'

    # Open the default web browser when the server starts
    # Note: This is an extra step for convenience, Flask does not do this by default
    print(f"Server is running. Opening browser to {url}")
    webbrowser.open_new_tab(url)

    # Run the Flask development server
    # debug=True enables auto-reloading when you make code changes
    app.run(host=host, port=port, debug=True)