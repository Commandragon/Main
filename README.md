# Delta Project

This repository contains the source code for a multi-faceted web project. The public-facing component is a static educational website covering topics in Science, History, and Mathematics. A secondary, hidden application serves as a dynamic portal.

## Project Structure

The project is organized into two main parts:

1.  **The Educational Frontend:**
    *   Located in the root directory (`/`).
    *   Files include `index.html` (Science), `H.html` (History), `M.html` (Math), and `xinfo.html` (About).
    *   Styled with `style.css` and uses JavaScript from `assets/site.js`.
    *   This part of the site serves as a plausible educational resource.

2.  **The "Delta" Application Module:**
    *   Located in the `/MENUAIUOFHUAFEIHIUFHIDHIHGAIOHGOAIHG/` directory.
    *   This is a modern, single-page application with a distinct "matrix" visual theme.
    *   It functions as a launcher to access various web-based games and tools.
    *   Includes a settings panel for theme customization and an FAQ page.

## How It Works

The project is designed with a cloaking mechanism to hide the Delta application from casual observation.

*   The educational pages (`index.html`, `H.html`, etc.) are the default entry points.
*   The Delta application is accessed via a hidden trigger on the educational pages. Clicking on the name "Doe" in the footer of any of these pages will execute a script (`openB()` in `assets/site.js`).
*   This script opens the Delta application in a new, sandboxed window (`about:blank` iframe) with a disguised title and favicon (e.g., "Google Drive", "Gmail") to avoid suspicion.

## Features

### Educational Site
*   Clean, academic design.
*   Responsive layout for different screen sizes.
*   Content sections on Science, History, and Mathematics.
*   An "About" page explaining the site's educational philosophy.

### Delta Application
*   Futuristic "hacker" UI with a matrix-style animated background.
*   A launcher for unblocked games and other web resources.
*   Customizable theme color and font via a settings modal.
*   Cinematic intro and exit animations (can be skipped).
*   Security features to prevent direct access or embedding outside of the intended cloaked window.

## Disclaimer

This project is intended for educational and experimental purposes only. The cloaking and launching mechanisms are implemented as a proof-of-concept for web application security and user experience design. The content linked from the Delta application is not hosted in this repository and is the responsibility of the respective site owners.
