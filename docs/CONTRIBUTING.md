# Contributing to LeetCode Solutions

We welcome contributions to make this repository even better! Whether you're fixing a bug, adding a new solution, or improving documentation, your help is appreciated.

## How to Contribute

1.  **Fork the Repository:** Click the "Fork" button at the top right of this page.
2.  **Clone Your Fork:**
    ```bash
    git clone https://github.com/your-username/leetcode-solutions.git
    cd leetcode-solutions
    ```
3.  **Create a Branch:**
    ```bash
    git checkout -b feature/problem-name
    ```
4.  **Make Your Changes:**
    -   Follow the [File Structure](#file-structure) guidelines.
    -   Ensure your code follows the [Coding Standards](#coding-standards).
5.  **Commit Your Changes:**
    ```bash
    git commit -m "Add solution for Problem Name"
    ```
6.  **Push to Your Fork:**
    ```bash
    git push origin feature/problem-name
    ```
7.  **Open a Pull Request:** Go to the original repository and click "New Pull Request".

## File Structure

For new problems, create a folder named `XXXX-problem-name` inside the `problems/` directory.

Each problem folder must contain:
-   `solution.js`: JavaScript solution
-   `solution.py`: Python solution
-   `README.md`: Problem description and explanation

## Coding Standards

### General
-   Write clean, readable code with meaningful variable names.
-   Include time and space complexity analysis in comments.
-   Add comments to explain complex logic.

### JavaScript
-   Use `camelCase` for variables and functions.
-   Use JSDoc style comments for function documentation.

### Python
-   Use `snake_case` for variables and functions.
-   Use docstrings for function documentation.
-   Include type hints.

## Documentation Requirements

The problem `README.md` should follow the template:
-   Problem Title & Link
-   Difficulty & Topics
-   Problem Description
-   Approaches (Intuition, Algorithm, Complexity)
-   Key Takeaways

Happy Coding! 🚀
