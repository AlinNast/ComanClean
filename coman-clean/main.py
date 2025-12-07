import webbrowser
from flask import Flask, render_template, request

# 1. Initialize the Flask application
app = Flask(__name__)

# 2. Define the route for the home page ('/')
@app.route('/', methods=['GET', 'POST'])
def home():
    # Initialize a variable to hold the search results data
    data_to_display = None
    
    # Check if the user submitted the form (HTTP POST request)
    if request.method == 'POST':
        # Retrieve all the fields from the form submission.
        # The key names here MUST match the 'name' attributes in index.html (e.g., 'arrival_location').
        is_one_way = request.form.get('one_way') == 'true'

        data_to_display = {
            'arrival_location': request.form['arrival_location'],
            # Note the updated key name for the destination field
            'destination': request.form['destination'],
            'num_people': request.form['num_people'],
            'arrival_date': request.form['arrival_date'],
            'return_date': request.form.get('return_date'), # Use .get() in case it was hidden
            # This will be 'true' (string) if checked, or None if unchecked
            'one_way': is_one_way
        }
        
        print("--- Form Submitted Data ---")
        print(data_to_display)
        print("-------------------------")

    # Render the template, passing the page title and the submitted data (if available)
    # If the method was GET, data_to_display is None.
    # If the method was POST, data_to_display contains the submitted form fields.
    return render_template('index.html', page_title="Resort Booking Prototype", search_data=data_to_display)

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