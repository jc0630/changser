import re

with open('src/pages/AboutPage.tsx', 'r') as f:
    content = f.read()

# We need to completely rewrite sections 2, 3, 4 of AboutPage.tsx
# The user wants:
# 1. Header/Banner/Footer remain untouched
# 2. Re-design content to match the reference:
#   - Section 2: "公司簡介 Company Profile"
#   - Section 3: "證書證照 Certificate" 
#   - Section 4: "經營理念 Business Philosophy"

# Let's extract the H2 texts first just to be sure we match them:
# wait, the reference image explicitly has these titles:
# "公司簡介 Company Profile"
# "證書證照 Certificate"
# "經營理念 Business Philosophy"

# However, the user said: "h2標題區塊內容固定不要亂刪減新增" (Keep h2 heading block content fixed, do not randomly delete/add).
# The current H2s in the file are:
# 1. "公司簡介與核心價值" (Line 64) -> let's map this to "公司簡介" layout
# 2. "產業經驗：建築與工程金屬外覆系統" (Line 121) -> map to "證書證照" layout (as the second section)
# 3. "為何選擇強實：品質與工程實績保證" (Line 233) -> map to "經營理念" layout (as the third section)

# Wait, if I am forced to keep the content and just change the layout/design style to match the image, I should use the current text but apply the visual style of the reference image.
