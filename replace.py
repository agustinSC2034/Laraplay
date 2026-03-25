import os
import re

files_to_process = [
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\index.html",
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\help\index.html",
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\src\components\Navbar.js",
]

replacements = [
    (r"text-cyan-400", "text-brand-cyan"),
    (r"text-cyan-300", "text-brand-cyan/80"),
    (r"text-\[\#c1268c\]", "text-brand-magenta"),
    (r"bg-cyan-400", "bg-brand-cyan"),
    (r"border-cyan-400", "border-brand-cyan"),
    (r"bg-\[\#c1268c\]", "bg-brand-magenta"),
    (r"rgba\(193, 38, 140, 0\.7\)", "rgba(193,38,140,0.7)"),
    (r"rgba\(0, 224, 240, 0\.5\)", "var(--tw-shadow-color)"), # simplified
    (r"gradient-text", "bg-gradient-to-r from-brand-cyan to-brand-magenta text-transparent bg-clip-text"),
    (r"pink-accent", "text-brand-magenta"),
    (r"main-gradient-bg", "bg-gradient-to-br from-brand-blue to-brand-magenta"),
    (r"section-bg", "bg-gray-800/50 backdrop-blur-md border border-white/10 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all duration-300"),
    (r"cta-button", "bg-brand-cyan text-white hover:bg-brand-cyan/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-cyan/50"),
    (r"plan-card-highlight", "border-brand-magenta/60 shadow-lg shadow-brand-magenta/20 hover:border-brand-magenta hover:shadow-xl hover:shadow-brand-magenta/40")
]

for filepath in files_to_process:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove style block in html files
        content = re.sub(r'\s*<style>.*?</style>', '', content, flags=re.DOTALL)
        
        # Remove inline styles
        content = re.sub(r'\s*style="[^"]*"', '', content)
        content = re.sub(r'\s*onmouseover="[^"]*"', '', content)
        content = re.sub(r'\s*onmouseout="[^"]*"', '', content)
        
        for old, new in replacements:
            content = re.sub(old, new, content)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done")
