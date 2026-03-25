import os
import re

files_instructivos = [
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\instructivo\Instructivo_amazon.html",
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\instructivo\Instructivo_android.html",
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\instructivo\Instructivo_apple.html",
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\instructivo\Instructivo_celulares.html",
    r"c:\Users\Aguus\OneDrive\Escritorio\Laraplay\help\Grilla.html"
]

for filepath in files_instructivos:
    if os.path.exists(filepath):
        print(f"Processing {filepath}")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove native <style> block
        content = re.sub(r'\s*<style>.*?</style>', '', content, flags=re.DOTALL)
        content = re.sub(r'\s*style="[^"]*"', '', content)

        if "Grilla.html" in filepath:
            # Grilla specific
            content = content.replace('class="container"', 'class="max-w-4xl mx-auto my-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden"')
            content = content.replace('class="header"', 'class="flex justify-between items-center p-6 bg-gray-900 border-b border-gray-700"')
            content = content.replace('class="header-title"', 'class="text-2xl font-black text-gray-100 uppercase tracking-wide"')
            content = content.replace('class="logo-laraplay"', 'class="w-36"')
            content = content.replace('class="section-title"', 'class="px-8 py-4 bg-gray-800 text-xl font-bold text-brand-magenta border-y border-gray-700"')
            content = content.replace('<table', '<table class="w-full table-fixed border-collapse"')
            content = content.replace('<th', '<th class="px-8 py-3 text-left border-b border-gray-700"')
            content = content.replace('<td', '<td class="px-8 py-3 text-left border-b border-gray-700 text-gray-300 align-middle"')
            content = content.replace('class="channel-number"', 'class="text-brand-magenta font-bold text-center w-[15%]"')
            content = content.replace('class="col-name"', 'class="w-[60%]"')
            content = content.replace('class="col-pack"', 'class="w-[25%]"')
            content = content.replace('class="channel-pack pack-basico"', 'class="uppercase text-xs font-bold px-3 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full whitespace-nowrap"')
            content = content.replace('class="channel-pack pack-premium"', 'class="uppercase text-xs font-bold px-3 py-1 bg-brand-orange/20 text-brand-orange rounded-full whitespace-nowrap"')
            content = content.replace('class="footer-note"', 'class="px-8 py-6 bg-gray-900 text-sm text-center text-gray-400 border-t border-gray-700"')
            content = content.replace('class="sub-note"', 'class="px-8 py-4 bg-gray-800 text-brand-orange border-t border-gray-700 text-center"')
        else:
            # Instructivos specific
            content = content.replace('class="page"', 'class="max-w-3xl mx-auto my-10 bg-gray-800 border border-gray-700 p-10 rounded-xl shadow-lg"')
            content = content.replace('class="logo-laraplay"', 'class="w-48"')
            content = content.replace('<h1>', '<h1 class="text-3xl font-bold text-center text-gray-100 mt-4 mb-2">')
            content = content.replace('class="subtitle"', 'class="text-center text-gray-300 mb-10"')
            content = content.replace('class="step"', 'class="flex items-start mb-8 bg-gray-800 rounded-xl p-6 border border-gray-700"')
            content = content.replace('class="step-number"', 'class="flex-shrink-0 w-12 h-12 rounded-full bg-brand-magenta/20 text-brand-magenta text-2xl font-bold flex items-center justify-center mr-6"')
            content = content.replace('class="step-content"', '')
            content = content.replace('<h2>', '<h2 class="text-xl font-semibold text-gray-100 mb-2">')
            
            # Use regex for <p> inside step/main but not inside result-box
            # Let's just handle text-gray-300 generally
            content = re.sub(r'<p>', r'<p class="text-gray-300 leading-relaxed">', content)
            
            # Result boxes
            content = content.replace('class="result-box compatible"', 'class="mt-8 p-6 rounded-xl text-center bg-gray-800 border border-green-500/50 text-green-400"')
            content = content.replace('class="result-box not-compatible"', 'class="mt-4 p-6 rounded-xl text-center bg-gray-800 border border-red-500/50 text-red-400"')
            content = content.replace('<h3>', '<h3 class="text-xl font-bold mb-2">')
            
            # Clean up duplicates
            content = content.replace('<p class="text-gray-300 leading-relaxed" class="subtitle">', '<p class="text-center text-gray-300 mb-10 leading-relaxed">')

            # also logo color brightness invert
            content = content.replace('src="https://www.it-tel.com.ar/img/laraplay_logo.png"', 'src="https://www.it-tel.com.ar/img/laraplay_logo.png"')

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done")
