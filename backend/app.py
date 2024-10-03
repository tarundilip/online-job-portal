from flask import Flask, send_from_directory
import os

# Set the path to the React build directory
app = Flask(__name__, static_folder=os.path.join('..', 'myapp', 'build'))

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# To serve other static files (CSS, JS, images, etc.)
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
