import webbrowser
from flask import Flask, render_template

# 1. Initialize the Flask application
app = Flask(__name__)

# 2. Define the route for the home page ('/')
@app.route('/')
def home():
    # Renders the HTML file found in the 'templates' folder
    # This is how you bridge Python logic to HTML design
    return render_template('index.html', page_title="Resort Booking Prototype")

# 3. Server Configuration and Auto-Open
if __name__ == '__main__':
    # Define the host and port for the server
    host = '127.0.0.1' # localhost
    port = 3000
    
    # Construct the URL
    url = f'http://{host}:{port}/'

    # Open the default web browser when the server starts
    # Note: This is an extra step for convenience, Flask does not do this by default
    #print(f"Server is running. Opening browser to {url}")
    #webbrowser.open_new_tab(url)

    # Run the Flask development server
    # debug=True enables auto-reloading when you make code changes
    app.run(host=host, port=port, debug=True)