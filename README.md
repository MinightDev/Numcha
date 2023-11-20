# Numcha CAPTCHA System

## Overview

Numcha is a simple and customizable CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) system designed to verify that the user interacting with a web application is a human and not a bot. It utilizes image rotation as a challenge for the user to solve.

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/551050418541821992/1176259452786180127/lg.png?ex=656e37fb&is=655bc2fb&hm=9a6f3d9e1548cac5a5cf603b123704d52ed194c2f5846d496f57dea1b713ae74&" alt="AirBnB Clone Logo" width="500">
</p>

## Features

- **Image Rotation Challenge:** Users are presented with an image that needs to be rotated to the correct orientation.
- **Random Image Selection:** The system randomly selects a set of images for each challenge to enhance security.
- **Dynamic Image Rotation:** The rotation angle of the image is set randomly, increasing the variability of challenges.

## Project Structure

The project consists of the following files:

- **index.html:** The main HTML file that contains the structure of the Numcha CAPTCHA system.
- **styles.css:** The stylesheet file defining the visual appearance of the CAPTCHA system.
- **numcha.js:** The JavaScript file containing the logic for generating and verifying CAPTCHA challenges.

## Getting Started

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/MinightDev/Numcha.git
   ```

2. Open the `index.html` file in a web browser to see the Numcha CAPTCHA system in action.

## Usage

- Click the CAPTCHA start button to initiate the challenge.
- Rotate the presented image until it's correctly oriented.
- Click the submit button to verify your response.
- The system provides feedback on whether the CAPTCHA was successfully solved or not.

## Customization

You can customize the CAPTCHA system by modifying the following parameters in the `numcha.js` file:

- **maxImages:** Controls the maximum number of images in a challenge.
- **imageUrls:** Array of URLs for the challenge images. Add or remove URLs to change the image set.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Numcha uses the Unsplash API to fetch placeholder images for the challenges. Special thanks to Unsplash for providing beautiful and freely-usable images.

## Author

[MinightDev (Ayoub)]

Feel free to reach out if you have any questions or concerns. Thank you for using Numcha!
