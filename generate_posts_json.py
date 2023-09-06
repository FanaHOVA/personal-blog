import os
import json
import re

# Step 1: Get a list of all markdown files in /pages/blog
markdown_files = [f for f in os.listdir('./pages/blog') if (f.endswith('.md') or f.endswith('.mdx')) and f != 'about.md']

print(f"Total markdown files found: {len(markdown_files)}")  # Debugging step

# Initialize an empty list to hold post data
posts_data = []

# Regex patterns for frontmatter title and date extraction
title_pattern = re.compile(r'title: ["\']?(.*?)["\']?[\n$]')
date_pattern = re.compile(r"date: (\d{4}-\d{2}-\d{2}).*?")

# Step 2: Extract the date and title from the markdown headers
for markdown_file in markdown_files:
    with open(os.path.join('./pages/blog', markdown_file), 'r') as f:
        content = f.read()

        # Extract title and date using regex
        title_match = title_pattern.search(content)
        date_match = date_pattern.search(content)
        
        if title_match and date_match:
            title = title_match.group(1)
            date = date_match.group(1)
            slug = f"/blog/{markdown_file.replace('.mdx', '').replace('.md', '')}"
            posts_data.append({"slug": slug, "date": date, "title": title})
            print(f"Matched {markdown_file}")  # Debugging step
        else:
            print(title_match, date_match)
            print(f"Did not match {markdown_file}")  # Debugging step

# Step 3: Generate the posts.json file using the extracted data
with open('posts.json', 'w') as f:
    json.dump({"posts": posts_data}, f, indent=2)

print(f"Generated posts count: {len(posts_data)}")  # Debugging step
