# Install npm modules

npm install --save react react-dom babelify babel-preset-react babel-preset-es2015

# Install browserify

npm install -g browserify

# Install Compass

gem install compass

# Compile JavaScript

browserify -t [ babelify --presets [ react ] ] src/main.js -o build/bundle.js

# Compile Sass to CSS

compass compile
