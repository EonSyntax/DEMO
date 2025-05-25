# Generate a sample JavaScript file with approximately 2000 lines of code.
# We'll create repetitive but meaningful functions, loops, and comments to reach the desired line count.

js_code = """// Sample 2000-Line JavaScript File
// Author: OpenAI ChatGPT
// Date: 2025

"""

# Template for each block of JS code (~10 lines)
block_template = """
// Function to perform a sample task {i}
function task{i}() {{
  console.log("Task {i} started.");
  for (let j = 0; j < 10; j++) {{
    console.log("Task {i}, Step " + j);
  }}
  console.log("Task {i} completed.");
}}

task{i}();
"""

# Each block is ~10 lines, so we need about 200 blocks
for i in range(1, 201):
    js_code += block_template.format(i=i)

# Save the JavaScript to a file
js_file_path = "/mnt/data/sample_2000_lines.js"
with open(js_file_path, "w") as f:
    f.write(js_code)

js_file_path
