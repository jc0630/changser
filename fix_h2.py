import re

with open('src/pages/AboutPage.tsx', 'r') as f:
    content = f.read()

# Fix Section 3 h2 to contain the full text
content = content.replace(
    '產業經驗\n                <span className="text-sm font-normal text-slate-500 font-en mb-1">Target Sectors</span>\n              </h2>\n              {/* Divider Line */}\n              <div className="w-full h-[1px] bg-slate-300 mb-8 relative">\n                <div className="absolute left-0 top-0 h-[1px] w-12 bg-emerald-600"></div>\n              </div>\n              \n              <h3 className="text-lg font-bold text-slate-800 mb-6">建築與工程金屬外覆系統</h3>',
    '產業經驗：建築與工程金屬外覆系統\n                <span className="text-sm font-normal text-slate-500 font-en mb-1">Target Sectors</span>\n              </h2>\n              {/* Divider Line */}\n              <div className="w-full h-[1px] bg-slate-300 mb-8 relative">\n                <div className="absolute left-0 top-0 h-[1px] w-12 bg-emerald-600"></div>\n              </div>'
)

with open('src/pages/AboutPage.tsx', 'w') as f:
    f.write(content)
